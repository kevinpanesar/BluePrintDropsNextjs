import React from 'react';
import Pdf from 'react-to-pdf';
 import ReactPDF from '@react-pdf/renderer';
import { MyDocument } from './CreatePDF2';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';


const ref = React.createRef();

const options = {
    orientation: 'landscape',
};

export const PDF = (props) => {

    return (<div>
        <div ref={ref}>
            <table>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                </tr>
            </table>
        </div>
        {/* <Pdf targetRef={ref} filename="Raffles.pdf" options={options}>
            {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
        </Pdf> */}
        <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
            {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : 'Download now!'
            }
        </PDFDownloadLink>
        <MyDocument />
        {ReactPDF.render(<MyDocument />, `example.pdf`)}
    </div>)
}