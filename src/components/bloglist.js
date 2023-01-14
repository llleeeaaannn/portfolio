import styles from '../styles/bloglist.module.css';
import BlogOverview from './blogoverview';
import { screenBlogData } from '../data/blogData';

const BlogList = () => {

  return (
    <div className={styles.blogList}>
      <h2>Blog Posts</h2>
      <div className={styles.blogContainer}>
        <BlogOverview data={screenBlogData}/>
        <BlogOverview data={screenBlogData}/>
        <BlogOverview data={screenBlogData}/>
      </div>
    </div>
  )
}

export default BlogList;
