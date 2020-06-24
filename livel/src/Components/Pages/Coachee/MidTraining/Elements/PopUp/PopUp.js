import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './PopUp.css'

export default function PopUp() {
    
// NOTA DADA PELO USUARIO DE ACORDO COM QUAL ESTRELA ELE CLICA

    const [rate, setRate] = useState()
    const [path, setPath] = useState(()=>{
        return{
        star1path: '/images/star_gray.png',
        star2path: '/images/star_gray.png',
        star3path: '/images/star_gray.png',
        star4path: '/images/star_gray.png',
        star5path: '/images/star_gray.png',
    } 
});
    
//MUDA A IMAGEM DA ESTRELA DE ACORDO COM O RATE
useEffect(()=>
    {
        if (rate == 0) {
            setPath({
                star1path: '/images/star_gray.png',
                star2path: '/images/star_gray.png',
                star3path: '/images/star_gray.png',
                star4path: '/images/star_gray.png',
                star5path: '/images/star_gray.png',
            })
        }
        else if (rate == 1) {
            setPath({
                star1path: '/images/star_full.png',
                star2path: '/images/star_gray.png',
                star3path: '/images/star_gray.png',
                star4path: '/images/star_gray.png',
                star5path: '/images/star_gray.png',
            })
        }
        else if (rate == 2) {
            setPath({
                star1path: '/images/star_full.png',
                star2path: '/images/star_full.png',
                star3path: '/images/star_gray.png',
                star4path: '/images/star_gray.png',
                star5path: '/images/star_gray.png',
            })
        }
        else if (rate == 3) {
            setPath({
                star1path: '/images/star_full.png',
                star2path: '/images/star_full.png',
                star3path: '/images/star_full.png',
                star4path: '/images/star_gray.png',
                star5path: '/images/star_gray.png',
            })
        }
        else if (rate == 4) {
            setPath({
                star1path: '/images/star_full.png',
                star2path: '/images/star_full.png',
                star3path: '/images/star_full.png',
                star4path: '/images/star_full.png',
                star5path: '/images/star_gray.png',
            })
        }
        else if (rate == 5) {
            setPath({
                star1path: '/images/star_full.png',
                star2path: '/images/star_full.png',
                star3path: '/images/star_full.png',
                star4path: '/images/star_full.png',
                star5path: '/images/star_full.png',
            })
        }
    },[rate]);

    return (
        <div className="Modal">
            <div className="ContainerModal">
                <div className="congratulations">
                    PARABÉNS
                    <a>TREINO FINALIZADO</a>
                </div>
                <div className="avaliation">
                    <a>AVALIE SEU TREINO</a>
                    <div className="stars">
                       <button className="img" onClick = {()=> setRate(1)}><img src={path.star1path} alt="star1" /></button>
                       <button className="img" onClick = {()=> setRate(2)}><img src={path.star2path} alt="star2" /></button>
                       <button className="img" onClick = {()=> setRate(3)}><img src={path.star3path} alt="star3" /></button>
                       <button className="img" onClick = {()=> setRate(4)}><img src={path.star4path} alt="star4" /></button>
                       <button className="img" onClick = {()=> setRate(5)}><img src={path.star5path} alt="star5" /></button>
                    </div>
                </div>
                <div className="buttons">
                <Link type="button" to="/trainingtypes" className="sendbutton">
                        <div>
                           ENVIAR
                </div>
                    </Link>
                    <button className="fbimg">
                        <img src={'./images/fbimg.png'} alt="fbimg" />
                    </button>
                </div>
            </div>
        </div>

    )
}