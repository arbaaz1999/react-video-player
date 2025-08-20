import ImageKitVideoPlayer from "./components/ImageKitVideoPlayer";
import VideoJsPlayer from "./components/VideoJsPlayer";

export default function App() {
  return (
    <div className="App">
      <VideoJsPlayer />
      <ImageKitVideoPlayer />
    </div>
  );
}