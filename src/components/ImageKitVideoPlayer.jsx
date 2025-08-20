import { buildSrc, ImageKitProvider, Video } from "@imagekit/react";

export default function ImageKitVideoPlayer() {
    return (
        <ImageKitProvider>
            <div style={{ margin: "20px 0" }}>
                <h2>ImageKit Video Player</h2>
                <Video
                    urlEndpoint="https://ik.imagekit.io/roadsidecoder"
                    src="/yt/example.mp4"
                    controls
                    width={800}
                    transformation={[{ quality: 100 }, { format: "auto" }]}
                    poster={buildSrc({
                        urlEndpoint: "https://ik.imagekit.io/roadsidecoder",
                        src: `/yt/example.mp4/ik-thumbnail.jpg?tr=w-1200,h-680,so-5`, // Append ik-thumbnail.jpg after the video URL
                    })}
                />
            </div>
        </ImageKitProvider>
    )
}