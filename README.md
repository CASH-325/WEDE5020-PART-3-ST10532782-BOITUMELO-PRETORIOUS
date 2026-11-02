# BMW Pretoria - WEDE5020 Part 3

**Student:** Boitumelo Pretorious - ST10532782  
**Module:** WEDE5020 - Web Development  
**Part:** 3 - Enhancing Functionality and SEO

## Overview
5-page responsive BMW dealer website with JavaScript enhancements and SEO optimisation.

**Pages:** index.html, about.html, products.html, enquiry.html, contact.html

## Live Demo
- **GitHub:** https://github.com/CASH-325/WEDE5020-Part-3-ST10532782
- **Netlify:** https://bmw-pretoria-part3.netlify.app (replace with your link after deploy)

## Part 2 - CSS (Completed)
- External css/style.css linked on all 5 pages
- Flex header, Grid for models, hover/focus, box-shadow, border-radius
- Breakpoints 1024px, 768px, 480px - rem/% - srcset sizes picture tag
- Chrome DevTools tested for responsiveness

## Part 3 - JavaScript & SEO (New)

### 2.1 Interactive Elements
- **Accordion:** About page - 4 sections (History, Mission, Team, Why Us)
- **Tabs:** Products page - All/Sedan/SUV filter
- **Modal:** Home + Products - Special offer popup
- **Leaflet Map:** Contact page - Interactive map with marker at 123 Church St Pretoria (-25.7479, 28.2293)
- **Animations:** fadeIn on cards, hover effects
- **DOM Manipulation:** Dynamic year, hamburger menu toggle
- **Lightbox:** Click product image to enlarge

### 2.2 Dynamic Content
- **Dynamic Product Loading:** JS array loads 3 BMW models into grid
- **Search Filter:** Real-time filter - type "X5" or "sedan" to filter models
- Uses srcset, sizes for responsive images

### 3. SEO
- **On-Page:** Title tags with keywords (BMW Pretoria), meta description, meta keywords, author, H1/H2/H3 hierarchy
- **Technical:** robots.txt, sitemap.xml, semantic HTML5 (header/nav/main/footer)
- **Images:** alt text descriptive (e.g. "BMW Pretoria showroom exterior"), srcset + sizes, picture tag
- **Links:** Internal linking (Home>Models>Enquiry>Contact), external backlinks (Facebook/Instagram)
- **Mobile:** Viewport meta, responsive hamburger menu

### 4. Forms & Validation
- **Enquiry Form:** Name (min 2 chars), Email (contains @ .), Phone (10 digits), Message (min 10 chars) - JS validation with red error messages
- **Contact Form:** Same validation + mailto action
- **AJAX Simulation:** setTimeout 1s + success alert + form reset + email intent
- Cost estimate shown in alert (24h response)

## Project Structure
