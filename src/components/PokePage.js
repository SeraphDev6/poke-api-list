import react, { useEffect, useState } from "react";
import {useParams} from "react-router"

const PokePage = ()=>{
    const {poke} = useParams();
    const [info,setInfo] = useState({});
    const capitalize = (str)=>{
        if (typeof str !== 'string') return ''
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        .then(res=>{return res.json()})
        .then(res=>{console.log(res);setInfo(res);})
        .catch(err=>{console.log(err)})
    },[])

    return (
    <div>
        {Object.keys(info).length>0?<>
        <h1>{capitalize(info.name)}</h1>
        <div style={{display:"flex",flexDirection:"row", justifyContent:"center"}}>
        <img src={info.sprites.front_default} alt={`Image of ${capitalize(info.name)}`} style={{width:"50vmin", height:"auto"}}/>
        <div>
        {info.stats.map(stat=>{
            return <p key={stat.stat.name}>{capitalize(stat.stat.name)} : {stat.base_stat}</p>
        })}
        </div>
        </div>
        <h3>{info.types.length>1?"Types:":"Type:"}</h3>
        <h5>{info.types.map(type=>capitalize(type.type.name)+" ")}</h5>
        {info.moves.length>0?
        <>
        <h3>Moves:</h3>
        <div style={{display:"grid",gridTemplateColumns:"repeat(5,20%)"}}>
            {info.moves.map(move=><p key={move.move.name} style={{margin:"5px", backgroundColor:"gray", borderRadius:"10px"}}>{capitalize(move.move.name)}</p>)}
        </div>
        </>:""
        }
        </>:<h1>Loading...</h1>}
    </div>
    )
}
export default PokePage;