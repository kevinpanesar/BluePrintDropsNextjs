import React from "react";
import styled from "styled-components";
import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
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
      <TwitterShareButton url={url}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <RedditShareButton url={url}>
        <RedditIcon size={32} round={true} />
      </RedditShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 60px;
  margin: 10px auto;
  width: 40%;
`
