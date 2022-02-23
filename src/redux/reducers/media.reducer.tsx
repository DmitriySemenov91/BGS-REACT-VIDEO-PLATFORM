import MediaTypes from "../types/media.types";
import { LOGOUT } from "./auth.reducer";

export const LOAD_MEDIA_LIST = "account/LOAD_MEDIA_LIST";
export const LOAD_MEDIA_INFO = "account/LOAD_MEDIA_INFO";
export const LOADING = "account/LOADING";
export const REQUEST_ERROR = "account/REQUEST_ERROR";

const initialState: MediaTypes = {
  mediaList: [],
  mediaItem: {},
  errorMessage: null,
  isLoading: false,
  loaded: false,
};

const MediaReducer = (state = initialState, action: any): MediaTypes => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_MEDIA_LIST:
      return {
        ...state,
        mediaList: action.payload.data,
        isLoading: false,
        errorMessage: null,
        loaded: true,
      };
    case LOAD_MEDIA_INFO:
      return {
        ...state,
        mediaItem: action.payload.data,
        isLoading: false,
        errorMessage: null,
        loaded: true,
      };
    case LOGOUT:
      return initialState;
    case REQUEST_ERROR:
      return {
        ...state,
        errorMessage: action.payload.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default MediaReducer;
