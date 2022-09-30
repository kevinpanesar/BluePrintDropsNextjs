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
import { getStaticPropsTypes } from "../RaffleGenerator/[nameColorway]";
import { DesktopForSaleDetails } from "../../Components/ForSaleDetails/ForSaleDetailsPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface PropTypes {
  postData: {
    images: string[];
    date: string;
    title: string;
    colorway: string;
    _id: string;
    kidsFlag: boolean;
    description: string;
    mensFlag: boolean;
    womensFlag: boolean;
    shoe: boolean;
    OnlineLinks: {
      CanadianLinks: {
        title: string;
        type: string;
        img: string;
        link: string;
      }[];
      USALinks: { title: string; type: string; img: string; link: string }[];
      InternationalLinks: {
        title: string;
        type: string;
        img: string;
        link: string;
      }[];
    };
    clothing: boolean;
    price: number;
    cities: {
      [key: string]: {
        location: string;
        type: string;
        Description: string;
        img: string;
        date: string;
        Address: string;
      }[];
    };
    qty: number;
    availableSizeQty: Record<string, number>;
    skuNumber: string;
  }[];
}

function ForSaleDetails({ postData }: PropTypes) {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Head>
        {" "}
        n<title>{"BLUEPRINT X " + postData[0].title}</title>
        <meta
          name="description"
          content="Information about school and clothing releases"
        />
        <meta property="og:image" content={postData[0].images[0]} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <HeaderContainer>
          <Header type={""} />
          <DesktopMenu />
          <SearchNavContainer>
            <NavContainer>
              <SideNavBar open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </NavContainer>
          </SearchNavContainer>
        </HeaderContainer>
        <DesktopForSaleDetails data={postData[0]} />
      </Container>
      <footer></footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    </Container>
  );
}

export async function getAllPostIds() {
  const res = await fetch(
    "https://sneaker-mern-app.herokuapp.com/for-sale-listings/"
  );
  const posts = await res.json();
  return posts?.map((post: { title: string; _id: string }) => {
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

export async function getPostData(id: string) {
  const res = await fetch(
    `https://sneaker-mern-app.herokuapp.com/for-sale-listings/${id}`
  );
  const post = await res.json();

  // Combine the data with the id
  return {
    id,
    ...post,
  };
}

export async function getStaticProps({ params }: getStaticPropsTypes) {
  const id = params.nameColorway.split("KP")[1];
  const postData = await getPostData(id);
  return {
    props: {
      postData,
      fallback: false,
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

  @media (min-width: 768px) and (max-width: 1024px) {
    border-top: 1px solid #c0c0c0;
    border-bottom: 1px solid #c0c0c0;
    padding: 10px;
    background-color: white;
    width: 100%;
  }

  @media (min-width: 1024px) {
    border-top: 1px solid #c0c0c0;
    border-bottom: 1px solid #c0c0c0;
    padding: 10px;
    background-color: white;
    width: 70%;
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

export default ForSaleDetails;
