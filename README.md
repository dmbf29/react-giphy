# React Giphy Search

A dynamic React application that allows users to search and browse GIFs using the Giphy API. Features a clean, responsive interface with real-time search functionality and an interactive grid layout.

## 🌟 Features

- **Real-time Search**: Instant GIF search as you type
- **Responsive Grid Layout**: Clean 4-column grid that adapts to different screen sizes
- **Interactive Selection**: Click any GIF to view it in a larger preview pane
- **Optimized Performance**: Efficient rendering with React components
- **Modern UI**: Sleek design with smooth animations and hover effects

## 🚀 Live Demo

[View Live Application](https://dmbf29.github.io/react-giphy/) *(GitHub Pages)*

## 🛠️ Technologies Used

- **React 16.2** - Component-based UI library
- **JavaScript (ES6+)** - Modern JavaScript features
- **Sass/SCSS** - Enhanced CSS with variables and nesting
- **Webpack 4** - Module bundling and build process
- **Babel** - JavaScript transpilation for browser compatibility
- **Giphy API** - GIF data and search functionality
- **GitHub Pages** - Deployment and hosting

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/dmbf29/react-giphy.git
   cd react-giphy
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   yarn start
   ```
   The application will open at `http://localhost:8080`

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `yarn start` | Start the development server with hot reloading |
| `yarn lint` | Run ESLint to check code quality |
| `yarn deploy` | Build and deploy to GitHub Pages |

## 🏗️ Project Structure

```
src/
├── components/
│   ├── app.jsx          # Main application component
│   ├── gif.jsx          # Individual GIF component
│   └── gifList.jsx      # GIF grid container
├── index.jsx            # Application entry point
assets/
└── stylesheets/
    └── application.scss # Main stylesheet
```

## 🎯 Key Features Implemented

- **Component Architecture**: Modular React components for maintainable code
- **State Management**: Efficient prop passing and event handling
- **API Integration**: Seamless integration with Giphy's REST API
- **Responsive Design**: Flexible layouts that work on all devices
- **Performance Optimization**: Optimized rendering and image loading

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using:
```bash
yarn deploy
```

The build process uses Webpack to bundle all assets and deploy to the `gh-pages` branch.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---
