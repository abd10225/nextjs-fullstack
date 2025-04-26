import React from 'react'
import styles from './page.module.css'
import { notFound } from 'next/navigation';

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: "no-store" });
  if (!res.ok) {
    return notFound(); // Return a 404 page if the data is not found
  }
  return res.json(); // Return the parsed JSON data
}


const BlogPost = async ({params}) => {
  const data = await getData(params.id); // Fetch and store the data
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.body}
          </p>
          <div className={styles.author}>
            {/* <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            /> */}
            <span className={styles.username}>Username</span>
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