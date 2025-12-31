# Project Context: SmartHubUtility

## Project Overview
**SmartHubUtility** is a static corporate website for a **professional collective** specializing in utility consulting. The collective offers free, ongoing advice for energy (Luce e Gas), connectivity (internet, telephony), Sky TV, and photovoltaic systems, focusing on continuous market optimization by switching providers to ensure the best rates for clients.

The project is a **Single Page Application (SPA)** built with HTML5, CSS3, and Vanilla JavaScript, optimized for **GitHub Pages**.

### Key Features
*   **Professional Collective:** Managed by Michael Francazzi, Samuele Ghini, and Ruben Sciola, all serving as "Consulente & Sales Manager".
*   **Dynamic Branding:** Responsive text-based logo ("SmartHubUtility" on desktop, "Shu." on mobile).
*   **Floating CTA:** A persistent "Richiedi Consulenza" button that appears on scroll, providing instant access to the contact form.
*   **Modern UI:** "Corporate Tech" aesthetic with the **Ubuntu** font, Navy/Electric Blue palette, and custom SVG wave dividers.
*   **Legal Compliance:** Includes dedicated pages for Privacy Policy, Cookie Policy, and Note Legali (Legal Notes), along with a functional cookie consent banner.
*   **Functional Forms:** Contact and Career forms integrated with **Web3Forms** for real email delivery.
*   **Localized Assets:** High-resolution, commercially licensed images stored locally in the `images/` directory.

## Architecture & File Structure

*   **`index.html`**: Main entry point.
*   **`404.html`**: Custom 404 error page.
*   **`privacy-policy.html`**, **`cookie-policy.html`**, **`note-legali.html`**: Legal compliance pages.
*   **`css/style.css`**: Global styles, including responsive media queries and animations.
*   **`js/script.js`**: UI logic, Web3Forms integration, floating CTA behavior, and cookie management.
*   **`images/`**: Locally stored assets (logo, service card images).
*   **`CNAME`**: Custom domain configuration (`smarthubutility.it`).

## Technical Details

### Form Integration
Forms use **Web3Forms API**. The Career form has been simplified to remove file uploads to comply with the service's free tier, encouraging users to send CVs via email to `michael.francazzi@gmail.com`.

### Legal & Privacy
*   **GDPR Compliant:** Privacy checkbox on all forms.
*   **Cookie Management:** Consent banner using `localStorage` to persist user choice.

## Deployment

*   **Hosting:** GitHub Pages.
*   **Domain:** `https://smarthubutility.it`.
*   **Deployment:** Automatic via GitHub Actions on push to `main`.

## Development Conventions
*   **CSS:** Variable-based theming (`:root`).
*   **JS:** Vanilla JavaScript (no frameworks).
*   **Paths:** Always use **relative paths** (`./`).
