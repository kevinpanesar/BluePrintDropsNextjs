import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { ReleaseInfoPage } from "../../Components/ReleaseInfo/ReleaseInfoPage";
import Menu from "../../Components/sideMenu/Menu";
import SideNavBar from "../../Components/sideMenu/SideNavBar";
import { Header } from "../../Components/Header/Header";
import { useState } from "react";
import { DesktopMenu } from "../../Components/desktopMenu/DesktopMenu";
import { DesktopReleasePage } from "../../Components/DesktopReleasePage/DesktopReleasePage";

export default function ReleasePage({ postData }) {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Head>
        <title>{"BLUEPRINT X " + postData[0].title}</title>
        <meta
          name="description"
          content="Information about school and clothing releases"
        />
        <meta property="og:image" content={postData[0].images[2]} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <HeaderContainer>
          <Header />
          <DesktopMenu />
          <SearchNavContainer>
            <NavContainer>
              <SideNavBar open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </NavContainer>
          </SearchNavContainer>
        </HeaderContainer>
        {/* <ReleaseInfoPage data={postData[0]} /> */}
        <DesktopReleasePage data={postData[0]} />
      </Container>
      <footer></footer>
    </Container>
  );
}

export async function getAllPostIds() {
  const res = await fetch("https://sneaker-mern-app.herokuapp.com/posts/");
  const posts = await res.json();
  return posts.map((post) => {
    const postID = post._id;
    const stringPostId = postID.toString();
    return {
      params: {
        nameColorway: post.title + "KP" + stringPostId,
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

export async function getPostData(id) {
  const res = await fetch(`https://sneaker-mern-app.herokuapp.com/posts/${id}`);
  const post = await res.json();

  // Combine the data with the id
  return {
    id,
    ...post,
  };
}

export async function getStaticProps({ params }) {
  let id = params.nameColorway.split("KP")[1];
  const postData = await getPostData(id);
  return {
    props: {
      postData,
    },
  };
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

    @media (min-width: 768px) {
      border-top: 1px solid #C0C0C0;
      border-bottom: 1px solid #C0C0C0;
      padding: 10px;
      background-color: white;
  }
`;

const SearchNavContainer = styled.div`
  display: flex;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
