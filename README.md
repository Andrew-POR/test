# Green Pastures Farm - Farm to Table Website

A modern, responsive website for a Farm to Table meat company that raises and sells ethically raised meats (beef, chicken, lamb, and pork). The website features a beautiful design with sage green as the primary color and includes e-commerce functionality with Square API integration.

## 🌟 Features

### Design & User Experience
- **Modern, Responsive Design**: Beautiful layout that works perfectly on all devices
- **Sage Green Color Scheme**: Elegant and natural color palette reflecting the farm-to-table theme
- **Smooth Animations**: Subtle hover effects and transitions for enhanced user experience
- **Mobile-First Approach**: Optimized for mobile devices with touch-friendly interactions

### Pages & Content
- **Home Page**: Hero section, product categories, about us section, and features
- **About Us Page**: Company story, values, farming practices, and team information
- **Products Page**: Comprehensive product catalog with filtering and search capabilities

### E-commerce Features
- **Product Catalog**: Detailed product listings with AI-generated image placeholders
- **Advanced Filtering**: Filter by meat type, cut type, and price range
- **Shopping Cart**: Full cart functionality with add/remove items and total calculation
- **Square Integration**: Ready for Square API integration for payment processing
- **Local Storage**: Cart persistence across browser sessions

### Technical Features
- **Responsive Navigation**: Mobile-friendly navigation with hamburger menu
- **Interactive Elements**: Hover effects, notifications, and smooth scrolling
- **Performance Optimized**: Fast loading times and efficient code structure
- **Cross-Browser Compatible**: Works on all modern browsers

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for accessibility and SEO
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Interactive functionality and dynamic content
- **Font Awesome**: Icons for enhanced visual appeal
- **Google Fonts**: Inter font family for modern typography

## 📁 Project Structure

```
├── index.html          # Home page
├── about.html          # About us page
├── products.html       # Products page with filters
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. **Clone or Download** the project files to your local machine

2. **Open the Website**:
   - **Option 1**: Double-click `index.html` to open in your browser
   - **Option 2**: Use a local server for better development experience

3. **For Local Development** (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Access the Website**: Open `http://localhost:8000` in your browser

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy color customization. Main colors are defined in `styles.css`:

```css
:root {
    --sage-green: #9CAF88;
    --sage-green-dark: #7A8F6A;
    --sage-green-light: #B8C5A6;
    --sage-green-pale: #E8F0E3;
    /* ... other colors */
}
```

### Content
- **Product Information**: Update product details in `products.html`
- **Company Information**: Modify content in `about.html` and `index.html`
- **Contact Details**: Update footer contact information in all HTML files

### Images
Currently using placeholder icons. Replace with actual images:
- Product images: Replace `.ai-image-placeholder` divs with `<img>` tags
- Team photos: Replace `.member-placeholder` divs with actual photos
- Hero images: Replace placeholder divs with background images

## 💳 Square API Integration

The website is prepared for Square API integration:

### Current Implementation
- Shopping cart functionality with local storage
- Checkout button that simulates payment process
- Product catalog structure ready for Square Catalog API

### To Complete Integration
1. **Get Square API Keys**: Sign up at [Square Developer](https://developer.squareup.com/)
2. **Add Square SDK**: Include Square's JavaScript SDK
3. **Configure Products**: Set up products in Square Dashboard
4. **Implement Payment**: Replace demo checkout with actual Square payment flow

### Required Square APIs
- **Catalog API**: For product management
- **Orders API**: For order creation
- **Payments API**: For payment processing
- **Web Payments SDK**: For checkout experience

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

### Mobile Features
- Hamburger navigation menu
- Touch-friendly buttons and interactions
- Optimized product grid layout
- Full-width cart overlay

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📈 Performance Features

- **Optimized CSS**: Efficient selectors and minimal redundancy
- **Lazy Loading Ready**: Structure prepared for image lazy loading
- **Minimal JavaScript**: Lightweight, efficient code
- **Fast Loading**: Optimized assets and structure

## 🎯 Future Enhancements

### Planned Features
- **Real AI-Generated Images**: Integration with AI image generation services
- **User Accounts**: Customer registration and login
- **Order History**: Track past orders and delivery status
- **Reviews & Ratings**: Customer feedback system
- **Inventory Management**: Real-time stock updates
- **Email Marketing**: Newsletter and promotional emails
- **SEO Optimization**: Meta tags, structured data, and analytics

### Technical Improvements
- **Progressive Web App**: PWA features for mobile experience
- **Performance Monitoring**: Analytics and performance tracking
- **Accessibility**: Enhanced WCAG compliance
- **Security**: HTTPS and security headers

## 🤝 Contributing

This is a marketing agency project for a Farm to Table company. For modifications:

1. **Backup**: Always backup before making changes
2. **Test**: Test on multiple devices and browsers
3. **Document**: Update documentation for any changes
4. **Optimize**: Ensure performance and accessibility

## 📞 Support

For technical support or questions about the website:
- **Email**: info@greenpasturesfarm.com
- **Phone**: (555) 123-4567

## 📄 License

This project is created for Green Pastures Farm. All rights reserved.

---

**Built with ❤️ for sustainable, ethical farming**
