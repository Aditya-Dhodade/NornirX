import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/desktoptwo">DesktopTwo</Link>
        </li>
        <li>
          <Link to="/desktopone">DesktopOne</Link>
        </li>
        <li>
          <Link to="/desktopseven">DesktopSeven</Link>
        </li>
        <li>
          <Link to="/desktopsix">DesktopSix</Link>
        </li>
        <li>
          <Link to="/desktopeight">DesktopEight</Link>
        </li>
        <li>
          <Link to="/desktopfour">DesktopFour</Link>
        </li>
        <li>
          <Link to="/desktopfive">DesktopFive</Link>
        </li>
        <li>
          <Link to="/desktopnine">DesktopNine</Link>
        </li>
        <li>
          <Link to="/desktopten">DesktopTen</Link>
        </li>
        <li>
          <Link to="/desktopeleven">DesktopEleven</Link>
        </li>
        <li>
          <Link to="/rockpage">RockPage</Link>
        </li>
        <li>
          <Link to="/latinjazzpage">LatinJazzPage</Link>
        </li>
        <li>
          <Link to="/rappage">RapPage</Link>
        </li>
        <li>
          <Link to="/metalpage">MetalPage</Link>
        </li>
        <li>
          <Link to="/edmpage">EDMPage</Link>
        </li>
        <li>
          <Link to="/desktoptwelve">DesktopTwelve</Link>
        </li>
        <li>
          <Link to="/desktopthirteen">DesktopThirteen</Link>
        </li>
        <li>
          <Link to="/instrumentalpage">InstrumentalPage</Link>
        </li>
        <li>
          <Link to="/hiphoppage">HipHopPage</Link>
        </li>
        <li>
          <Link to="/jazzpage">JazzPage</Link>
        </li>
        <li>
          <Link to="/neoclassicalpage">NeoClassicalPage</Link>
        </li>
        <li>
          <Link to="/fillerpone">FillerPOne</Link>
        </li>
        <li>
          <Link to="/desktopfourteen">DesktopFourteen</Link>
        </li>
        <li>
          <Link to="/desktopfifteen">DesktopFifteen</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;