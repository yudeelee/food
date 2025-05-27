import Link from "next/link";
import Image from "next/image";

import classes from "./headerMenu.module.scss";

import logoImg from "@/assets/logo.png";
import HeaderBackground from "./headerBackground";

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
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HeaderMenu;
