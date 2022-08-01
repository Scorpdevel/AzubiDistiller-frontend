import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="header">
      <Link href="/">
        <h1 style={{"cursor":"pointer"}} className="test">AzubiDistiller</h1>
      </Link>
      <div className="db__links">
      <Link href="../Results">
        <a style={{"cursor":"pointer"}} className="navTitle">Kunden Datenbank</a>
      </Link>
      <Link href="../Results">
        <a style={{"cursor":"pointer"}} className="navTitle">Rating Datenbank</a>
      </Link>
      </div>
    </div>
  );
};

export default Header;
