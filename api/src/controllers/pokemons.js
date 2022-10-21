const axios = require("axios");
const { Pokemon, Types } = require("../db");
const db = require("../db");

const getApiInfo = new Promise((resolve, reject) => {
  try {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => {
        const promises = response.data.results.map((p) => axios.get(p.url));
        return promises;
      })
      .then((response) => {
        const poke = axios.all(response);
        return poke;
      })
      .then((poke) => {
        const pokemon = poke.map((p) => {
          return {
            id: p.data.id,
            name: p.data.name,
            height: p.data.height,
            hp: p.data.stats[0].base_stat,
            attack: p.data.stats[1].base_stat,
            defense: p.data.stats[2].base_stat,
            speed: p.data.stats[5].base_stat,
            weight: p.data.weight,
            types: p.data.types.map((e) => e.type.name),
            img: p.data.sprites.versions["generation-v"]["black-white"].animated
              .front_default,
            backImg:
              p.data.sprites.versions["generation-v"]["black-white"].animated
                .back_default,
          };
        });
        return pokemon;
      })
      .then((data) => {
        resolve(data);
      });
  } catch (error) {
    console.log(error);
  }
});

const getDbInfo = async () => {
  return await Pokemon.findAll({
    include: {
      model: Types,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllInfo = async () => {
  const getApi = await getApiInfo;
  const dbInfo = await getDbInfo();
  const allInfo = getApi.concat(dbInfo);
  return allInfo;
};

const getTypes = async () => {
  try {
    const infoTypes = await axios.get("https://pokeapi.co/api/v2/type");
    const typesFilter = infoTypes.data.results.map((type) => {
      return {
        name: type.name,
      };
    });
    const typesMap=typesFilter.map(type=>type.name)
    console.log(typesMap)
    typesMap.forEach(async (type)=>{await Types.findOrCreate({where: {name: type}})});
    const fullTypesDb=await Types.findAll()
    return fullTypesDb
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  rutaPokemons: async (req, res) => {
    const name = req.query.name;
    try {
      const infoApi = await getAllInfo();
      if (name) {
        const filterPokemonByName = infoApi.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(name.toLowerCase())
        );
        filterPokemonByName.length
          ? res.status(200).send(filterPokemonByName[0])
          : res.status(404).send("No se encontro este Pokemon,lo siento");
      } else {
        res.status(200).send(infoApi);
      }
    } catch (error) {
      res.send(error.message);
    }
  },
  getAllTypes: async (req, res) => {
    try {
      await getTypes()
      const types = await Types.findAll()
      res.status(200).send(types);
    } catch (error) {
      console.log(error);
    }
  },
  rutaPokemonsId: async (req, res) => {
    const id = req.params.id;
    try {
      const fullInfo = await getAllInfo();
      if (id) {
        const pokemonIdFilter = fullInfo.filter((pokemon) => pokemon.id == id);
        pokemonIdFilter.length
          ? res.status(200).send(pokemonIdFilter[0])
          : res.status(404).send("No se encontro un pokemon con este ID");
      } else {
        res.status(200).send(fullInfo);
      }
    } catch (error) {
      res.status(404).send(error.message)
      console.log(error);
    }
  },

postPokemon:async(req,res)=>{
  const{name,image,healht,attack,type,defense,weight,height,createdInDb}=req.body
  let createPokemon=await Pokemon.create({
 name:name,
image:image,
healht:healht,
attack:attack,
defense:defense,
weight:weight,
height:height,
createdInDb:true
  })
typeDb=await Types.findAll({
  where:{name:type}  
  })
 await createPokemon.addTypes(typeDb)//Aca lo que hacemos es agregarle el Type del pokemon.
  res.send('Pokemon creado con exito')

}

};
