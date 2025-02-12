import styles from './Header.module.css';
import jclogo from "../../assets/jc_logo_v2.svg"
import crown from "../../assets/crown.svg"
import searchicon from "../../assets/ic_search.svg"
import voicesearch from "../../assets/voice-search.svg"
import jiologo from "../../assets/jio-logo.png"
import { useEffect, useState } from 'react';
import Show from '../show/Show';
const Header = (props) => {

  let navlinks = ["Home", "Sports", "Movies", "Tv shows", "More"]
  let [searchtitle, setSearchtitle] = useState("")
  let [filteredmovies, setFilteredmovies]= useState([])
  useEffect(()=>{
  
      if(searchtitle!=="")
        {
        let filtermovies = props.movies.filter((movie)=>{
          return movie.name.toUpperCase().includes(searchtitle.toUpperCase())
         
        })
        setFilteredmovies(filtermovies)
      }
      else{
        setFilteredmovies([])
      }
      
    
  },[searchtitle])
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <div className={styles.logo}>
            <img src={jclogo} alt="logo" />
            <p className={styles.premium}> <img src={crown} alt="" /> Go Premium</p>
          </div>
          <ul className={styles.navlink}>
            {
              navlinks.map((links) => {
                return <li className={styles.pink}>{links}</li>
              })}
          </ul>

        </nav>
        <div className={styles.search}>

          <div className={styles.searchbox}>
            <img src={searchicon} alt="icon" />
            <input type="text" onChange={(e) => {
              setSearchtitle(e.target.value)
            }}
            placeholder='Movies Shows And More' />
            <img src={voicesearch} alt="icon" />
          </div>
          <img src={jiologo} className={styles.futurelogo} alt="" />

        </div>
      </header>
              {
                filteredmovies.length!==0?(
                  <div className={styles.searchresults}>
        {
          filteredmovies.map((movie)=>{
            return <Show movie={movie} />
          })
        }

      </div>

                ):null
              }
      
    </>
  )
}

export default Header
