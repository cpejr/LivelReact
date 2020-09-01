import React, { useRef, useState, useEffect } from 'react';

import './Swipe.css'
import { FaLastfmSquare } from 'react-icons/fa';

function Swipe(props){

    const children = useRef();
    
    const [stylesConteudo, setStylesConteudo] = useState({backgroundColor: props.backgroundColor});
    
    const [stylesBotoes, setStylesBotoes] = useState({});

    function handleRef(node){

        if(!children.current && !stylesBotoes.height){
            const height = node.offsetHeight;
            console.log(height);
            setStylesBotoes({height: `${height}px`})
        }
        return children.current = node;
    }

    const [dragging, setDragging] = useState(false);

    const [draggingData, setDraggingData] = useState({dragging: false});

    function onMouseUp(e){
        console.log('TOUCH end');
        setDragging(false);
    }
    function onMouseDown(e){
        console.log('TOUCH START');
        setDraggingData({
            dragging: true,
            
        });
    }
    function onMouseMove(e){
        if(dragging){
            setStylesConteudo({
                ...stylesConteudo,
                left
            });
        }
        console.log('MOUSE MOVEU');
    }

    return ( 
        <div className="swipeContainer">
            <div className="conteudo" ref={handleRef} style={stylesConteudo} 
            onMouseDown={onMouseDown} 
            onMouseUp={onMouseUp} 
            onMouseMove={onMouseMove} 
            onTouchStart={onMouseDown} 
            onTouchEnd={onMouseUp} 
            onTouchMove={onMouseMove}
        >
                {props.children}
            </div>
            <div className="botoes" style={stylesBotoes}>
                <button >
                    BOTAO 01
                    {/* <img src='/images/Logo_Livel.png' alt="Logo do Livel"/> */}
                </button>
                <button>
                    BOTAO 02
                    {/* <img src='/images/Logo_Livel.png' alt="Logo do Livel"/> */}
                </button>
                
            </div>
        </div>
    )
}

// Swipe.PropsTypes = { 
//     backgroundColor: React.PropsTypes.string,
// };
export default Swipe;