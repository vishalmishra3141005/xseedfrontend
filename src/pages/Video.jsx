
import { useSearchParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";

export default function Video() {

    const queryParam = useSearchParams(window.location.href);
    const video = queryParam[0].get("v");
    const title = queryParam[0].get("q");

    console.log(title);
    console.log(video);
    
    return (
        <div className="video-container">
            <div className="title-container">{title}</div>
            <VideoPlayer video={video}/>
        </div>
    );
}