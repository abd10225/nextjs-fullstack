import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      {/* {data.map((item) => ( */}
        <Link href='blog/test' className={styles.container}>
          <div className={styles.imageContainer}>
            {/* <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            /> */}
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquid consectetur minus nisi numquam sapiente cumque. Sit, explicabo doloribus. Pariatur reprehenderit veniam minus est eligendi sit commodi voluptates quis corrupti.</p>
          </div>
        </Link>
      {/* ))} */}
    </div>
  )
}

export default Blog