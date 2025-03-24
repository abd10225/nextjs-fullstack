import React from 'react'
import styles from './page.module.css'

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>titlr</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit beatae recusandae! Aut nemo molestias expedita repudiandae quod. Doloremque libero enim nihil quia cupiditate possimus deleniti explicabo nesciunt asperiores omnis?
          </p>
          <div className={styles.author}>
            {/* <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            /> */}
            <span className={styles.username}>username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          {/* <Image
            src={data.img}
            alt=""
            fill={true}
            className={styles.image}
          /> */}
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         content
        </p>
      </div>
    </div>
  )
}

export default BlogPost