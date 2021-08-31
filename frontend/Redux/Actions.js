import * as types from "./Types";

export const signIn = () => {
  return { type: types.SIGN_IN };
};

export const setInitialLocation = ({ coords }) => {
  return {
    type: types.SET_INTIAL_LOCATION,
    payload: { longitude: coords.longitude, latitude: coords.latitude },
  };
};

export const fetchZipType = ({ zipCode, licenseValue }) => {
  return {
    type: types.SET_ZIP_AND_TYPE,
    payload: { zipCode, licenseValue },
  };
};

export const setSearchQuery = (data) => {
  return {
    type: types.SET_SEARCH_QUERY, payload: data
  }
}