import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/page1">Page 1</Link>
          </li>
          <li>
            <Link to="/page2">Page 2</Link>
          </li>
          <li>
            <Link to="/page3">Page 3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardPage;