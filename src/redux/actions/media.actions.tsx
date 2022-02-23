import { apiGetMediaList, apiGetMediaPlayInfo } from "../../services/media";
import {
  LOADING,
  LOAD_MEDIA_LIST,
  LOAD_MEDIA_INFO,
  REQUEST_ERROR,
} from "../reducers/media.reducer";
import { AppDispatch } from "../utils/appDispatch";

const _LOAD_MEDIA_LIST = (data: any[]) => ({
  type: LOAD_MEDIA_LIST,
  payload: {
    data,
  },
});

const _LOAD_MEDIA_INFO = (data: object) => ({
  type: LOAD_MEDIA_INFO,
  payload: {
    data,
  },
});

const _LOADING = () => ({
  type: LOADING,
});

const _REQUEST_ERROR = ({
  response: {
    data: { error = `Bład w systemie` },
  },
}) => ({
  type: REQUEST_ERROR,
  payload: {
    error,
  },
});

export const getMediaList = () => (dispatch: AppDispatch) => {
  dispatch(_LOADING());
  apiGetMediaList()
    .then((res: any) => dispatch(_LOAD_MEDIA_LIST(res.data)))
    .catch((error) => dispatch(_REQUEST_ERROR(error)));
};

export const getMediaPlayInfo =
  (MediaId: number, StreamType: string) => (dispatch: AppDispatch) => {
    dispatch(_LOADING());
    apiGetMediaPlayInfo(MediaId, StreamType)
      .then((res: any) => dispatch(_LOAD_MEDIA_INFO(res.data)))
      .catch((error) => dispatch(_REQUEST_ERROR(error)));
  };
