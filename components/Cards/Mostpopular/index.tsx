import styles from './Mostpopular.module.scss'

export default function MostPopularCard(){
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.uppercard} style={{backgroundImage: `url(https://picsum.photos/200/300)`,backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <h2 className={styles.head}>
                        Notices
                    </h2>
                    <span className={styles.subheader}>
                        Notices from Institutes
                    </span>
                    <button className={styles.view}>View Notices</button>
                </div>
                <div className={styles.lowercard}>
                    <div className={styles.leftblock}>
                        <div className={styles.icon1} style={{backgroundImage: `url(https://picsum.photos/200/300)`,backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                        <div className={styles.icon2}  style={{backgroundImage: `url(https://picsum.photos/200/300)`,backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                        <div className={styles.icon3} style={{backgroundImage: `url(https://picsum.photos/200/300)`,backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                    </div>
                    <div className={styles.rightblock}>
                        35 students
                        </div>
                </div>
            </div>
        </div>
    );
}