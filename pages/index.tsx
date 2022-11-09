import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CCSReset";
import Menu from "../src/components/Menu";

function HomePage() {
  const style = {
    //   backgroundColor: "red"
  };
  return (
    <>
      <CSSReset />
      <div style={style}>
        <Menu />
        <Header />
        <Timeline playlist={config.playlists} />
      </div>
    </>
  );
}

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
    gap: 1rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" alt="" /> */}
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} alt="" />
        <div>
          <h2>{config.name}</h2>
          <p>{config.description}</p>
        </div>
      </section>
    </StyledHeader>
  );
}


type Video = {
  title: string;
  url: string;
  thumb: string;
};

type TimelineProps = {
  playlist: { jogos: Video[]; frontEnd: Video[]; backEnd: Video[] };
};

function Timeline({ playlist }: TimelineProps) {
  const playlistKeys = Object.keys(playlist);
  return (
    <div>
      {playlistKeys.map((playListName) => {
        const videos = playlist[playListName];
        return (
          <section>
            <h2>{playListName}</h2>
            <div>
              {videos.map((video: Video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} alt={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default HomePage;
