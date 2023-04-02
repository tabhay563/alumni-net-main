import React, { useState } from 'react';
import styles from './Navmenu.module.scss';
import {HiArrowNarrowLeft} from "react-icons/hi";

const Navmenu=(props:any)=>{

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.backarrow}>
                    <HiArrowNarrowLeft onClick={props.handleChangeMenu}/>
                </span>
            </div>
        </div>
    );
}

export default Navmenu;