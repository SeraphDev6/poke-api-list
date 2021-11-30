import react , {useState,useEffect} from "react";
import styles from './pokeCard.module.css';
import { Link } from "react-router-dom";
const PokeCard=(props)=>{
    const [imgUrl,setImgURL] = useState("");
    useEffect(()=>{getImage()})
    const getImage=()=>{
            fetch(props.url)
            .then(response=>{
                return response.json();
            }).then(response=>{
                setImgURL(response.sprites.front_default);
            }).catch(err=>{
                console.log(err);
            });
        }
    return(
        <Link to={"/pokemon/"+props.pokeNum}>
        <div className={styles.card} >
            <img src={imgUrl} alt={"image of "+props.pokeName} />
            <p>#{props.pokeNum}: {props.pokeName}</p>
        </div>
        </Link>
    )
}

export default PokeCard;