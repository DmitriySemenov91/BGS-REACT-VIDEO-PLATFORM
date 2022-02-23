import React from "react";
import { Route } from "react-router-dom";
import HomeMedia from "src/pages/media/homeMedia";

const RoutesNavigation = () => {
  return (
    <>
      <Route exact path="/home" component={HomeMedia} />
    </>
  );
};

export default RoutesNavigation;
