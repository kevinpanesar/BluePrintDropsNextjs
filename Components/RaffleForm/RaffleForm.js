import { React, useState } from 'react';
import styled from 'styled-components';
import { PDF } from '../CreatePDF/CreatePDF';
import { MyDocument } from '../CreatePDF/CreatePDF2';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import { useSelector } from 'react-redux'

export const RaffleForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastname, setLastname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [shoeSize, setShoeSize] = useState('');
    const [renderLink, setRenderLink] = useState(false);


    const itemData = useSelector((state) => {

        return state.sneaker.currentSneakerInfo;

    })

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    const formatPhoneNumber = (phoneNumberString) => {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
          return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return null;
      }

    const handleSubmit  = (e) => {
        e.preventDefault();
        setFirstName(capitalizeFirstLetter(e.target[0].value))
        setLastname(capitalizeFirstLetter(e.target[1].value));
        setPhoneNumber(formatPhoneNumber(e.target[2].value));
        setShoeSize(e.target[3].value)
        setRenderLink(true);
    }

    console.log(itemData);

    return (<Container>
        <h1>Raffle Generator</h1>
        <p>Enter your info into the form and we will auto generate a page of raffles for you!</p>
        <Form onSubmit={handleSubmit}>
            <h4>{itemData.title + ' ' + itemData.colorway}</h4>
            <Label>First Name:</Label>
            <input type='text' name="firstName" placeholder="John" required/>
            <Label>Last Name:</Label>
            <input type='text' name="lastName" placeholder="Smith" required/>
            <Label>Phone Number:</Label>
            <input type="tel" name="phone" placeholder="604..." required/>
            <Label>Shoe Size:</Label>
            <input name="size" placeholder="10.0" required/><br />
            <input type="submit" value="Generate Link"/><br/>
            {renderLink && <PDFDownloadLink document={<MyDocument sneakerInfo={itemData} firstname={firstName} lastname={lastname} phoneNumber={phoneNumber} shoeSize={shoeSize} />} fileName="somename.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Download now!'
                }
            </PDFDownloadLink>}
        </Form>

    </Container>)
}

const Container = styled.div`
width: 100%;
height: 100vh;
`
const Form = styled.form`
width: 90%;
`
const Label = styled.label`
margin: 10px;
`