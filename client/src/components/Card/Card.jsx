import React from 'react'
import styles from './card.module.css'
import vida from './VIDA.jpeg'
import stats from './stats.png'
import boton from './boton.png'
import noPokemon from '../../assets/raro.webp'

export default function Card({name,weight,types,height,hp,img,noPokemon}){
 return(
    <div className={styles.conteiner}>
 <div className={styles.card}>
  <div className={styles.card2}>
    <br />
    <h1 className={styles.name}>{name}</h1>
    <p className={styles.parrafohp}>{weight}kg</p>
    <p className={styles.type}>{types + ''}</p>
    <p className={styles.altura}>{height}m</p>
    <p className={styles.hp}>hp:{hp}</p>
    <hr className={styles.hr} />
  <img className={styles.img} src={img?img:noPokemon} alt="Image not found" />
  <img src={vida}alt="Not imagen"width='100px'className={styles.vida}/>
  <img src={stats} alt="Image not found"className={styles.stats} />
  {/* <button>
    <img src={boton} alt="Boton Not Found" width='50px'height='50px'/>
  </button> */}

  </div>
 </div>   
 </div>
)    
}