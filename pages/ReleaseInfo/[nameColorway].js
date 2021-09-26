import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
// import { NavBar } from "../Components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { ReleaseInfoPage } from "../../Components/ReleaseInfo/ReleaseInfoPage";
import { fetchSneakerInfo, setCurrentShoe } from "../../store/releaseInfo";
import { useRouter } from "next/router";

export default function ReleasePage({ postData }) {
  return (
    <Container>
      <Head>
        <title>{"BLUEPRINT X " + postData[0].title}</title>
        <meta
          name="description"
          content="Information about school and clothing releases"
        />
        <link rel="icon" href={postData[0].images[2]} />
      </Head>
      <Container>
        <ReleaseInfoPage data={postData[0]} />
        {/* <NavBar /> */}
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;
