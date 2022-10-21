


const initialState = {
  pokemons: [],
  pokemonsfilter: [],
  types:[],
  details:[]
};

export default function rootReducer(state = initialState, { payload, type }) {
  switch (type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: payload,
        pokemonsfilter: payload,
      };

case 'GET_TYPES':
  return{
   ...state,
   types:payload
  }

    case "ORDER_POKEMON":
      let filtrados = [];
      if (payload === "Asc") {
        filtrados = state.pokemonsfilter.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          return 0;
        });
      }
      if(payload==='Desc'){
      filtrados=state.pokemonsfilter.sort((a,b)=>{
       if(a.name.toLowerCase()>b.name.toLowerCase()) return  -1
       if(a.name.toLowerCase()<b.name.toLowerCase()) return   1 
      })  
      }
      return{
      ...state,
      pokemonsfilter:filtrados  
      }
      case 'GET_FILTER':
        return{
         ...state 
        }

      case 'ORDER_TYPE':
        let types=state.pokemons?.filter((pokemon)=>pokemon.types?.includes(payload))
        console.log(state.types)
        return{
         ...state,
         pokemonsfilter:types 
        }

       case 'DATA_BASE':
        let pokes=state.pokemons
        let filtraditos=[]
        if(payload==='All')filtraditos=state.pokemons
        if(payload==='database'){filtraditos=state.pokemons.filter(pokemon=>pokemon?.createdInDb)}
        if(payload==='api'){filtraditos=state.pokemons.filter(pokemon=>!pokemon.hasOwnProperty("createdInDb"))}
return{
 ...state,
 pokemonsfilter:filtraditos 
}

case 'GET_POKEMON_BY_NAME':
  return{
    ...state,
    pokemonsfilter:[payload],
  }

  case 'POST_POKEMON':
  return{
   ...state 
  }


  case 'GET_DETAIL':
  return{
   ...state,
   details:payload 
  }

    default:
      return state;
  }
}
