import Featuredshow from '../featured-show/Featured-show'
import styles from './featured.module.css'

function Featured(props) {
    return (
        <>
            <section className={styles.section}>
                <h1 className={styles.sectiontitle}>Hot Right Now 🔥</h1>
                <div className={styles.shows}>
                    {
                        props.movies.map((movie)=>{return <Featuredshow movie={movie}/>})
                    }
                    
                </div></section>
        </>
    )
}

export default Featured
