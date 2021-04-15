import * as types from "../Types";

const initialState = {
  isHandsome: true,
  location: {
    hasLocation: false,
    latitude: 40.758,
    longitude: -73.9855,
  },
  fetchSearch: {
    type: "gg",
    zipcode: "gg",
  },
};

function ProjectReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_INTIAL_LOCATION:
      return {
        ...state,

        location: {
          hasLocation: true,
          longitude: action.payload.longitude,
          latitude: action.payload.latitude,
        },
      };
    case types.SET_ZIP_AND_TYPE:
      return {
        ...state,
        fetchSearch: action.payload,
      };
    default:
      return state;
  }
}

export default ProjectReducer;
