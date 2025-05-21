# Tarsonix - AI Automation Consultancy

## Overview

Tarsonix is an AI consultancy focused on intelligent automation, AI agents, workflow orchestration, and conversational AI. We create custom solutions to accelerate business growth through AI-powered tools and processes.

## Features

- **Futuristic Design**: Dark mode interface with electric blue and violet neon accents
- **Interactive UI**: Animated sections with parallax effects and micro-interactions
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices
- **Optimized Performance**: Efficient animations and transitions

## Technologies Used

- **React**: JavaScript library for building the user interface
- **TypeScript**: Static type checking for more reliable code
- **Vite**: Next-generation front-end tooling for faster development
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Shadcn UI**: High-quality UI components built on Radix UI
- **Lucide Icons**: Beautiful, consistent icon set

## Pages & Sections

The landing page includes the following sections:

1. **Hero Section**: Introducing Tarsonix with a particle animation background
3. **Services**: AI solutions tailored for businesses
4. **Process**: Three-step approach from discovery to deployment
5. **Why Choose Us**: Key differentiators of Tarsonix
7. **Final CTA**: Call-to-action for scheduling consultations
8. **Footer**: Company information and social links

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/tarsonix.git

# Navigate to project directory
cd tarsonix

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:8080`.

## Project Structure

```
tarsonix/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/           # Shadcn UI components
│   │   ├── Hero.tsx      # Hero section with particle animation
│   │   ├── Services.tsx  # Services offered section
│   │   └── ...           # Other components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Entry point
├── index.html
└── package.json
```

## Configuration

### Google Analytics

Google Analytics is configured directly in the code rather than through environment variables:

- The GA Measurement ID is set in `src/lib/constants.ts`
- To change the ID, simply update the `GA_MEASUREMENT_ID` constant in this file
- No environment variables are required for Analytics to function

## Customization

- **Colors**: Modify the Tailwind configuration in `tailwind.config.ts`
- **Content**: Update text content in respective component files
- **Images**: Replace placeholder images in components

## Deployment

This project can be deployed on various platforms including:

- Vercel
- Netlify
- GitHub Pages
- Any static site hosting service

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern AI product websites
- Icons provided by Lucide React
- UI components by Shadcn

