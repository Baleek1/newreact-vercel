import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../Data';
import moment from 'moment';
import './React.css'
const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    
    try {
      const response = await fetch(video_url);
      const result = await response.json();
      
      
      if (result.items) {
        setData(result.items);
      } else {
        console.error("No items found in the API response");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="Feed">
      {data.length === 0 ? (
        <p>No videos found</p>
      ) : (
        data.map((item) => {
          const { id, snippet, statistics } = item;
          return (
            <Link to={`video/${snippet.categoryId}/${id}`} key={id} className="card">
              <img src={snippet?.thumbnails?.medium?.url || '/fallback_image.png'} alt={snippet.title} />
              <h2>{snippet.title}</h2>
              <h3>{snippet.channelTitle}</h3>
              <p>{value_converter(statistics.viewCount)} views &bull; {moment(snippet.publishedAt).fromNow()}</p>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Feed;
