import React from "react";
import ReactPDF from "@react-pdf/renderer";
import { MyDocument } from "./CreatePDF2";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import { MyDocumentProps } from "./CreatePDF2";

const ref = React.createRef();

const options = {
  orientation: "landscape",
};

export const PDF = () => {
  return (
    <div>
      <div ref={ref as React.RefObject<HTMLDivElement>}>
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
      <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
      <MyDocument />
      ReactPDF.render(
      <MyDocument />, `example.pdf`)
    </div>
  );
};
