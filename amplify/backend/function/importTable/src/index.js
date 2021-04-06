const axios = require("axios");
const gql = require("graphql-tag");
const graphql = require("graphql");
const { print } = graphql;

const config = require("./config.json");
const raw = require("./raw.json");

const createDataTableNew = gql`
  mutation createPopulateData($input: CreateDataTableNewInput!) {
    createDataTableNew(input: $input) {
      id
      License_SL_No
      License_Type
      License_Number
      Last_Name
      First_Name
      Business_Name
      Number
      Street
      License_Business_City
      Business_State
      Business_Email
      Business_Phone_Number
      Postcode
      License_Status
      Latitude
      Longitude
      Community
      Council_District
      Census_Tract
      BIN
      BBL
      NTA
      createdAt
      updatedAt
    }
  }
`;

exports.handler = async (event) => {
  // let item = [
  //   "row-xm2y_vwss_zya7",
  //   "00000000-0000-0000-C3F3-839F400DD002",
  //   0,
  //   1607203428,
  //   null,
  //   1607203428,
  //   null,
  //   "{ }",
  //   "91555",
  //   "GENERAL CONTRACTOR",
  //   "622408",
  //   "ZAPPULLA",
  //   "GAETANO",
  //   "RAIN GUARD CONSTRUCTION",
  //   "8203",
  //   "3RD AVENUE",
  //   "BROOKLYN",
  //   "NY",
  //   "11209",
  //   null,
  //   "7183097927",
  //   "ACTIVE",
  //   "40.62626",
  //   "-74.029908",
  //   "10",
  //   "43",
  //   "62",
  //   "3152065",
  //   "3060070009",
  //   "Bay Ridge",
  // ];
  let response;

  for (item of raw.data) {
    try {
      response = await axios({
        url: config.url,
        method: "post",
        headers: {
          "x-api-key": config.apiKey,
        },
        data: {
          query: print(createDataTableNew),
          variables: {
            input: {
              License_SL_No: item[8],
              License_Type: item[9],
              License_Number: item[10],
              Last_Name: item[11],
              First_Name: item[12],
              Business_Name: item[13],
              Number: item[14],
              Street: item[15],
              License_Business_City: item[16],
              Business_State: item[17],
              Business_Email: item[19],
              Business_Phone_Number: item[20],
              Postcode: item[18],
              License_Status: item[21],
              Latitude: item[22],
              Longitude: item[23],
              Community: item[24],
              Council_District: item[25],
              Census_Tract: item[26],
              BIN: item[27],
              BBL: "" + item[28],
              NTA: item[29],
            },
          },
        },
      });
      console.log(response.data.error);
    } catch (err) {
      console.error(err);
      return {
        statusCode: 200,
        body: JSON.stringify({ error: err }),
      };
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Success" }),
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
};
