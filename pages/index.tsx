import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CCSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const style = {
    //   backgroundColor: "red"
  };

  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu />
        <Header />
        <Timeline playlist={config.playlists} />
      </div>
    </>
  );
}

const StyledHeader = styled.div`
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
    gap: 1rem;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img
        src="https://i0.wp.com/www.tinamaze.com/wp-content/uploads/2021/03/page-3-free-and-customizable-youtube-channel-art.jpg?w=768&ssl=1"
        alt="banner"
      />
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
    <StyledTimeline>
      {playlistKeys.map((playListName) => {
        const videos = playlist[playListName];
        return (
          <section key={videos}>
            <h2>{playListName}</h2>
            <div>
              {videos.map((video: Video) => {
                return (
                  <a href={video.url} key={video.title}>
                    <img src={video.thumb} alt={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

export default HomePage;
