import React, { useState } from "react";
import styled from "styled-components";
import { PDF } from "../CreatePDF/CreatePDF";
import { MyDocument } from "../CreatePDF/CreatePDF2";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import { NoInfer } from "@reduxjs/toolkit/dist/tsHelpers";

interface RaffleFormProps {
  postData: {
    title: string;
    colorway: string;
  };
}

export const RaffleForm = ({ postData }: RaffleFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [shoeSize, setShoeSize] = useState("");
  const [renderLink, setRenderLink] = useState(false);

  // const itemData = useSelector((state) => {

  //     return state.sneaker.currentSneakerInfo;

  // })

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const formatPhoneNumber = (phoneNumberString: string): string => {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return "";
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFirstName(capitalizeFirstLetter(event.target[0].value));
    setLastname(capitalizeFirstLetter(event.target[1].value));
    setPhoneNumber(formatPhoneNumber(event.target[2].value));
    setShoeSize(event.target[3].value);
    setRenderLink(true);
  };

  return (
    <Container>
      <h1>Raffle Generator</h1>
      <Description>
        Enter your info into the form below and we will auto generate a page of
        raffles for you! During covid most stores require you to bring your own
        raffles.
      </Description>
      <TextFormContainer>
        <h5>{postData.title + " " + postData.colorway}</h5>
        <Form onSubmit={handleSubmit}>
          {/* <h5>{postData.title + " " + postData.colorway}</h5> */}
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
          <Input type="text" name="lastName" placeholder="Last Name" required />
          <Input type="tel" name="phone" placeholder="Phone Number" required />
          <Input name="size" placeholder="Shoe Size" required />
          <br />
          <GenerateRafflesButton type="submit" value="Generate Link" />
          <br />
          {renderLink && (
            <PDFDownloadLink
              document={
                <MyDocument
                  sneakerInfo={postData}
                  firstname={firstName}
                  lastname={lastname}
                  phoneNumber={phoneNumber}
                  shoeSize={shoeSize}
                />
              }
              fileName={postData.title + "_Raffles.pdf"}
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download now!"
              }
            </PDFDownloadLink>
          )}
        </Form>
      </TextFormContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  padding-bottom: 20px;

  h1 {
    margin-top: 15px;
  }

  @media (min-width: 450px) and (max-width: 768px) {
    width: 70%;
  }

  @media (min-width: 768px) {
    width: 400px;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 50px;
  }
`;

const Description = styled.div`
  margin: 0 0;
  padding: 10px 0;
  width: 85%;
  font-size: 17px;
`;

const TextFormContainer = styled.div`
  width: 90%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h5 {
    padding: 10px;
  }
`;

const Form = styled.form`
  width: 90%;
`;

const Input = styled.input`
  height: 40px;
  margin-bottom: 15px;
  border-radius: 5px;
  width: 100%;
  padding: 5px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #a9a9a9;
  }
`;

const GenerateRafflesButton = styled.input`
  background-color: #21587f;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
  color: white;
  border: 2px solid #21587f;
  margin-bottom: 5px;

  :hover {
    background-color: #305773;
  }
`;
