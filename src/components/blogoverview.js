import styles from '../styles/blogoverview.module.css';

const BlogOverview = ({ data }) => {

  const lol = 0;

  return (
    <div className={styles.blogOverview}>
      { data.type &&
        <span>{ data.type }</span>
      }
      { data.name &&
        <h4>{ data.name }</h4>
      }
      { data.description &&
        <p>{ data.description }</p>
      }
      <a className={styles.button} href={data.link} rel="noopener noreferrer" target="_blank">
        <span>Read the full post</span>
      </a>
    </div>
  )
}

export default BlogOverview;
