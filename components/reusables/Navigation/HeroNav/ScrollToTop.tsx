import React, { useEffect, useState } from "react";
import { BiUpArrow } from "react-icons/bi";
import styles from "../../../../styles/PageStyles/HeroPage/ScrollToTop.module.scss";

type Props = {};

const ScrollToTop = (props: Props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
};
useEffect(() => {

window.addEventListener("scroll", toggleVisibility);

},[])

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
// };
// window.addEventListener("scroll", toggleVisibility);

  return (
    <>
      {visible && (
        <div className={styles.scrollToTop} onClick={scrollToTop}>
          <BiUpArrow />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
