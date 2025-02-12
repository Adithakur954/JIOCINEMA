import styles from './show.module.css'

const Show = (props) => {
  return (
    <>
     
        <div className={styles.shows}>
            <img src={props.movie.imageUrl} alt="poster" />
            <div className={styles.movietitle}>
              {props.movie.name}
            </div>

        </div>
    </>
  )
}

export default Show
