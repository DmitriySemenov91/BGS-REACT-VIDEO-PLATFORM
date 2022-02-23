import API from "../https";
import { mediaList } from "../../types/types";
const mediaListData: mediaList = {
  MediaListId: 3,
  IncludeCategories: false,
  IncludeImages: true,
  IncludeMedia: false,
  PageNumber: 1,
  PageSize: 15,
};

export const apiGetMediaList = () =>
  API.post(`/Media/GetMediaList`, mediaListData);
export const apiGetMediaPlayInfo = (MediaId: number, StreamType: string) =>
  API.post(`/Media/GetMediaPlayInfo`, { MediaId, StreamType });
