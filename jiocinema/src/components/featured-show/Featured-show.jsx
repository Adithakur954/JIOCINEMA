import styles from './featured-show.module.css'

function Featuredshow(props) {
    return (
        <>
            <div className={styles.featuredshow}>
                <img src={props.movie.imageUrl} alt="poster" />
                <div className={styles.movietitle}>
                   {props.movie.name}
                    </div>           
            
            </div>
        </>
    )
}

export default Featuredshow
