import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BiColumns, BiTrashAlt } from "react-icons/bi";
import DashboardLayout from "../../../../layout/DashboardLayout";
import styles from "../../../../styles/Dashboard/CollegeDashboard.module.scss";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { alumniColumns, alumniRows } from "../../../../components/reusables/Dashboard/AlumniData";
import { FaRegTrashAlt } from "react-icons/fa";

function AlumniManager() {


  const handleDelete =()=>{
    console.log("Delete");
   
    
  }
  const actionCol = [
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: () => {
        return (
          <>
            <div className={styles.action__container}>
              <button className={styles.remove__btn} onClick={handleDelete}  >
                <FaRegTrashAlt className={styles.trash__icn} />
                Remove
              </button>
            </div>
          </>
        );
      },
    },
  ];

  return (
    <>
      <h1 className={styles.heading}>Alumni Management</h1>

      <div className={styles.search_box}>
        <BsSearch className={styles.icon} />
        <input
          type="text"
          className={styles.search_bar}
          placeholder="Search for Alumni..."
        />
      </div>

      <div className={styles.Alumni__container}>
        <h1>List of Alumni</h1>
        <DataGrid
          rows={alumniRows}
          columns={alumniColumns.concat(actionCol)}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
         
        
         
        />
      </div>
    </>
  );
}

AlumniManager.PageLayout = DashboardLayout;

export default AlumniManager;
