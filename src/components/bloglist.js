import styles from '../styles/bloglist.module.css';
import BlogOverview from './blogoverview';
import { screenBlogData, vanillaSWBlogData, arrayLengthBlogData } from '../data/blogData';

const BlogList = () => {

  return (
    <div className={styles.blogList}>
      <h2>Blog Posts</h2>
      <div className={styles.blogContainer}>
        <BlogOverview data={vanillaSWBlogData}/>
        <BlogOverview data={screenBlogData}/>
      </div>
      <a className={styles.allBlogs} href="https://medium.com/@piercefrank10" rel="noopener noreferrer" target="_blank">
        <span>See all blogs</span>
        <svg viewBox="0 0 24 24">
          <path d="M13.3 17.275q-.3-.3-.288-.725q.013-.425.313-.725L16.15 13H5q-.425 0-.713-.288Q4 12.425 4 12t.287-.713Q4.575 11 5 11h11.15L13.3 8.15q-.3-.3-.3-.713q0-.412.3-.712t.713-.3q.412 0 .712.3L19.3 11.3q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.687.275q-.413 0-.713-.3Z"/>
        </svg>
      </a>
    </div>
  )
}

export default BlogList;
