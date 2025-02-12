import Show from '../show/Show'
import styles from './shows.module.css'

function Shows(props) {
  return (
    <>
      <div className={styles.shows}>

      <h1>{props.title}</h1>
      <div className={styles.showsparent}>
        {
          props.movies.map((movie)=>{
            return <Show movie={movie}/>
          })
        }
        

      </div>
      </div>
    </>
  )
}

export default Shows
