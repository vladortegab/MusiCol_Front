import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="song-container">
      <img
        className={isPlaying ? "rotateSong" : ""}
        src={currentSong.urlImagen}
        alt=""
      />
      <h2>{currentSong.nombre}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
