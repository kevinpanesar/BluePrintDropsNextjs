import Head from "next/head";
import styled from "styled-components";
import { Header } from "../Components/Header/Header";
import { PastPresent } from "../Components/Past-Present/PastPresent";
import { SneakerFeed } from "../Components/SneakerFeed/SneakerFeed";
import { NavBar } from "../Components/NavBar/NavBar";
import { Options } from "../Components/mensWomensKidsSelector/mensWomensKidsSelector";
import { SearchBar } from "../Components/SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSneakerInfo } from "../store/releaseInfo";
// export async function getStaticProps(context) {
//   const res = await fetch(`https://sneaker-mern-app.herokuapp.com/posts/`);
//   const kdata = await res.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: data,
//   };
// }

export default function Home({ data }) {
  const dispatch = useDispatch();
  const info = useSelector((state) => { state.allSneakerInfo});
  
  useEffect(() => {
       dispatch(fetchSneakerInfo()).then(() =>
      dispatch({ type: "sneaker/splitSneakerInfo" })
    ).then(() =>
    dispatch({ type: "sneaker/filterMonths" })
  );   
  }, []);

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SearchBar />
      <PastPresent />
      <Options />
      <SneakerFeed />
      <NavBar />
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
  background-color: #f5f5f5;
`;
