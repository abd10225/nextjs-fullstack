import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}


export async function generateMetadata({ params }) {

  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  try {
    const data = await getData(params.id);

    // If data is not found, notFound() will be called in getData

    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.desc}>
              {data.desc}
            </p>
            <div className={styles.author}>
              {data.img && (
                <Image
                  src={data.img}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.avatar}
                />
              )}
              <span className={styles.username}>{data.username}</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            {data.img && (
              <Image
                src={data.img}
                alt=""
                fill={true}
                className={styles.image}
              />
            )}
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            {data.content}
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error rendering blog post:", error);
    return notFound();
  }
};

export default BlogPost;