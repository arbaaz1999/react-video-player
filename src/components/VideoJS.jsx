import videojs from "video.js";
import "videojs-contrib-quality-levels";
import "videojs-http-source-selector";
import "video.js/dist/video-js.css";
import { useEffect, useRef } from "react";


export default function VideoJS({ options, onReady }) {
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        // make sure video.js player only initialized once
        if (!playerRef.current) {
            // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. 
            const videoElement = document.createElement("video-js");

            videoElement.classList.add('vjs-big-play-centered');
            videoRef.current.appendChild(videoElement);

            const player = (playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
                onReady && onReady(player);
            }));

            player.ready(() => {
                if (typeof player.httpSourceSelector === 'function') {
                    player.httpSourceSelector({
                        default: 'auto' // let the player choose the best quality automatically
                    })
                }
            })

            playerRef.current = player;

            // You could update an existing player in the `else` block here
            // on prop change, for example:
        } else {
            const player = playerRef.current;

            player.autoplay(options.autoplay);
            player.src(options.sources)
        }
    }, [options, videoRef])

    // Dispose the Video.js player when the functional component unmounts
    useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);


    return (
        <div data-vjs-player>
            <div ref={videoRef} />
        </div>
    );
}