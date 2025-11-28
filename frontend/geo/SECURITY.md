# Security Configuration

## Content Security Policy

Add the following headers to your server configuration:

### Nginx
```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self';" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
```

### Apache (.htaccess)
```apache
<IfModule mod_headers.c>
    Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self';"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-Content-Type-Options "nosniff"
    Header set X-XSS-Protection "1; mode=block"
    Header set Strict-Transport-Security "max-age=31536000; includeSubDomains"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
    Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>
```

### Vercel (vercel.json)
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self';"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

## GDPR Compliance Checklist

- [x] Cookie consent banner implemented
- [x] Privacy policy documentation
- [x] User data rights explained
- [x] Data retention policies defined
- [x] Contact information for data protection officer
- [x] Secure data handling practices
- [x] Right to access, rectify, and delete data
- [x] Consent withdrawal mechanism
- [ ] Data processing agreement for third-party services
- [ ] Regular privacy audits

## SSL/TLS Configuration

Ensure your production deployment uses HTTPS:

1. Obtain SSL certificate (Let's Encrypt recommended)
2. Configure server to redirect HTTP to HTTPS
3. Enable HSTS headers (configured above)
4. Test SSL configuration at [SSL Labs](https://www.ssllabs.com/ssltest/)

## Form Security

The contact form includes:
- Client-side validation
- CSRF protection (implement server-side)
- Rate limiting (implement server-side)
- Input sanitization (implement server-side)
- Spam prevention (consider adding reCAPTCHA)

## Data Protection Best Practices

1. **Encryption**: Use HTTPS for all data transmission
2. **Access Control**: Implement proper authentication and authorization
3. **Data Minimization**: Only collect necessary information
4. **Regular Backups**: Implement automated backup procedures
5. **Audit Logging**: Track access to personal data
6. **Incident Response**: Have a plan for data breach scenarios
7. **Staff Training**: Educate team on GDPR and data protection

## Security Monitoring

Regularly monitor for:
- Suspicious login attempts
- Unusual traffic patterns
- Security vulnerability announcements
- Dependency vulnerabilities (use `npm audit`)
- SSL certificate expiration

## Update Schedule

- Review and update privacy policy: Annually
- Security dependency updates: Monthly
- Critical security patches: Immediately
- SSL certificate renewal: As needed (automated with Let's Encrypt)
