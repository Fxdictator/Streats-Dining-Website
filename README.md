# Streats Dining Website

A modern, multi-language restaurant website built with Eleventy (11ty). This project features:

- Multi-language support (English, Chinese, Burmese)
- Responsive design for desktop and mobile
- Gallery, menu, events, and contact pages
- Organized asset structure for images and PDFs

## Features
- Built with [Eleventy (11ty)](https://www.11ty.dev/)
- Nunjucks templating
- Easy to update content via JSON data files
- Clean, maintainable codebase

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Fxdictator/Streats-Dining-Website.git
   cd Streats-Dining-Website
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Project Locally
To start a local development server with hot reload:
```sh
npx eleventy --serve
```
Or, if you have Eleventy installed globally:
```sh
npx @11ty/eleventy --serve
```

The site will be available at `http://localhost:8080` by default.

### Building for Production
To generate the static site for deployment:
```sh
npx eleventy
```
The output will be in the `_site/` directory by default.

## Project Structure
```
public/           # Static assets (images, PDFs, etc.)
src/              # Source files (Nunjucks templates, data, assets)
  _data/          # JSON data files for content
  _includes/      # Layouts and partials
  en/, mm/, zh/   # Language-specific pages
  assets/         # CSS, JS, and images
```

## Customization
- Update content in `src/_data/` JSON files.
- Add or replace images in `public/assets/Images/`.
- Edit templates in `src/en/`, `src/mm/`, `src/zh/` for each language.

## License
This project is licensed under the MIT License.

---

For questions or contributions, please open an issue or submit a pull request on GitHub.
