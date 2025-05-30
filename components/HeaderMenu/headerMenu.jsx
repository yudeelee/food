"use client";

import Link from "next/link";
import Image from "next/image";

import classes from "./headerMenu.module.scss";

import logoImg from "@/assets/logo.png";
import HeaderBackground from "./headerBackground";
import NavLink from "./NavLink";

const HeaderMenu = () => {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image
            src={logoImg.src}
            alt="The plate with the food on it"
            width={400}
            height={400}
            priority
          />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HeaderMenu;
