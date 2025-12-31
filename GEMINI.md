# Project Context: SmartHubUtility

## Project Overview
**SmartHubUtility** is a static corporate website designed for an utility consulting firm specializing in energy (light, gas), connectivity (internet, telephony), Sky TV, and photovoltaic systems.

The project is built as a **Single Page Application (SPA)** using native technologies (HTML5, CSS3, JavaScript) to ensure high performance and broad compatibility. It is optimized for hosting on **GitHub Pages**.

### Key Features
*   **One-Page Layout:** Smooth scrolling navigation between sections (Home, About Us, Services, Careers, Contact).
*   **Responsive Design:** Fully adaptable layout for mobile, tablet, and desktop.
*   **Modern UI:** "Corporate Tech" aesthetic with Deep Navy/Electric Blue color palette, gradients, and scroll animations (`IntersectionObserver`).
*   **Interactive Forms:** Contact and Recruiting forms with client-side validation.

## Architecture & File Structure

The project follows a standard static site structure:

*   **`index.html`**: The main entry point containing all content sections.
*   **`404.html`**: Custom error page styled to match the main site.
*   **`css/style.css`**: Contains all styling, CSS variables, and animation definitions.
*   **`js/script.js`**: Handles UI logic (mobile menu, scroll spy, form validation).
*   **`images/`**: Stores assets like the logo.
*   **`.nojekyll`**: A marker file to instruct GitHub Pages to bypass Jekyll processing (crucial for loading resources correctly).

## Building and Running

Since this is a static site, no compilation step is strictly necessary. However, a local development server is configured for testing.

### Prerequisites
*   Node.js and npm (optional, for running the local server).

### Commands
*   **Start Local Server:**
    ```bash
    npm start
    ```
    This command runs `npx http-server . -o -c-1` to serve the site locally and open it in the default browser.

## Development Conventions

### Coding Style
*   **Paths:** Always use **relative paths** (e.g., `./css/style.css`, `./images/logo.png`) to ensure compatibility with GitHub Pages' subdirectory hosting.
*   **CSS:** Uses CSS Variables (`:root`) for colors and easy theming. BEM-like naming is loosely followed.
*   **JavaScript:** Vanilla JS. Uses `DOMContentLoaded` to ensure the DOM is ready.

### Deployment (GitHub Pages)
1.  Ensure `.nojekyll` exists in the root.
2.  Push changes to the `main` branch.
3.  Configure GitHub Pages in repository settings to serve from the root directory.

### Key Sections
*   **Hero:** Immersive introduction with a call to action.
*   **Chi Siamo (About):** Team introduction.
*   **Servizi (Services):** Card-based grid displaying offered services.
*   **Lavora con noi (Careers):** Two-column layout with job details and a specific application form.
*   **Contatti (Contact):** General inquiry form.
