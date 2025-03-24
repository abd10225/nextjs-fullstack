'use client'
import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'

const Category = (params) => {
  
  return (
    <div className={styles.container}>

      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.items}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#" text="See More"/>
        </div>
        <div className={styles.imgContainer}>
          {/* <Image className={styles.img} fill={true} src="https://images.pexels.com/photos/31039333/pexels-photo-31039333/free-photo-of-elegant-barcelona-balcony-view-from-apartment.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" /> */}
        </div>
      </div>
    </div>
  )
}

export default Category