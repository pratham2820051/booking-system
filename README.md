# RedBus Clone - Frontend Only

A modern, responsive RedBus clone built with React, Vite, and Tailwind CSS.

## Features

- 🚌 Bus search and booking interface
- 🎨 Modern, responsive UI with animations
- 🔍 Advanced filtering and sorting options
- 📱 Mobile-first design
- ⚡ Fast development with Vite
- 🎯 Component-based architecture

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI components
- **Animations**: Framer Motion
- **Routing**: Wouter
- **Forms**: React Hook Form with Zod validation
- **Icons**: React Icons

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm start
   ```

## Project Structure

```
client/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Base UI components (buttons, inputs, etc.)
│   │   ├── layout/         # Header, footer, navigation
│   │   └── ...             # Feature-specific components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── index.css           # Global styles
├── index.html              # HTML entry point
└── package.json            # Frontend dependencies
```

## Features

- **Home Page**: Bus search form with source, destination, date, and passenger selection
- **Search Results**: Display bus options with filtering and sorting
- **Bus Cards**: Detailed bus information with amenities and pricing
- **Responsive Design**: Works seamlessly on all device sizes
- **Modern UI**: Clean, intuitive interface with smooth animations

## Development

This is a frontend-only project with mock data for demonstration purposes. All backend functionality has been removed to focus on the UI/UX experience.

## License

MIT License
