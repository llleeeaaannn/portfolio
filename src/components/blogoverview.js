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
          <path d="M13.3 17.275q-.3-.3-.288-.725q.013-.425.313-.725L16.15 13H5q-.425 0-.713-.288Q4 12.425 4 12t.287-.713Q4.575 11 5 11h11.15L13.3 8.15q-.3-.3-.3-.713q0-.412.3-.712t.713-.3q.412 0 .712.3L19.3 11.3q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.687.275q-.413 0-.713-.3Z"/>
        </svg>
      </div>
    </div>
  )
}

export default BlogOverview;
