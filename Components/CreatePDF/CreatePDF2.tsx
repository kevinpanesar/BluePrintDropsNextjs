import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  table : {
    // display: "table",
    borderStyle: "dashed",
    marginTop: "25px",
    borderTopWidth: 1,
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
    borderLeftWidth: 1,
    borderStyle: "dashed",
    borderBottomWidth: 1,
  },
  tableCol: {
    width: "33.3%",
    borderStyle: "dashed",
    borderRightWidth: 1,
    borderLeftWidth: 0,
    paddingTop: "25px",
    paddingBottom: "25px",
  },
  tableCell: {
    padding: "5px",
    marginTop: 5,
    fontSize: 10,
  },
  logo: {
    width: "30%",
    marginRight: "auto",
    marginLeft: "auto",
    opacity: 0.3,
  },
  url: {
    opacity: 0.3,
    fontSize: 10,
    marginRight: "auto",
    marginLeft: "auto",
  },
  title: {
    fontSize: 11,
    padding: "5px",
    marginTop: 5,
    fontWeight: "bold",
  },
  pageTitle: {
    fontSize: 20,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 15,
  },
});

export interface MyDocumentProps {
  sneakerInfo: SneakerInfo,
  firstname: string,
  lastname: string,
  phoneNumber: string,
  shoeSize: string
}

interface SneakerInfo {
  title: string,
  colorway: string,

}

// Create Document Component
export const MyDocument = ({
  sneakerInfo,
  firstname,
  lastname,
  phoneNumber,
  shoeSize,
}: MyDocumentProps ) => {
  return (
    <Document>
      <Page>
        <Text style={styles.pageTitle}>Thank You For Using Blueprint!</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.title}>
                {sneakerInfo.title + " " + sneakerInfo.colorway}
              </Text>
              <Text style={styles.tableCell}>
                {"Name: " + firstname + " " + lastname}
              </Text>
              <Text style={styles.tableCell}>
                {"Phone Number: " + phoneNumber}
              </Text>
              <Text style={styles.tableCell}>{"Shoe Size: " + shoeSize}</Text>
              <Image src="/Media/raffleLogo.jpg" style={styles.logo} />
              <Text style={styles.url}>Made with blueprintdrops.com</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.title}>
                {sneakerInfo.title + " " + sneakerInfo.colorway}
              </Text>
              <Text style={styles.tableCell}>
                {"Name: " + firstname + " " + lastname}
              </Text>
              <Text style={styles.tableCell}>
                {"Phone Number: " + phoneNumber}
              </Text>
              <Text style={styles.tableCell}>{"Shoe Size: " + shoeSize}</Text>
              <Image src="/Media/raffleLogo.jpg" style={styles.logo} />
              <Text style={styles.url}>Made with blueprintdrops.com</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.title}>
                {sneakerInfo.title + " " + sneakerInfo.colorway}
              </Text>
              <Text style={styles.tableCell}>
                {"Name: " + firstname + " " + lastname}
              </Text>
              <Text style={styles.tableCell}>
                {"Phone Number: " + phoneNumber}
              </Text>
              <Text style={styles.tableCell}>{"Shoe Size: " + shoeSize}</Text>
              <Image src="/Media/raffleLogo.jpg" style={styles.logo} />
              <Text style={styles.url}>Made with blueprintdrops.com</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.title}>
                {sneakerInfo.title + " " + sneakerInfo.colorway}
              </Text>
              <Text style={styles.tableCell}>
                {"Name: " + firstname + " " + lastname}
              </Text>
              <Text style={styles.tableCell}>
                {"Phone Number: " + phoneNumber}
              </Text>
              <Text style={styles.tableCell}>{"Shoe Size: " + shoeSize}</Text>
              <Image src="/Media/raffleLogo.jpg" style={styles.logo} />
              <Text style={styles.url}>Made with blueprintdrops.com</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.title}>
                {sneakerInfo.title + " " + sneakerInfo.colorway}
              </Text>
              <Text style={styles.tableCell}>
                {"Name: " + firstname + " " + lastname}
              </Text>
              <Text style={styles.tableCell}>
                {"Phone Number: " + phoneNumber}
              </Text>
              <Text style={styles.tableCell}>{"Shoe Size: " + shoeSize}</Text>
              <Image src="/Media/raffleLogo.jpg" style={styles.logo} />
              <Text style={styles.url}>Made with blueprintdrops.com</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.title}>
                {sneakerInfo.title + " " + sneakerInfo.colorway}
              </Text>
              <Text style={styles.tableCell}>
                {"Name: " + firstname + " " + lastname}
              </Text>
              <Text style={styles.tableCell}>
                {"Phone Number: " + phoneNumber}
              </Text>
              <Text style={styles.tableCell}>{"Shoe Size: " + shoeSize}</Text>
              <Image src="/Media/raffleLogo.jpg" style={styles.logo} />
              <Text style={styles.url}>Made with blueprintdrops.com</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.title}>
                {sneakerInfo.title + " " + sneakerInfo.colorway}
              </Text>
              <Text style={styles.tableCell}>
                {"Name: " + firstname + " " + lastname}
              </Text>
              <Text style={styles.tableCell}>
                {"Phone Number: " + phoneNumber}
              </Text>
              <Text style={styles.tableCell}>{"Shoe Size: " + shoeSize}</Text>
              <Image src="/Media/raffleLogo.jpg" style={styles.logo} />
              <Text style={styles.url}>Made with blueprintdrops.com</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.title}>
                {sneakerInfo.title + " " + sneakerInfo.colorway}
              </Text>
              <Text style={styles.tableCell}>
                {"Name: " + firstname + " " + lastname}
              </Text>
              <Text style={styles.tableCell}>
                {"Phone Number: " + phoneNumber}
              </Text>
              <Text style={styles.tableCell}>{"Shoe Size: " + shoeSize}</Text>
              <Image src="/Media/raffleLogo.jpg" style={styles.logo} />
              <Text style={styles.url}>Made with blueprintdrops.com</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.title}>
                {sneakerInfo.title + " " + sneakerInfo.colorway}
              </Text>
              <Text style={styles.tableCell}>
                {"Name: " + firstname + " " + lastname}
              </Text>
              <Text style={styles.tableCell}>
                {"Phone Number: " + phoneNumber}
              </Text>
              <Text style={styles.tableCell}>{"Shoe Size: " + shoeSize}</Text>
              <Image src="/Media/raffleLogo.jpg" style={styles.logo} />
              <Text style={styles.url}>Made with blueprintdrops.com</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
