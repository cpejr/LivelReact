import React, {useState, useEffect} from 'react'

function partStyle(style_top, style_left){
    return {
        position: 'absolute',
        top: style_top,
        left: style_left,
        transform: 'translate(-50%, -50%)',
    }
}

export default function InterativeBody(){

    const [reload, setReload] = useState(true)

    const [parts, setParts] = useState([
        {
            part_name: 'cabeca',
            top: '4%',
            left: '50%',
            selected: false
        },
        {
            part_name: 'pescoco',
            top: '13%',
            left: '50%',
            selected: false
        },
        {
            part_name: 'coluna',
            top: '33%',
            left: '50%',
            selected: false
        },
        {
            part_name: 'cotovelo_direito',
            top: '35%',
            left: '13%',
            selected: false
        },
        {
            part_name: 'cotovelo_esquerdo',
            top: '35%',
            left: '88%',
            selected: false
        },
        {
            part_name: 'joelho_direito',
            top: '71%',
            left: '33%',
            selected: false
        },
        {
            part_name: 'joelho_esquerdo',
            top: '71%',
            left: '66%',
            selected: false
        },
        {
            part_name: 'mao_direita',
            top: '54%',
            left: '6%',
            selected: false
        },
        {
            part_name: 'mao_esquerda',
            top: '54%',
            left: '95%',
            selected: false
        },
        {
            part_name: 'ombro_direito',
            top: '20%',
            left: '24%',
            selected: false
        },
        {
            part_name: 'ombro_esquerdo',
            top: '20%',
            left: '77%',
            selected: false
        },
        {
            part_name: 'punho_direito',
            top: '48%',
            left: '6%',
            selected: false
        },
        {
            part_name: 'punho_esquerdo',
            top: '48%',
            left: '95%'
        },
        {
            part_name: 'quadril',
            top: '51%',
            left: '50%',
            selected: false
        },
        {
            part_name: 'tornozelo_direito',
            top: '91%',
            left: '35%',
            selected: false
        },
        {
            part_name: 'tornozelo_esquerdo',
            top: '91%',
            left: '65%',
            selected: false
        },
    ]);

    function handleSelect(index){
        let tempParts = parts
        tempParts[index].selected = !tempParts[index].selected
        setParts(tempParts)
        setReload(!reload)
    }
    
    return (
        <div style={{position: 'relative'}}>
            <img src='/images/body/body.png' alt='body' style={{height: '100%', width: 'auto'}}/>
            {
                reload ? 
                parts.map((part, index)=>{
                    return (
                        <div key={index}>
                            {part.selected ? 
                                <img src={`/images/body/${part.part_name}-dor.png`} alt={part.part_name} style={partStyle(part.top, part.left)} onClick={()=>handleSelect(index)}/>
                                :
                                <img src={`/images/body/${part.part_name}.png`} alt={part.part_name} style={partStyle(part.top, part.left)} onClick={()=>handleSelect(index)}/> }
                        </div>
                    )
                    
                })

                :

                parts.map((part, index)=>{
                    return (
                        <div key={index}>
                            {part.selected ? 
                                <img src={`/images/body/${part.part_name}-dor.png`} alt={part.part_name} style={partStyle(part.top, part.left)} onClick={()=>handleSelect(index)}/>
                                :
                                <img src={`/images/body/${part.part_name}.png`} alt={part.part_name} style={partStyle(part.top, part.left)} onClick={()=>handleSelect(index)}/> }
                        </div>
                    )
                    
                })
            }
        </div>
    )
}