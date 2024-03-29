import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { RaffleForm } from "../../Components/RaffleForm/RaffleForm";
import Menu from "../../Components/sideMenu/Menu";
import SideNavBar from "../../Components/sideMenu/SideNavBar";
import { Header } from "../../Components/Header/Header";
import { DesktopMenu } from "../../Components/desktopMenu/DesktopMenu";
import { Footer } from "../../Components/Footer/Footer";

interface ReleasePageProps{
  postData: {title: string; colorway: string;}[]
}

export default function ReleasePage({ postData }: ReleasePageProps) {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Head>
        <title>Raffle Generator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DesktopContentContainer>
      <Head>
        <title>Blueprint Raffle Generator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <HeaderContainer>
          <Header type={""} />
          <DesktopMenu />
          <SearchNavContainer>
            <div>
              <SideNavBar open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </div>
          </SearchNavContainer>
        </HeaderContainer>
        <RaffleForm postData={postData[0]} />
      <Footer />
      </DesktopContentContainer>
    </Container>
  );
}

export async function getAllPostIds() {
  const res = await fetch("https://sneaker-mern-app.herokuapp.com/posts/");
  const posts = await res.json();
  return posts?.map((post : {_id: string, title: string}) => {
    const postID = post._id;
    const stringPostId = postID.toString();
    return {
      params: {
        nameColorway: post.title + "_" + stringPostId,
      },
    };
  });
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getPostData(id : string) {
  const res = await fetch(`https://sneaker-mern-app.herokuapp.com/posts/${id}`);
  const post = await res.json();

  // Combine the data with the id
  return {
    id,
    ...post,
  };
}

export interface getStaticPropsTypes{
  params: {
    nameColorway: string
  }
}

export async function getStaticProps({ params }: getStaticPropsTypes) {
  const id = params.nameColorway.split("_")[1];
  const postData = await getPostData(id);
  return {
    props: {
      postData,
    },
  };
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
`;


const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SearchNavContainer = styled.div`
  display: flex;
`;

const DesktopContentContainer = styled.div`
display: flex ;
width: 100% ;
flex-direction: column;
justify-content: center;
align-items: center ;
  @media (min-width: 768px) {
    background-color: #ffffff;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 80%;
  }

  @media (min-width: 1441px) and (max-width: 1900px) {
    width: 70%;
  }

  @media (min-width: 1900px) and (max-width: 2500px) {
    width: 60%;
  }

  @media (min-width: 2500px) {
    width: 55%;
  }
`;
