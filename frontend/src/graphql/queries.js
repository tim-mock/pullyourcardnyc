/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDataTableNew = /* GraphQL */ `
  query GetDataTableNew($id: ID!) {
    getDataTableNew(id: $id) {
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
export const listDataTableNews = /* GraphQL */ `
  query ListDataTableNews(
    $filter: ModeldataTableNewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDataTableNews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
