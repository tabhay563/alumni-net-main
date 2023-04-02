import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { FaVideo } from "react-icons/fa";
import { HiDocument } from "react-icons/hi";
import { IoIosCloseCircleOutline, IoMdPhotos } from "react-icons/io";
import styles from "./Postoverlay.module.scss";

function DropDown() {
const [vis, setVis] = useState(0);

  return (
    <div
      style={{
        backgroundColor: "grey",
        color: "white",
        position: "absolute",
        marginLeft: "7rem",
        cursor:"pointer",
      }}
    >
      <div style={{borderBottom:1,borderColor:"white",padding:2}} onClick={()=>{setVis(0); }}>
        Anyone
      </div>
      <div style={{borderBottom:1,padding:2}}>
      College Alumni
      </div>
      <div style={{borderBottom:1,padding:2}}>
       Close Friends
      </div>
    </div>
  );
}

export default function Postoverlay(props: any) {
    const[visibility ,setVisibity] = useState(false);

    function toggleVisibility(){
        setVisibity(false);
    }

  return (
    <div className={styles.container}>
      <div className={styles.overlay_wrapper}>
        <div className={styles.header_block}>
          <img
            src="/assets/images/Nav/profile.svg"
            alt="profile"
            className={styles.profile_icon}
          />
          <div className={styles.heading}>
            <h2 className={styles.heading_title}>Name</h2>
            <button className={styles.visibility_button}
            onClick={()=>setVisibity(!visibility)}>Anyone</button>
          </div>
          <div className={styles.close}>
            <AiFillCloseCircle
              style={{ fontSize: 20, cursor: "pointer" }}
              onClick={props.closeOverlay}
            />
          </div>
        </div>
        <div className={styles.text_block}>
          <div className={styles.text_block_wrapper}>
            <textarea
              className={styles.input_text}
              placeholder="What's on your mind ?"
            ></textarea>
          </div>
        </div>
        <div className={styles.lower_block}>
          <div className={styles.add_buttons}>
            <IoMdPhotos size={30} />
            <FaVideo size={30} />
            <HiDocument size={30} />
            <HiDocument size={30} />
            <HiDocument size={30} />
          </div>
          <button className={styles.submit_button_icon}>Submit</button>
        </div>
      </div>
    </div>
  );
}
