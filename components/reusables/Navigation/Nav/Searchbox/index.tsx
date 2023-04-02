import next from "next";
import React, { useState } from "react";
import styles from './Searchbox.module.scss';

const Searchbox=()=>{
const [value, setValue] = useState("");

  function handleChange(e:any) {
    setValue(e.target.value);
  }
  function handleSubmit(e:any) {
    e.preventDefault();
    console.log(value);
  }

    return(
        <>
        <div className={styles.searchbox}>
            <input className={styles.input_search} type="text" placeholder="Search.." value={value} onChange={handleChange} onSubmit={handleSubmit}>

            </input>
        </div>
        </>
    );
}
export default Searchbox;