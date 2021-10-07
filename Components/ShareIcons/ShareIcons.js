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

export const ShareIcons = ({ mobile, desktop }) => {
  let url;
  let jsx;

  if (process.browser) {
    // Client-side-only code
    url = window.location.href;
  }

  if (desktop) {
    jsx = (
      <Container desktop={desktop}>
        <ShareTitle>Share This Post </ShareTitle>
        <IconsTextCont>
          <IconTextContainer>
            <FacebookShareButton url={url}>
              <FacebookIcon size={32} />
            </FacebookShareButton>
            <ShareText>Share</ShareText>
          </IconTextContainer>
          <IconTextContainer>
            <TwitterShareButton url={url}>
              <TwitterIcon size={32} />
            </TwitterShareButton>
            <ShareText>Tweet</ShareText>
          </IconTextContainer>
          <IconTextContainer>
            <RedditShareButton url={url}>
              <RedditIcon size={32} />
            </RedditShareButton>
            <ShareText>Post</ShareText>
          </IconTextContainer>
          <IconTextContainer>
            <WhatsappShareButton url={url}>
              <WhatsappIcon size={32} />
            </WhatsappShareButton>
            <ShareText>Share</ShareText>
          </IconTextContainer>
        </IconsTextCont>
      </Container>
    );
  } else if (mobile) {
    jsx = (
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
  }

  return jsx;
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: ${(props) => (props.desktop ? "20px auto" : "0 auto")};
  width: 40%;

  @media (max-width: 375px) {
    width: 55%;
  }

  @media (min-width: 768px) {
    width: 90%;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
    margin-bottom: 30px;
  }

    @media (min-width: 768px) and (max-width: 1024px){
    margin: 25px auto;
    }
`;

const ShareText = styled.p`
  font-weight: 600;
  margin-bottom: 0;
  margin: 10px;
`;

const IconTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ShareTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 0;
`;
const IconsTextCont = styled.div`
  display: flex;
  flex-direction: row;
`;
