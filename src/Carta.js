import React, {useState} from "react";

function Carta ({tipo, comprobarElemento}){
    const [isFliped, setFlip] = useState(false)
    const [cardImage, setCardImage] = useState("card-back.png");

    function flipaduqui(e){
        if (isFliped === false){
            setCardImage(tipo);
            setFlip(!isFliped);
        } else {
            setCardImage("card-back.png");
            setFlip(!isFliped);
        }

        comprobarElemento({ ...e, cardImage: tipo });
    }

    return (
        <div className="carta">
            <img src={cardImage} onClick={(e) => flipaduqui(e)} alt="imagen_carta"></img>
            <h4>{tipo}</h4>
        </div>
    )
}
export default Carta;