const { Router } = require('express');
const { rutaPokemons, rutaPokemonsId, getAllTypes, postPokemon } = require('../controllers/pokemons');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/pokemons',rutaPokemons)
router.get('/pokemon/:id',rutaPokemonsId)
router.get('/types',getAllTypes)
router.post('/postpokemon',postPokemon)

module.exports = router;
