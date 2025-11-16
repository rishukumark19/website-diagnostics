# LabPro Diagnostics - Modern Diagnostics Lab Website

This is a modern, single-page, production-ready website for a fictional diagnostics lab called "LabPro Diagnostics". It is built with a modern frontend stack and designed to be visually appealing, highly functional, and easy to maintain.

## Live Demo

A live demo of this project can be viewed here: [Link to Deployed App]

## Features

- **Modern & Professional UI/UX**: Clean, trustworthy, and accessible design suitable for a healthcare provider.
- **Fully Responsive**: Flawless experience across mobile, tablet, and desktop devices.
- **Interactive Sections**:
  - **Services/Tests**: Search and filter diagnostic tests by category.
  - **Health Packages**: View detailed health packages with expandable test lists.
  - **Centers/Locations**: Find diagnostic centers with city filters and search.
- **Rich Animations**: Smooth, subtle animations powered by Framer Motion for section transitions, card interactions, and more.
- **Contact Form**: A functional contact form with client-side validation and submission states.
- **Centralized Content Management**: All text, images, and data are managed in a single `data.ts` file, making updates incredibly simple without touching the code.
- **Accessibility (A11y)**: Built with accessibility in mind, including ARIA labels, focus states, and keyboard navigation.
- **SEO Friendly**: Semantic HTML and a single-page structure that's easy for search engines to crawl.

## Technology Stack

- **Framework**: [React](https://reactjs.org/) (with TypeScript)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: Inline SVG

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (v16 or later) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/labpro-diagnostics.git
    cd labpro-diagnostics
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

To start the local development server, run the following command:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`. The server supports Hot Module Replacement (HMR), so changes you make to the code will be reflected in the browser instantly.

### Building for Production

To create a production-ready build of the application, run:

```bash
npm run build
```

This command bundles the application into the `dist/` directory, optimized for performance. You can test the production build locally by running:

```bash
npm run preview
```

## Deployment

This project is optimized for static hosting platforms like Vercel or Netlify.

### Deploying to Vercel

1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Sign up or log in to [Vercel](https://vercel.com/).
3.  Click "Add New..." -> "Project" and import your Git repository.
4.  Vercel will automatically detect that it's a Vite project. Use the following build settings:
    - **Build Command**: `npm run build`
    - **Output Directory**: `dist`
    - **Install Command**: `npm install`
5.  Click "Deploy". Your site will be live in minutes.

### Deploying to Netlify

1.  Push your code to a Git repository.
2.  Sign up or log in to [Netlify](https://www.netlify.com/).
3.  Click "Add new site" -> "Import an existing project" and connect your Git provider.
4.  Select your repository.
5.  Netlify will detect the Vite settings. Configure the build settings as follows:
    - **Build command**: `npm run build`
    - **Publish directory**: `dist`
6.  Click "Deploy site".

## How to Update Content

One of the key features of this project is the ease of content management. **You do not need to be a developer to update the website's content.**

All content—including navigation links, services, health packages, center locations, testimonials, and contact information—is located in one file:

`src/constants/data.ts`

Simply open this file and edit the text or replace image URLs. The website will update automatically when you redeploy the changes.

## Project Structure

```
/
├── public/
│   └── (static assets like favicons)
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Courses.tsx (Services & Packages)
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── Navbar.tsx
│   ├── constants/
│   │   └── data.ts       # <-- EDIT ALL CONTENT HERE
│   ├── App.tsx           # Main app component
│   ├── index.css         # Global styles
│   ├── index.tsx         # Entry point
│   └── types.ts          # TypeScript type definitions
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Customization

### Colors and Fonts

Primary brand colors and fonts are configured in `tailwind.config.js`. You can easily change the primary color or font family to match your brand identity.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Change font here
      },
      colors: {
        primary: {
          DEFAULT: '#0066CC', // Change primary color here
          dark: '#0052a3',
        }
      }
    },
  },
}
```

## Troubleshooting

-   **Build Fails**: Ensure all dependencies are installed correctly by running `npm install`. Check for any TypeScript errors in the console during the `npm run build` process.
-   **Images Not Loading**: Make sure the image URLs in `src/constants/data.ts` are correct and publicly accessible.
