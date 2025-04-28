import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: "no-store" });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Blog() {
  const posts = await getData();

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Our Blog</h1>
          <p className={styles.desc}>
            Explore our latest articles, insights, and stories. From technology trends to creative inspiration, find everything you need to stay informed and inspired.
          </p>
        </div>
      </section>

      <section className={styles.blogPosts}>
        <div className={styles.postsGrid}>
          {posts.map((post) => (
            <div className={styles.postCard} key={post._id}>
              <div className={styles.postImage}>
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className={styles.img}
                />
              </div>
              <div className={styles.postContent}>
                <div className={styles.postMeta}>
                  <span className={styles.postDate}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {new Date(post.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className={styles.postCategory}>{post.username}</span>
                </div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postDesc}>{post.desc}</p>
                <Link href={`/blog/${post._id}`} className={styles.readMore}>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 