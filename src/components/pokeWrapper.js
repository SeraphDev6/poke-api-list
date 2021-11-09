import react,{useState, useEffect} from "react";
import PokeCard from "./pokeCard";
import styles from './pokeWrapper.module.css'
const PokeWrapper = () =>{
    const [pokemon,setPokemon]=useState([]);

    useEffect(()=>{
        // console.log(pokemon);
    },[pokemon])
    const getPokemon = ()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
        .then(response=>{
            return response.json();
        }).then(response=>{
            setPokemon(response.results);
        }).catch(err=>{
            console.log(err);
        });
    }

    return (
        <>
        <button onClick={getPokemon}>Fetch Pokemon</button>
        <div className={styles.grid}>
            {pokemon.map((poke,i)=>{
                return <PokeCard key={i} pokeName={poke.name} url={poke.url} />
            })}
        </div>
        </>
    )
}
export default PokeWrapper;