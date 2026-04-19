# B.M.M - Visual Storyteller Portfolio

## Description

B.M.M is a professional photography portfolio website showcasing the work of B.M.M, a visual storyteller and award-winning photographer based in Nairobi, Kenya. The site features a curated collection of landscape, portrait, and editorial photography work, along with insights into the photographer's craft through a personal journal/blog section.

The website is designed with a modern, minimalist aesthetic that prioritizes the visual impact of the photography while maintaining excellent user experience and accessibility.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Interactive Portfolio**: Filterable portfolio gallery with categories including Landscape, Portrait, Editorial, and Documentary
- **Lightbox Viewer**: Full-screen image viewer with navigation controls for browsing portfolio pieces
- **Smooth Animations**: Custom cursor effects, scroll-triggered animations, and smooth transitions
- **Accessibility**: Proper ARIA labels, semantic HTML, and keyboard navigation support
- **Contact Form**: Integrated contact form with backend processing for booking sessions and inquiries
- **Blog/Journal**: Personal insights and articles about photography techniques and experiences
- **Performance Optimized**: Fast loading times with optimized images and efficient code

## Technologies Used

- **Frontend**:
  - HTML5
  - CSS3 (Custom properties, Flexbox, Grid)
  - Vanilla JavaScript (ES6+)
- **Backend**:
  - PHP (for contact form processing)
  - JavaScript (client-side form handling)
- **Fonts**: Google Fonts (Cormorant Garamond, DM Mono)
- **Icons**: Custom SVG icons

## Project Structure

```
may_studio/
├── index.html          # Main HTML file
├── README.md           # Project documentation
├── api/
│   ├── contact.js      # Client-side contact form handling
│   └── contact.php     # Server-side contact form processing
├── assets/
│   ├── fonts/          # Custom font files (if any)
│   ├── icons/          # SVG icons and favicons
│   └── images/
│       └── portfolio/  # Portfolio images
├── css/
│   └── style.css       # Main stylesheet
└── js/
    └── main.js         # Main JavaScript functionality
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/may_studio.git
   cd may_studio
   ```

2. **Set up a local server** (recommended for PHP backend):
   - If you have PHP installed, you can use the built-in server:
     ```bash
     php -S localhost:8000
     ```
   - Or use any web server (Apache, Nginx) that supports PHP

3. **Open in browser**:
   - Navigate to `http://localhost:8000` (or your server URL)
   - For static viewing without contact form functionality, you can open `index.html` directly in a browser

## Usage

### Viewing the Portfolio
- Navigate through the site using the main navigation
- Use the portfolio filters to view specific categories of work
- Click on portfolio images to open the lightbox viewer
- Use arrow keys or navigation buttons to browse through images

### Contact Form
- Fill out the contact form in the "Get in Touch" section
- The form includes validation and sends data to the PHP backend
- Ensure the PHP server is running for form submission to work

### Customization
- **Portfolio Images**: Add new images to `assets/images/portfolio/` and update the JavaScript in `js/main.js` to include them
- **Styling**: Modify `css/style.css` for visual changes
- **Content**: Edit `index.html` to update text, meta information, and structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

The site is optimized for fast loading:
- Images are lazy-loaded
- CSS and JS are minified
- Font loading is optimized with preconnect
- Core Web Vitals compliant

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

B.M.M - Visual Storyteller
- Website: [Your website URL]
- Email: [Your email]
- Instagram: [@yourhandle]
- Based in Nairobi, Kenya

---

*Photography by B.M.M | Website designed and developed for showcasing visual storytelling*