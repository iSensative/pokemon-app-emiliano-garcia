import React from "react";
import { useState, useEffect } from "react";
import { postPokemon } from "../../actions";
import { getTypes } from "../../actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./createpokemon.module.css";
import pokemon from '../../assets/pokemon1.svg'
import pokesaludo from '../../assets/pokemon.gif'
import baile from '../../assets/baile.gif'

export default function CreatePokemon() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  const [input, setInput] = useState({
    name: "",
    health: "",
    attack: "",
    defense: "",
    image: "",
    type: [],
  });

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  function handleChangue(e) {
    setInput({
      ...input, //Osea, guardamos todo lo que ya habia en el estado y ademas...
      [e.target.name]: e.target.value, //Segun el name del input se va a llenar el estado.
    });
  }

  function handleSelect(e) {
    setInput({
      ...input,
      type: [...input.type, e.target.value], //Esto nos va a servir para poder almacenar mas de un type de Pokemon
    });
  }

  function handlePost(e) {
    dispatch(postPokemon(input));
    alert("Personaje Creado creo..");
    setInput({
      name: "",
      healht: "",
      attack: "",
      defense: "",
      weight: "",
      height: "",
      image: "",
      type: [],
    });
  }

  function validateInput(input) {
    if (!input.name.toString().trim())return "Por favor llenar el input Name para seguir.";
    if(input.name.toString().trim().length<3)return 'Coloque un Nombre que supere los 3 digitos.'
    if (input.name.toString().trim() == "  ") return "No se permiten espacios.";
    if(!input.healht)return 'Llenar campo healht'
    if(!input.attack)return 'Llenar campo attack'
    if(!input.defense)return 'Llenar campo defense'
    if(!input.weight)return 'Llenar campo weight'
    if(!input.height)return 'Llenar campo height'
    if(input.type.length===0)return 'Elegir un type'
    if(input.tpye?.length<2)return 'Max 2 types'
    if(!input.healht?.match(/^[0-9]+$/))return 'No se permiten simbolos en healht'
    if (!input.attack?.match(/^[0-9]+$/)) return "No se permiten simbolos en ataque";
    if (!input.defense?.match(/^[0-9]+$/)) return "No se permiten simbolos EN DEFENSE";
    if (!input.weight?.match(/^[0-9]+$/)) return "No se permiten simbolos EN WEIhgt";
    if (!input.height?.match(/^[0-9]+$/)) return "No se permiten simbolos en heigth";
  }

  const errormessage = validateInput(input);

  return (
    <div className={styles.form}>
      <div className={styles.navbar}>
        <Link to={'/home'}>
          <button className={styles.boton2}>Home</button>
        </Link>
        <img src={pokemon} className={styles.imagen} alt="" />
      </div>
      <div className={styles.form2}>
        <h4 className={styles.title}>PokeCrear</h4>
        <form
          className={styles.formulario}
          onSubmit={(e) => handlePost(e)}
          action=""
        >
          <div>
            <input
              className={styles.input}
              onChange={(e) => handleChangue(e)}
              type="text"
              value={input.name}
              name="name"
              id=""
              placeholder="Name"
            />
          </div>
          <div>
            <input
              className={styles.input}
              onChange={(e) => handleChangue(e)}
              type="number"
              value={input.attack}
              name="attack"
              id=""
              placeholder="Attack"
            />
          </div>
          <div>
            <input
              className={styles.input}
              onChange={(e) => handleChangue(e)}
              type="number"
              value={input.healht}
              name="healht"
              id=""
              placeholder="Hp"
            />
          </div>
          <div>
            <input
              className={styles.input}
              onChange={(e) => handleChangue(e)}
              type="number"
              value={input.defense}
              name="defense"
              id=""
              placeholder="Defense"
            />
          </div>

          <div>
            <input
              className={styles.input}
              onChange={(e) => handleChangue(e)}
              type="text"
              value={input.image}
              name="image"
              id=""
              placeholder="Image"
            />
          </div>
          <div>
            <input
              className={styles.input}
              onChange={(e) => handleChangue(e)}
              type="number"
              value={input.weight}
              name="weight"
              id=""
              placeholder="weight"
            />
          </div>
          <div>
            <input
              className={styles.input}
              onChange={(e) => handleChangue(e)}
              type="number"
              value={input.height}
              name="height"
              id=""
              placeholder="height"
            />
          </div>
          <div>
            <select
              className={styles.select}
              onChange={(e) => handleSelect(e)}
              name=""
              id=""
            >
              {types.map((type) => (
                <option value={type.name}>{type.name}</option>
              ))}
            </select>
          </div>
          <p>{input.type.map((type) => type + ",")}</p>
          {!errormessage && (
            <div>
              <button className={styles.boton} type="submit">
                Create
              </button>
            </div>
          )}
        </form>
      </div>
      { errormessage && (
<div class={styles.carderrores}>{errormessage}</div>
)}
{
 <img src={pokesaludo} className={styles.saludo} alt="" />
}
{/* {
  <img src={baile} className={styles.baile} alt="" />
} */}
    </div>
  );
}
