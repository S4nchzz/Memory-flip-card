import React, {useState} from "react";

function Carta ({tipo}){
    const [isFlip, setFlip] = useState(false)
    const [cardImage, setCardImage] = useState("flipped.png");

    function flipaduqui(){
        if (isFlip === false){
            setCardImage(tipo);
            setFlip(!isFlip);
        } else {
            setCardImage("flipped.png");
            setFlip(!isFlip);
        }
    }

    return (
        <div className="carta">
            <img src={cardImage} onClick={flipaduqui} alt="imagen_carta"></img>
        </div>
    )
}
export default Carta; 