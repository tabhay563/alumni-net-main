import React, { Children } from "react";

import styles from "../styles/Dashboard/AlumniDashboard.module.scss";

import Sidebaralt from "../components/reusables/Dashboard/Side-bar/Sidebaralt";
import Navigation from "../components/reusables/Navigation";
import Sidebar from "../components/reusables/Dashboard/Sidebar/Sidebar";



 export function AlumniDashboardLayout({children} : {children : React.ReactNode}) {
  return (
<>
    <Navigation />
    <div className={styles.container}>
    <Sidebar />
    <div className={styles.content_container}>
      
          {children}
         
      
      </div>
    </div>
    </>
  );
}

// Dashboard.PageLayout =AlumniDashboardLayout ;

export default AlumniDashboardLayout;
