import React, { Children } from "react";

import styles from "../styles/Dashboard/CollegeDashboard.module.scss";

// import Sidebaralt from "../components/reusables/Dashboard/Side-bar/Sidebaralt";
import Navigation from "../components/reusables/Navigation";
// import Sidebar from "../components/reusables/Dashboard/Sidebar/Sidebar";
import SidebarColl from "../components/reusables/Dashboard/Sidebar/SidebarColl";


 export function DashboardLayout({children} : {children : React.ReactNode}) {
  return (
<>
    <Navigation />
   
    <div className={styles.container}>
    
    <SidebarColl />
    <div className={styles.content_container}>
      {children}
    
      </div>
    </div>
    </>
  );
}

// Dashboard.PageLayout =DashboardLayout ;

export default DashboardLayout;
