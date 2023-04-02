import styles from './Infocard.module.scss'

export default function Infocard() {
  return (
    <div className={styles.group_desc}>
      <div className={styles.image_wraper}>
        <div className={styles.image}>
          <img
            src={"https://picsum.photos/seed/picsum/80/80"}
            alt="Branch"
            style={{
              transform: "translate(50px,0)",
            }}
          />
          <img src={"https://picsum.photos/seed/lorem/80/80"} alt="College" />
        </div>
      </div>

      <div className={styles.info}>
        <span className={styles.heading}>
          {"Artificial Inteligence and Robotics"}
        </span>
        <span className={styles.subheading}>{"Class of 2020"}</span>
      </div>
    </div>
  );
}
