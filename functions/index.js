const {onCall} = require("firebase-functions/v2/https");
const {setGlobalOptions} = require("firebase-functions/v2");
const admin = require("firebase-admin");
const logger = require("firebase-functions/logger");

// Initialize Firebase Admin
admin.initializeApp();

// Set global options for all functions
setGlobalOptions({maxInstances: 10});

/**
 * Cloud Function to handle contact form submissions
 * This is an HTTPS callable function that can be invoked from the client
 */
exports.submitContactForm = onCall({cors: true}, async (request) => {
  const data = request.data;

  // Validate required fields
  if (!data.name || !data.email || !data.service || !data.message) {
    logger.error("Missing required fields in contact form submission");
    throw new Error(
        "Missing required fields: name, email, service, " +
        "and message are required",
    );
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    logger.error("Invalid email format", {email: data.email});
    throw new Error("Invalid email format");
  }

  try {
    // Prepare the contact data
    const contactData = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone ? data.phone.trim() : "",
      company: data.company ? data.company.trim() : "",
      service: data.service,
      message: data.message.trim(),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      status: "new",
      source: "website",
    };

    // Add to Firestore
    const docRef = await admin.firestore()
        .collection("messages")
        .add(contactData);

    logger.info("Contact form submitted successfully", {
      docId: docRef.id,
      email: contactData.email,
    });

    return {
      success: true,
      message: "Your message has been sent successfully. " +
               "We'll get back to you soon.",
      id: docRef.id,
    };
  } catch (error) {
    logger.error("Error saving contact form to Firestore", {
      error: error.message,
      stack: error.stack,
    });
    throw new Error(
        "Failed to submit contact form. Please try again later.",
    );
  }
});
