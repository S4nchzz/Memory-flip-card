import React, {useState} from "react";

function Carta ({tipo}){
    const [isFliped, setFlip] = useState(false)
    const [cardImage, setCardImage] = useState("card-back.png");

    function flipaduqui(){
        if (isFliped === false){
            setCardImage(tipo);
            setFlip(!isFliped);
        } else {
            setCardImage("card-back.png");
            setFlip(!isFliped);
        }
    }

    return (
        <div className="carta">
            <img src={cardImage} onClick={flipaduqui} alt="imagen_carta"></img>
        </div>
    )
}
export default Carta;