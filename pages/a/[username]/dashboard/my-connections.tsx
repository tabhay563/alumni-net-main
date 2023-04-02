import AlumniDashboardLayout from "../../../../layout/AlumniDashboardLayout";
import styles from "../../../../styles/Dashboard/Connections.module.scss";

function Connections() {
  return (
    <>
      <div className={styles.available_chats_wraper}>
        <span className={styles.title}>{"Connections"}</span>
        <div className={styles.available_chats}>
          {[1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 7].map((data, index) => {
            return (
              <div className={styles.thread} key={index}>
                <div className={styles.image_wraper}>
                  <img
                    src={"https://picsum.photos/seed/ssadm/80/80"}
                    alt="College"
                    className={styles.image}
                  />
                </div>
                <span className={styles.title}></span>
                <span className={styles.btn__container}>
                    <button className={styles.btn}>Remove</button>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// add page Layout
Connections.PageLayout = AlumniDashboardLayout;

export default Connections;