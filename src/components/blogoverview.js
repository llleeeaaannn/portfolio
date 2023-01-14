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
      <div className={styles.button}>
        <a href={data.link} rel="noopener noreferrer" target="_blank">Read the full post</a>
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6Z"/>
        </svg>
      </div>
    </div>
  )
}

export default BlogOverview;
