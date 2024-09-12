import React, { useEffect, useState } from 'react'
import './React.css'
import like from '../component/assets/like.png';
import dislike from '../component/assets/dislike.png';
import share from '../component/assets/share.png';
import save from '../component/assets/save.png';
import { API_KEY, value_converter } from '../Data';
import moment from 'moment';

const Playvideo = () => {
  const videoId = 'dQw4w9WgXcQ'; 
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideosData = async () => {
    try {
      const videodetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
      const response = await fetch(videodetails_url);
      const data = await response.json();
      setApiData(data.items[0]);
    } catch (error) {
      console.error('Error fetching video data:', error);
    }
  };

  const fetchChannelData = async (channelId) => {
    try {
      const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${channelId}&key=${API_KEY}`;
      const response = await fetch(channelData_url);
      const data = await response.json();
      setChannelData(data.items[0]);
    } catch (error) {
      console.error('Error fetching channel data:', error);
    }
  };

  const fetchCommentsData = async () => {
    try {
      const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
      const response = await fetch(comment_url);
      const data = await response.json();
      setCommentData(data.items);
    } catch (error) {
      console.error('Error fetching comments data:', error);
    }
  };

  useEffect(() => {
    fetchVideosData();
  }, [videoId]);

  useEffect(() => {
    if (apiData) {
      fetchChannelData(apiData.snippet.channelId);
      fetchCommentsData();
    }
  }, [apiData]);

  return (
    <div className="Play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        title="YouTube Video Player"
      ></iframe>

      <h3>{apiData ? apiData.snippet.title : 'Title here'}</h3>
      <div className="play-info">
        <p>
          {apiData
            ? `${apiData.statistics.viewCount} views • ${moment(apiData.snippet.publishedAt).fromNow()}`
            : '88k views • just now'}
        </p>
        <div>
          <span>
            <img src={like} alt="Like" /> {apiData ? apiData.statistics.likeCount : '3674'}
          </span>
          <span>
            <img src={dislike} alt="Dislike" /> {apiData ? apiData.statistics.dislikeCount : '3'}
          </span>
          <span>
            <img src={share} alt="Share" /> Share
          </span>
          <span>
            <img src={save} alt="Save" /> Save
          </span>
        </div>
      </div>
      <hr />

      <div className="publish">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ''}
          alt="Publisher"
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : 'Channel Name'}</p>
          <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : '1M'}</span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="vid-desc">
        <p>{apiData ? apiData.snippet.description.slice(0, 250) : 'Making learning easy.'}</p>
        <p>Subscribe to this channel for more awesome content!</p>

        <h4>{apiData ? value_converter(apiData.statistics.commentCount) : '190 Comments'}</h4>
        {commentData.map((item, index) => (
          <div key={index} className="comment">
            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="User" />
            <div>
              <h3>
                {item.snippet.topLevelComment.snippet.authorDisplayName}{' '}
                <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>
              </h3>
              <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
              <div className="commenter">
                <img src={like} alt="Like" />
                <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                <img src={dislike} alt="Dislike" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playvideo