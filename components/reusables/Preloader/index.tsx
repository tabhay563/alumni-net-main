import styles from "./Preloader.module.scss"

import React from 'react'
import Image from "next/image"

type Props = {}

export default function Preloader({}: Props) {
  return (
    <div className={styles.container}>
        <Image src="/assets/logo.png" height={220} width={300} />
    </div>
  )
}