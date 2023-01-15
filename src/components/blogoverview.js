import styles from '../styles/blogoverview.module.css';

const BlogOverview = ({ data }) => {

  return (
    <div className={styles.blogOverview}>
      { data.name &&
        <h4>{ data.name }</h4>
      }
      { data.type &&
        <span>{ data.type }</span>
      }
      { data.description &&
        <p>{ data.description }</p>
      }
      <a className={styles.button} href={data.link} rel="noopener noreferrer" target="_blank">Read the full post</a>
    </div>
  )
}

export default BlogOverview;
