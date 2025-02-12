import { useState } from 'react'
import styles from './Tags.module.css'
function Tags() {

    let [tags, setTags] = useState(["For You",
        "Action",
        "Drama",
        "Sci-Fi",
        "Thriller",
        "Comedy",
        "Horror",
        "Fantasy",
        "Mystery",
        "Adventure",
        "Romance",
        "Superhero",
        "Crime",
        "Documentary",
        "Historical",
        "Musical",
        "War",
        "Western",
        "Animation",
        "Psychological",
        "Biopic"]);
    return (
        <>
        <div className={styles.tags}>
            {tags.map((tag)=>{
                return <p className= {styles.tag}>{tag}</p>
            })}
        </div>
        </>
    );
}

export default Tags
