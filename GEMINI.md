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
*   **`CNAME`**: Configures the custom domain `shu.michaelfrancazzi.com`.
*   **.nojekyll**: A marker file to instruct GitHub Pages to bypass Jekyll processing.

## Building and Running

### Prerequisites
*   Node.js and npm (optional, for running the local server).

### Commands
*   **Start Local Server:**
    ```bash
    npm start
    ```
    This command runs `npx http-server . -o -c-1` to serve the site locally and open it in the default browser.

## Deployment & Repository Details

*   **Repository:** `https://github.com/MikeFrank99/SmartHubUtility`
*   **Custom Domain:** `https://shu.michaelfrancazzi.com`
*   **GitHub Pages URL:** `https://mikefrank99.github.io/SmartHubUtility/`

### Deployment Conventions
1.  **CNAME File:** Do not delete the `CNAME` file, as it maintains the link to the custom domain.
2.  **Relative Paths:** Always use `./` in HTML/CSS for resource linking to ensure they resolve correctly under both the custom domain and the GitHub subdirectory.
3.  **Pushing Changes:** Use `git push origin main`. GitHub Actions will automatically handle the build and deployment.

## Development Conventions

### Coding Style
*   **CSS:** Uses CSS Variables (`:root`) for colors and easy theming.
*   **JavaScript:** Vanilla JS. Uses `IntersectionObserver` for scroll animations.
*   **Paths:** Always use **relative paths** for maximum compatibility.