import "./App.css";
import { useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

function App() {
  const [video, setVideo] = useState("inception");
  const [videoURL, setVideoURL] = useState("https://youtu.be/ee9i6oMqShk?si=ompLbcJlbwd5D1m3");

  function handleSearch() {
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }
  return (
    <div className="App">
      <h1 style={{ color: "green" }}>MovieTrailerFinder</h1>

      <div className="search-box">
        <label>Search for any movies/shows: </label>
        <input
          type="text"
          onChange={(e) => {
            setVideo(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </button>
      </div>
      <ReactPlayer url={videoURL} controls={true} />
    </div>
  );
}

export default App;
