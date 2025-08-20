# 🎬 React Video Player with Video.js & ImageKit

This project demonstrates how to integrate **Video.js** (with quality selection, playback speed, captions, and chapters) and **ImageKit’s Video Component** inside a React app.  
It provides two different approaches for handling video playback in modern web applications.

---

## 🚀 Tech Stack

- **ReactJS** – UI framework
- **Vite** – Build tool for fast development
- **JavaScript (ES6+)** – Core language
- **Video.js** – Customizable HTML5 video player
- **ImageKit React SDK** – For optimized video streaming & transformations

---

## 📂 Project Structure

src/  
│  
├── components  
│ ├── VideoJS.jsx # Reusable Video.js wrapper component  
│ ├── VideoJsPlayer.jsx # Player implementation with quality selector, captions & chapters  
│ ├── ImageKitVideoPlayer.jsx # ImageKit video component with optimization  
│  
├── App.jsx # Entry point combining both players  
└── main.jsx # Vite entry point

---

## 🎥 Features

### **Video.js Player**

- Custom wrapper component (`VideoJS`) to integrate with React
- Quality selection (via `videojs-http-source-selector`)
- Playback speed options (0.25x → 2x)
- Captions / Subtitles support (`.vtt` files for English & Hindi)
- Chapter navigation support
- Poster image before video plays
- Event handling (`waiting`, `dispose`, etc.)

### **ImageKit Player**

- Direct integration using `@imagekit/react`
- Optimized video delivery from ImageKit CDN
- Automatic quality & format transformations
- Poster image with custom thumbnail
- Simple configuration with `urlEndpoint` & transformations

---

## 📦 Installation & Setup

1. Clone the repository:

```bash
   git clone https://github.com/arbaaz1999/react-video-player.git
   cd react-video-player
```

2. Install dependencies:

```bash
    npm install
```

3. Run the development server:

```bash
    npm run dev
```

4. Open in browser:

```bash
    http://localhost:5173/
```

## 🎯 Key Learning Outcomes

- How to build a reusable **React wrapper** around Video.js
- Integrating **captions, chapters, quality selector, and playback rates** in Video.js
- Leveraging **ImageKit React SDK** for optimized video streaming
- Comparing traditional player integration with CDN-optimized solutions
