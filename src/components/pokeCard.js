import react , {useState,useEffect} from "react";
import styles from './pokeCard.module.css';
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
        <div className={styles.card} >
            <img src={imgUrl} alt={"image of "+props.pokeName} />
            <p>{props.pokeName}</p>
        </div>
    )
}

export default PokeCard;