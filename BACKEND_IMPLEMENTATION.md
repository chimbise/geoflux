# Backend Implementation with Firebase Functions

## Overview
The contact form submission has been migrated from client-side Firestore access to a secure server-side Firebase Cloud Function. This implementation follows security best practices by keeping database credentials and write access on the backend.

## Architecture

### Cloud Function: `submitContactForm`
- **Location**: `functions/index.js`
- **Type**: HTTPS Callable Function (Firebase Functions v2)
- **Region**: us-central1
- **Runtime**: Node.js 24

### Function Features
- **Input validation**: Validates required fields (name, email, service, message)
- **Email validation**: Regex-based email format checking
- **Data sanitization**: Trims whitespace, normalizes email to lowercase
- **Error handling**: Comprehensive error logging and user-friendly error messages
- **Firestore integration**: Writes to `messages` collection with server timestamp
- **CORS enabled**: Allows calls from your hosted website

### Data Structure
Each contact submission is stored in Firestore with the following fields:
```javascript
{
  name: string,           // Trimmed full name
  email: string,          // Trimmed, lowercase email
  phone: string,          // Optional phone number
  company: string,        // Optional company name
  service: string,        // Selected service category
  message: string,        // Trimmed message content
  timestamp: timestamp,   // Server-generated timestamp
  status: "new",          // Submission status
  source: "website"       // Origin of the submission
}
```

## Frontend Integration

### Updated Contact Component
- **File**: `frontend/geo/src/sections/Contact.jsx`
- **Change**: Removed direct Firestore imports
- **New approach**: Uses `httpsCallable` from Firebase Functions SDK

### Function Call
```javascript
const functions = getFunctions();
const submitContactForm = httpsCallable(functions, 'submitContactForm');
const result = await submitContactForm(formData);
```

## Security Improvements

### Before (Insecure)
- Client had direct Firestore write access
- Database credentials exposed in frontend bundle
- No server-side validation
- Vulnerable to abuse and spam

### After (Secure)
- No direct database access from client
- All writes go through validated Cloud Function
- Server-side input validation and sanitization
- Rate limiting available through Cloud Functions
- Firestore credentials remain server-side only

## Deployment

### Functions Deployment
```bash
firebase deploy --only functions
```
Deploys the Cloud Function to Firebase.

### Hosting Deployment
```bash
npm run build
firebase deploy --only hosting
```
Deploys the updated frontend that calls the Cloud Function.

## Testing

### Live URL
https://geoflux-3f828.web.app

### Test the Contact Form
1. Navigate to the Contact section
2. Fill out all required fields
3. Submit the form
4. Check Firebase Console > Firestore > `messages` collection for the entry

### Firebase Console
https://console.firebase.google.com/project/geoflux-3f828/overview

- **Functions logs**: Check function execution and errors
- **Firestore data**: View submitted messages
- **Performance**: Monitor function latency and errors

## Configuration Files

### `functions/package.json`
Dependencies:
- `firebase-admin`: ^13.0.1 (for Firestore access)
- `firebase-functions`: ^6.2.0 (Cloud Functions SDK)

### `functions/.eslintrc.js`
ESLint configuration for code quality:
- Google style guide
- ES2018 compatibility
- Max line length: 80 characters

### `firebase.json`
Updated to include functions configuration:
```json
{
  "functions": [{
    "source": "functions",
    "codebase": "default",
    "ignore": [
      "node_modules",
      ".git",
      "firebase-debug.log",
      "firebase-debug.*.log"
    ]
  }]
}
```

## Cost Optimization

### Global Options
- **Max instances**: 10 (prevents runaway costs from traffic spikes)
- **Cleanup policy**: 1 day (automatic container image deletion)

### Free Tier Limits
- 2 million function invocations/month
- 400,000 GB-seconds/month
- 200,000 CPU-seconds/month

Normal contact form usage should stay well within free tier.

## Monitoring & Maintenance

### Function Logs
View in Firebase Console or via CLI:
```bash
firebase functions:log
```

### Common Issues

#### Function Not Found
- **Cause**: Function not deployed or wrong name
- **Fix**: Verify deployment with `firebase functions:list`

#### CORS Errors
- **Cause**: Function called from unauthorized origin
- **Fix**: Already configured with `{cors: true}`

#### Validation Errors
- **Cause**: Missing required fields or invalid email
- **Fix**: Check frontend form validation matches backend requirements

## Future Enhancements

### Potential Additions
- Email notifications when new messages are submitted
- SMS notifications for urgent inquiries
- Integration with CRM systems
- Automated spam detection
- Rate limiting per IP address
- Webhook notifications to Slack/Discord

### Example: Email Notifications
Install nodemailer in functions:
```bash
cd functions
npm install nodemailer
```

Add to `submitContactForm`:
```javascript
const nodemailer = require('nodemailer');
// Send email notification after Firestore write
```

## Rollback Procedure

If issues occur:
1. Revert frontend to previous version
2. Keep functions deployed (backward compatible)
3. Investigate logs in Firebase Console
4. Fix and redeploy

## Git Repository
All code is version controlled at:
https://github.com/chimbise/geoflux

Latest commit includes:
- Firebase Functions setup
- Backend implementation
- Frontend integration
- Updated dependencies

---

**Status**: ✅ Deployed and Live  
**Last Updated**: February 2024  
**Deployed By**: GitHub Copilot  
**Project**: GeoFlux Engineering Website
