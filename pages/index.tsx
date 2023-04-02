import React, { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/PageStyles/HeroPage/Hero.module.scss";
import { GiClick, GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import Image from "next/image";
import { positions } from "@mui/system";
import { NavbarHero } from "../components/reusables/Navigation/HeroNav/NavbarHero";
import Landing from "../sections/Landing";
import About from "../sections/About";
import Features from "../sections/Features";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import ScrollToTop from "../components/reusables/Navigation/HeroNav/ScrollToTop";

const Home: NextPage = () => {
  

  const router = useRouter();
  return (
    <div className={styles.Hero__container}>
      <ScrollToTop />
    <NavbarHero />
   <Landing />
   <Features />
   <About />
   <Contact />
   <Footer />
    </div>
  );
};

export default Home;





{/* <section className={styles.hero__section}>
<div className={styles.hero__content}>
  <h1 className={styles.hero__title}>
    A Complete Solution for Managing the auspicious alumni network 🚀
  </h1>
  <button className={styles.action__btn}><GiClick />Click To Explore</button>
</div>
</section>
<img className={styles.alumni_img} src="/../assets/images/Hero/alumni_icon.svg"  /> */}