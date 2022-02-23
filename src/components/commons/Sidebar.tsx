import React from "react";
import { logoutAction } from "src/redux/actions/auth.actions";
import { globalDispatch } from "src/redux/utils/globalDispatch";
import powerOff from "../../assets/icons/power-off.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const handleLogout = () => globalDispatch(logoutAction());
  return (
    <div className="sidebar">
      <div className="menu">
        <h4>Accounts</h4>
        <ul>
          <li>
            <NavLink activeClassName="active" exact to="/home">
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="logout">
        <img src={powerOff} alt="" onClick={handleLogout} />
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
