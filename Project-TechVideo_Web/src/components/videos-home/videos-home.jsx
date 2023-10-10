import { useState, useEffect } from "react";
import axios from "axios";

export function VideosHome(){
    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        axios({
            method:'get',
            url:'http://127.0.0.1:5000/videos'
        })
        .then(response=>{
            setVideos(response.data);
        })
    },[]);

    return(
        <div>
            <h2>Videos Home</h2>
            <div>
                {
                    videos.map(video=>
                        <div key={video} className="card m-2 p-2" style={{width:'400px'}}>
                            <div className="card-header">
                                <h3>{video.Title}</h3>
                            </div>
                            <div className="card-body">
                                <iframe src={video.Url} width="300" height="200">

                                </iframe>
                            </div>  
                        </div>
                        )
                }
            </div>
        </div>
    )
}