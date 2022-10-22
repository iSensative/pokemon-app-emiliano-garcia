import React from 'react'
import styles from "./landingpage.module.css";
import {Link} from 'react-router-dom'
import pokelanding from '../../assets/pokeLan.webp'
import pokebaile from '../../assets/pokebaile.gif'


export default function LandingPage() {
return(
 <div className={styles.landing}>
<div>
<h1 className={styles.h1}>Welcome to PokeApp</h1>
<p className={styles.flecha}>⇣</p>
<img src={pokebaile} className={styles.pokebaile} alt="" />
<Link to='/home'>
<img src={pokelanding} className={styles.botonLan} alt="" />
</Link>

</div>
 </div> 
)
}
