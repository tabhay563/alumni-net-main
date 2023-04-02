import styles from "./Verifycard.module.scss";

export default function Verifycard() {
  return (
    <div className={styles.container}>
      <div className={styles.profile_block}>
        <img
          src="/assets/images/Nav/profile.svg"
          className={styles.profile_pic}
          alt="profile pic"
        />
        <div className={styles.headers}>
          <span className={styles.profile_name}>John Doe</span>
          <span className={styles.profile_email}>test@email.com</span>
        </div>
      </div>
      <div className={styles.main_block}>
        <li className={styles.list_item}>College Name</li>
        <li className={styles.list_item}>Branch Here</li>
        <li className={styles.list_item}>Year of Passing</li>
        <li className={styles.list_item}>987654132</li>
      </div>
      <div className={styles.verify_block}>
        <button className={styles.verify_button}>Verify</button>
      </div>
    </div>
  );
}
