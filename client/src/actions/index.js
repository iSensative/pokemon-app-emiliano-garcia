import axios from 'axios'


export function getPokemons(){
  return async function(dispatch){
let json=axios.get('https://pokemon-app-emiliano-garcia-production.up.railway.app/pokemons')
return dispatch({
 type:'GET_POKEMONS',
 payload:(await json).data,
})
  } 
}
export function getTypes(){
 return async function(dispatch){
 let jsontypes=axios.get('https://pokemon-app-emiliano-garcia-production.up.railway.app/types')
 return dispatch({
 type:'GET_TYPES',
 payload:(await jsontypes).data, 
 }) 
 } 
}

export function filterAlf(payload){
return async function(dispatch){
 return dispatch({
 type:'ORDER_POKEMON',
 payload:payload 
 }) 
}
}

export function getFilter(){
 return{
 type:'GET_FILTER', 
 }
}


export function filterTypes(payload){
return async function(dispatch){
return dispatch({
type:'ORDER_TYPE',
payload:payload  
})  
}  
}


export function getPokemonsbyName(name){
return async function(dispatch){
try {
let json =axios.get(`https://pokemon-app-emiliano-garcia-production.up.railway.app/pokemons?name=${name}`)
return dispatch({
 type:'GET_POKEMON_BY_NAME',
 payload:(await json).data,
})  
} catch (error) {
console.log(error.message)
}
}
}


export function dataBase(payload){
return async function(dispatch){
return dispatch({
 type:'DATA_BASE',
 payload:payload 
})  
}  
}

export function postPokemon(payload){
 return async function(dispatch){
 let pokemon=axios.post('https://pokemon-app-emiliano-garcia-production.up.railway.app/postpokemon',payload)
 return dispatch({
 type:'POST_POKEMON',
 payload:pokemon 
 }) 
 } 
}



export function getDetail(id){
return async function(dispatch){
let json=axios.get(`https://pokemon-app-emiliano-garcia-production.up.railway.app/pokemon/${id}`)
if(!id){
  return dispatch({
  type:'GET_DETAILS',
  payload:[] 
  }) 
 }
return dispatch({
 type:'GET_DETAIL',
 payload:(await json).data,
})  
}
}


export function resetDetails(){
return{
 type:'RESET_DETAILS', 
}
}