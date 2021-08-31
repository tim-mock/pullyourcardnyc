import { API, graphqlOperation } from "@aws-amplify/api";
import * as queries from './src/graphql/queries'
import { useDispatch, useSelector } from "react-redux";
import { apisAreAvailable } from "expo";
import { setSearchQuery } from "./Redux/Actions";

const getProjectState = (state) => state.project
const getFetchSearch = (state) => getProjectState(state).fetchSearch
export const fetchSearch = () => {
  return async function thunk(dispatch, getState) {
    const data = getFetchSearch(getState())
    let zip = data.zipCode
    let value = data.licenseValue
console.log('MAKING AN API CALL ')


    const fetchSample = await API.graphql(graphqlOperation(queries.listDataTableNews, {
      filter: {
        License_Type: {
          eq: value
        }
      },
      limit: 100
    }),
    )

    dispatch(setSearchQuery(fetchSample))



   
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




//   const fetchSample = await API.graphql({query: queries.listDataTableNews, 
  //     variables: {
  //     filter: {
  //       License_type: {
  //         eq: value
  //       }
  //     }, 
  //     limit: 10
  //   }
  // }
  //   )




