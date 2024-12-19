import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const navigations = [
    {
      label: "Haqqında",
      value: "/about",
    },
    {
      label: "İş nümunələri",
      value: "/works",
    },
    {
      label: "Əlaqə",
      value: "/contact",
    },
  ];

  return (
    <nav>
      {navigations.map((navigation) => (
        <NavLink to={navigation.value}>{navigation.label}</NavLink>
      ))}
    </nav>
  );
}

export default Header;
