import { React, useState } from "react";
import styled from "styled-components";
import { PDF } from "../CreatePDF/CreatePDF";
import { MyDocument } from "../CreatePDF/CreatePDF2";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import { useSelector } from "react-redux";

export const RaffleForm = ({ postData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [shoeSize, setShoeSize] = useState("");
  const [renderLink, setRenderLink] = useState(false);

  // const itemData = useSelector((state) => {

  //     return state.sneaker.currentSneakerInfo;

  // })

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const formatPhoneNumber = (phoneNumberString) => {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName(capitalizeFirstLetter(e.target[0].value));
    setLastname(capitalizeFirstLetter(e.target[1].value));
    setPhoneNumber(formatPhoneNumber(e.target[2].value));
    setShoeSize(e.target[3].value);
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
        <h6>{postData.title + " " + postData.colorway}</h6>
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
  height: 650px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 60px;

  h1{
    margin-top: 15px;
  }
`;

const Description = styled.div`
  margin: 0 0;
  padding: 10px;
  width: 85%;
  font-size: 17px;
`;

const TextFormContainer = styled.div`
  width: 80%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const Form = styled.form`
  width: 90%;
`;
const Label = styled.label`
  margin: 10px;
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
  margin-bottom: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
  color: white;
  border: 2px solid #21587f;

  :hover {
    background-color: #305773;
  }
`;
