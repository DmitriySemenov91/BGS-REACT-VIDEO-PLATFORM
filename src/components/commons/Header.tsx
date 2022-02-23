import React from "react";
import AuthTypes from "src/redux/types/auth.types";

const Header = ({ user }: AuthTypes) => {
  return (
    <header className="header">
      <div className="center-vertical">
        <img className="avatar" src={user?.avatar} alt="avatar" />
        <b className="vas ml-10">{user?.name} </b>
      </div>
    </header>
  );
};

export default React.memo(Header);
