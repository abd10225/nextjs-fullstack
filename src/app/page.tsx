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

export default async function Home() {
  const posts = await getData();

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Welcome to Our Blog</h1>
          <p className={styles.desc}>
            Discover insightful articles, creative stories, and expert perspectives on technology, design, and more.
          </p>
          <Link href="/blog" className={styles.ctaButton}>
            Explore Articles
          </Link>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Hero Image"
            fill
            className={styles.img}
          />
        </div>
      </section>

      <section className={styles.featuredPosts}>
        <h2 className={styles.sectionTitle}>Featured Articles</h2>
        <div className={styles.postsGrid}>
          {posts.slice(0, 3).map((post) => (
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
        <div className={styles.viewAllContainer}>
          <Link href="/blog" className={styles.viewAllButton}>
            View All Articles
          </Link>
        </div>
      </section>

      <section className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <h2 className={styles.newsletterTitle}>Stay Updated</h2>
          <p className={styles.newsletterDesc}>
            Subscribe to our newsletter for the latest articles and updates.
          </p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.newsletterInput}
            />
            <button type="submit" className={styles.newsletterButton}>
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
} 