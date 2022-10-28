import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState } from "react";
import axios from "axios";
import {Link,useParams} from "react-router-dom";
import styles from './details.module.css'
import { deletePokemon, getDetail, getPokemons } from "../../actions";
import vida from './VIDA.jpeg'
import stats from './stats.png'



export default function Details(){
 const dispatch=useDispatch() 
const {id}=useParams()

const allPokemons=useSelector(state=>state.pokemons)
const pokemon=useSelector(state=>state.details)
console.log(pokemon)

function handleDelete(id){
if(pokemon.createdInDb){
  dispatch(deletePokemon(id))
alert('Pokemon Eliminado!')
}else{
 return alert('Lo siento,solo se pueden eliminar pokemons creados!') 
}
}

 useEffect(()=>{
dispatch(getDetail(id))
 },[dispatch])

 useEffect(()=>{
dispatch(getPokemons())
 },[dispatch])

return(
<div className={styles.conteiner}>
  <div className={styles.navbar}>

  </div>
 <div className={styles.card}>
  <div className={styles.card2}>
    <br />
    <h1 className={styles.name}>{pokemon.name}</h1>
    <p className={styles.parrafohp}>{pokemon.weight}kg</p>
    <p className={styles.type}>{pokemon.createdInDb?pokemon.Types?.map(type=>type.name + ' '):pokemon.types?.map(type=>type + " ")}</p>
    <p className={styles.altura}>{pokemon.height}m</p>
    <p className={styles.hp}>hp:{pokemon.createdInDb?pokemon.healht:pokemon.hp}</p>
    <p className={styles.defense}>Defense:{pokemon.defense}</p>
    <p className={styles.attack}>Attack:{pokemon.attack}</p>
    <hr className={styles.hr} />
  <img className={styles.img} src={pokemon.createdInDb?pokemon.image:pokemon.img} alt="Image not found" />
  <img src={pokemon.createdInDb?pokemon.image:pokemon.backImg} className={styles.backimg} alt="" />
  <img src={vida}alt="Not imagen"width='100px'className={styles.vida}/>
  <img src={stats} alt="Image not found"className={styles.stats} />
  </div>
  <button onClick={e=>handleDelete(e)}>X</button>
 </div>
 <Link to='/home'>
 <button>
    <span class={styles.botoncito}>
     Home!
    </span>
</button>
  </Link>
  <div className={styles.navbar2}>
<p className={styles.nameNav}>Developed by Emiliano Garcia</p>
<p className={styles.copy}>Copyright © 2022</p>
  </div>
 </div>
)
}