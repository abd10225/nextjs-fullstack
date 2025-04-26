import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import next from 'next'

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: "no-store" });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json(); // Return the parsed JSON data
}

const Blog = async () => {
  const data = await getData(); // Fetch and store the data
  return (
    <div className={styles.mainContainer}>
      {data?.map((item) => ( // Use optional chaining to avoid errors if data is undefined
        <Link href={`blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            {/* <Image */}
            <p>{item.title}</p> {/* Display the title for testing */}
          </div>
        </Link>
      )) || <p>{item.body}</p> /* Fallback content if data is undefined or empty */}
    </div>
  );
};

export default Blog;