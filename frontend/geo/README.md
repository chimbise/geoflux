# GeoFlux Engineering Website

A modern, secure, and responsive website for GeoFlux Engineering Services, built with React and Vite.

## 🌟 Features

### Core Functionality
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Accessibility**: WCAG compliant with ARIA labels, keyboard navigation, and screen reader support
- **Performance**: Optimized with lazy loading, code splitting, and efficient rendering

### Security & Compliance
- **GDPR Compliant**: Cookie consent management and privacy controls
- **ISO 9001 Alignment**: Quality management standards reflected in content
- **Data Protection**: Secure form handling and privacy policy implementation
- **Security Headers**: Content Security Policy and other protective measures

### Sections
1. **Hero**: Engaging landing section with key statistics
2. **Services**: Comprehensive engineering service offerings
3. **Projects**: Portfolio showcase with filtering capabilities
4. **About**: Company information, values, and certifications
5. **Contact**: Professional contact form with validation
6. **Privacy Policy**: Detailed GDPR-compliant privacy documentation

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
geo/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── CookieConsent.jsx
│   │   └── CookieConsent.css
│   ├── sections/            # Page sections
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── PrivacyPolicy.jsx
│   │   └── Legal.css
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles and design system
├── index.html               # HTML template with meta tags
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: #0066cc
- **Primary Dark**: #004080
- **Accent Orange**: #ff6b35
- **Accent Teal**: #00a8a8
- **Success**: #10b981
- **Error**: #ef4444

### Typography
- **Headings**: Inter (700-800 weight)
- **Body**: Inter (400-600 weight)
- **Scale**: Responsive using clamp()

### Spacing
- **XS**: 0.5rem (8px)
- **SM**: 1rem (16px)
- **MD**: 1.5rem (24px)
- **LG**: 2rem (32px)
- **XL**: 3rem (48px)
- **2XL**: 4rem (64px)
- **3XL**: 6rem (96px)

## 🔒 Security Features

### Implemented
- GDPR-compliant cookie consent system
- Privacy policy and data protection documentation
- Secure form handling with validation
- Content Security Policy headers
- XSS protection via React's built-in escaping

### Recommended Server Configuration
Add these headers to your server configuration:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000; includeSubDomains
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 968px
- **Desktop**: > 968px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader optimized
- Color contrast compliance (WCAG AA)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📊 Performance Optimization

- Component lazy loading
- Image optimization
- CSS code splitting
- Minification and compression
- Tree shaking
- Efficient re-rendering

## 🧪 Testing

```bash
# Run linting
npm run lint
```

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Deploy to Hosting
Upload the `dist/` folder contents to your web server or use services like:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Azure Static Web Apps

## 📝 Customization

### Update Company Information
Edit the following files:
- `src/sections/Hero.jsx` - Hero section content
- `src/sections/About.jsx` - Company information
- `src/sections/Services.jsx` - Service offerings
- `src/sections/Contact.jsx` - Contact details
- `src/components/Footer.jsx` - Footer content

### Update Styling
- Global styles: `src/index.css`
- Component styles: Individual `.css` files

### Update Meta Tags
Edit `index.html` for SEO and social media meta tags.

## 🤝 Contributing

This is a proprietary project for GeoFlux Engineering.

## 📄 License

Copyright © 2025 GeoFlux Engineering. All rights reserved.

## 📞 Support

For technical support or questions:
- Email: info@geoflux.com
- Phone: +1 (234) 567-890

---

Built with ❤️ using React + Vite
