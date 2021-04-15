import API from "@aws-amplify/api";
import * as queries from './src/graphql/queries'
import { useSelector } from "react-redux";
import { apisAreAvailable } from "expo";

const getProjectState = (state) => state.project
const getFetchSearch = (state) => getProjectState(state).fetchSearch

export const fetchSearch = () => {
  return async function thunk(dispatch, getState) {
    const data = getFetchSearch(getState())


    // const fetchSample = await API.graphql({query: queries.listDataTableNews} )

    
    console.log("fetch api ", data);
  }

};

// const data = await query MyQuery {
//   getDataTableNew(id: "01a9c5f1-c738-4cd0-bae4-8848f858eb6e") {
//     BIN
//     Business_Email
//     Last_Name
//     First_Name
//     Community
//   }
// }

// const fetchSample = await API.graphql({query: queries.getDataTableNew, variables: {id: "01a9c5f1-c738-4cd0-bae4-8848f858eb6e"}})
