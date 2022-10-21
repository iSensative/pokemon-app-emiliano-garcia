import React from 'react'
import{useState,useEffect} from 'react'
import{useDispatch,useSelector}from 'react-redux'
import { getPokemons,filterAlf,getFilter,filterTypes, getTypes,dataBase} from '../../actions'
import Card from '../Card/Card'
import styles from './home.module.css'
import Paginado from '../Paginado/Paginado'
import SearchBar from '../SearchBar/SearchBar'
import pokebola from '../../assets/pokebola.svg'
import pokemon from './../../assets/pokemon1.svg'
import { Link } from 'react-router-dom'
import noPokemon from '../../assets/raro.webp'
import giftPoke from '../../assets/pokegift.gif'



export default function Home(){
const dispatch=useDispatch()
const allPokemons=useSelector(state=>state.pokemonsfilter)
const[currentPage,setCurrentPage]=useState(1)
const[postPerPage,setPostPerPage]=useState(8)


useEffect(()=>{
dispatch(getPokemons())
dispatch(getFilter())
dispatch(getTypes())
},[])



function handleAlf(e){
dispatch(filterAlf(e.target.value))
setPayload(e.target.value)
}

function handleType(e){
dispatch(filterTypes(e.target.value))
setPayload(e.target.value)
console.log(e.target.value)
}

function handleDb(e){
 dispatch(dataBase(e.target.value))
 setPayload(e.target.value) 
}

const [payload, setPayload] = useState("Asc");
//GET CURRENT POST 
const paginate = pageNumber => setCurrentPage(pageNumber);
const indexOfLastPost=currentPage * postPerPage
const indexOfFirstPost=indexOfLastPost-postPerPage
const currentPosts=allPokemons.slice(indexOfFirstPost,indexOfLastPost)


return(
 <div className={styles.container}>
<div className={styles.navbar2}>
<select className={styles.select1} onChange={e=>handleAlf(e)}>
<option value="Asc">Ascendente</option>
<option value="Desc">Descendente</option>
</select>
<select className={styles.select2} onChange={e=>handleType(e)}>
  <option value="rock">Rock</option>
  <option value="flying">Flying</option>
  <option value="poison">Poison</option>
  <option value="bug">Bug</option>
  <option value="fire">Fire</option>
  <option value="water">Water</option>
  <option value="ice">Ice</option>
  <option value="dragon">Dragon</option>
  <option value="shadow">Shadow</option>
  <option value="ground">Ground</option>
  <option value="steel">Steel</option>
  <option value="electric">Electric</option>
  <option value="fairy">Fairy</option>
  <option value="normal">Normal</option>
  <option value="psychic">Psychic</option>
  <option value="unknown">Unknown</option>
  <option value="fighting">Fighting</option>
  <option value="ghost">Ghost</option>
  <option value="grass">Grass</option>
  <option value="dark">Dark</option>
</select>
<select className={styles.select3} onChange={e=>handleDb(e)}>
 <option value="All">Todos</option>
 <option value="database">Creados por la Comunidad</option>
 <option value="api">Api</option>
</select>
<SearchBar />
<hr className={styles.hr}/>
</div>
<Link to='/createPokemon'>
  <button className={styles.botonCreate}>Crear Pokemon</button>
</Link>
<img src={pokemon}className={styles.pokemon} alt="" />


<div className={styles.pokemoncontainer}>
{allPokemons?
 allPokemons 
 ?.slice(indexOfFirstPost,indexOfLastPost)
 ?.map(pokemon=>{
   return(
    <Link to={`/detail/${pokemon.id}`}>
   <Card name={pokemon.name}weight={pokemon.createdInDb?pokemon.weight:pokemon.weight}types={pokemon.createdInDb?pokemon.Types[0].name:pokemon.types}height={pokemon.height}hp={pokemon.createdInDb?pokemon.healht:pokemon.hp}img={pokemon.createdInDb?pokemon.image:pokemon.img}/>
   </Link>
   )
 }):<img className={styles.pokeGift} src={giftPoke} alt="Image not found" />
}
</div>

<Paginado className={styles.paginado} gamesPerPage={postPerPage} totalGames={allPokemons?.length} paginate={paginate} />
 </div>

)}