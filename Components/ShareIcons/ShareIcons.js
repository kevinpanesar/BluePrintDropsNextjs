import React from "react";
import styled from "styled-components";
import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

export const ShareIcons = () => {
  let url;
  if (process.browser) {
    // Client-side-only code
    url = window.location.href;
  }
  return (
    <Container>
      <FacebookShareButton url={url}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TwitterShareButton size={32} round={true} />
      <RedditShareButton size={32} round={true} />
      <WhatsappShareButton size={32} round={true} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 60px;
  margin: 20px 10px;
`;
