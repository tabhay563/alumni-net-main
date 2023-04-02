import React from "react";
import Sidebaralt from "../../../../components/reusables/Dashboard/Side-bar/Sidebaralt";

import Navigation from "../../../../components/reusables/Navigation";

import styles from "../../../../styles/Dashboard/CollegeDashboard.module.scss";
import DashboardLayout from "../../../../layout/DashboardLayout";
import AlumniDashboardLayout from "../../../../layout/AlumniDashboardLayout";

function Dashboard({children}: {children : React.ReactNode}) {
  return (
    <>
      <div className={styles.content_container}>
       {children}
      </div>
    </>
  );
}

Dashboard.PageLayout =AlumniDashboardLayout ;

export default Dashboard;
