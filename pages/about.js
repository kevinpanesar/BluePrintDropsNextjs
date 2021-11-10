import Head from "next/head";
import styled from "styled-components";
import { NavBar } from "../Components/NavBar/NavBar";
// import { AboutMePage } from "../Components/AboutMePage/AboutMe";
import { AboutMePage } from "../Components/AboutMePage/AboutUsPageDesktop";

export default function About() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Share&family=Zen+Tokyo+Zoo&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <AboutMePage  />
      </Container>
      <footer></footer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
