import React, { useState } from "react";
import Link from "./Link";
import { CircleX, Menu } from "lucide-react";
const links = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    name: "Profile",
    path: "/profile",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links2 = links.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));
  return (
    <div className="flex justify-between mx-10 mt-4" onClick={() => setOpen(!open)}>
      <span className="flex">
        {open ? (
          <CircleX className="md:hidden"></CircleX>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}
        <ul
          className={`md:hidden absolute bg-amber-300 duration-1000 ${
            open ? "top-8" : "-top-64"
          }`}>
          {links2}
        </ul>
        <h3 className="ml-4">My Navbar</h3>
      </span>
      <div>
        <ul className="hidden md:flex">{links2}</ul>
        {/* <ul className="flex">
                <li className="mr-10" href="/">Home</li>
                <li className="mr-10" href="/About">About</li>
                <li className="mr-10" href="/Contact">Contact</li>
            </ul> */}
      </div>
      <button>Sign In</button>
    </div>
  );
};

export default NavBar;
