import React from "react";
import { useSelector } from "react-redux";
import { AppTypes } from "src/redux/types/app.types";

import Header from "src/components/commons/Header";
import Sidebar from "src/components/commons/Sidebar";
import RoutesNavigation from "src/routes/routesNavigation";

const AppContainer = () => {
  const { auth } = useSelector((state: AppTypes) => state);

  return (
    <>
      <Sidebar />
      <div className="content">
        <Header {...auth} />
        <RoutesNavigation />
      </div>
    </>
  );
};

export default AppContainer;
