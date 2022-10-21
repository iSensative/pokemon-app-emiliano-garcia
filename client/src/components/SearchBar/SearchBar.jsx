import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsbyName} from "../../actions";
import styles from './searchbar.module.css'
import pokemon from './../../assets/pokemon1.svg'



export default function SearchBar(){

const dispatch=useDispatch()
const[inputName,setInputName]=useState('')


function handleInputName(e){
setInputName(e.target.value.trim())    
}


function handleSubmit(e){
e.preventDefault()
 dispatch(getPokemonsbyName(inputName.trim()))   
}






return(
<div className={styles.navbar}>

<input type="search" onChange={e=>handleInputName(e)} className={styles.input}placeholder="Search Pokemon"/>
<button onClick={e=>handleSubmit(e)} className={styles.boton} type='submit'></button>
{/* <img className={styles.pokemon} src={pokemon} alt="" /> */}

</div>    
)

}