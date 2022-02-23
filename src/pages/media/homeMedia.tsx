import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppTypes } from "src/redux/types/app.types";
import Loading from "../../components/commons/Loading";
import { globalDispatch } from "src/redux/utils/globalDispatch";
import {
  getMediaList,
  getMediaPlayInfo,
} from "src/redux/actions/media.actions";

import ReactPlayer from "react-player/lazy";

const HomeMedia = () => {
  const dispatch = useDispatch();
  const { mediaList, errorMessage, isLoading, mediaItem } = useSelector(
    (state: AppTypes) => state.media
  );
  // @ts-ignore
  const { Entities } = mediaList || {};
  // @ts-ignore
  const { ContentUrl } = mediaItem || {};

  useEffect(() => {
    globalDispatch(getMediaList());
  }, [getMediaList]);

  const StreamType = "TRIAL";

  if (isLoading) {
    return <Loading title="loading" />;
  } else if (errorMessage) {
    return <div>{errorMessage}</div>;
  } else {
    return (
      <div className="media">
        <div>
          {ContentUrl ? (
            <ReactPlayer
              className="react-player"
              controls
              width="100%"
              height="100%"
              url={ContentUrl}
              playing={false}
              loop={false}
              playbackRate={1.0}
              muted={true}
              // onReady={() => console.log('onReady')}
              // onStart={() => console.log('onStart')}
              // onPlay={this.onPlay}
              // onPause={this.onPause}
              // onBuffer={() => console.log('onBuffer')}
              // onSeek={e => console.log('onSeek', e)}
              // onEnded={this.onEnded}
              onError={(e) => console.log("Error", e)}
              // onProgress={this.onProgress}
              // onDuration={this.onDuration}
            />
          ) : (
            <div className="not-load-video">
              Video doesn't load yet, please try again
            </div>
          )}
        </div>
        <div className="media-list">
          {Entities ? (
            Entities.map((media: any) => (
              <div key={media.Id} className="media-item">
                <img src={media.MediaAgeRestrictionImageUrl || "not found"} />
                <div className="media-wrapper-text">
                  <div>{media.Title}</div>
                  <div className="media-desc">{media.Description}</div>
                </div>
                <button
                  onClick={() =>
                    dispatch(getMediaPlayInfo(+media.Id, StreamType))
                  }
                >
                  Watch the video
                </button>
              </div>
            ))
          ) : (
            <div>No data</div>
          )}
        </div>
      </div>
    );
  }
};

export default HomeMedia;
