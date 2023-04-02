import React from 'react'
import styles from "../styles/PageStyles/HeroPage/Features.module.scss"

type Props = {}

const Features = (props: Props) => {
  return (
    <div className={styles.main__container} id="features">
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.content__left}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto beatae, fugit veritatis dolorum, ipsa dignissimos ipsam temporibus voluptates aliquid magnam? Earum, sit aspernatur perspiciatis totam possimus adipisci voluptatum aut praesentium omnis fugiat iste excepturi nulla nemo! Sit pariatur fuga excepturi numquam quia non laborum adipisci, temporibus aperiam aspernatur suscipit.</div>
                <div className={styles.content__right}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium reiciendis itaque repellendus aliquid molestias quo aut maiores delectus, blanditiis sapiente non cum obcaecati consequuntur architecto expedita fuga nihil nemo, debitis mollitia eos laborum. Accusantium temporibus distinctio placeat quisquam dolorum.</div>
            </div>
        </div>
    </div>
  )
}

export default Features