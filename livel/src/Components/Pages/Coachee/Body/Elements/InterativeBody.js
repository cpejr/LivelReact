import React, {useState} from 'react'

function partStyle(style_top, style_left){
    return {
        position: 'absolute',
        top: style_top,
        left: style_left,
        transform: 'translate(-50%, -50%)',
    }
}

export default function InterativeBody(props){

    const [reload, setReload] = useState(true)

    const [parts, setParts] = useState([
        {
            displayName: 'CORAÇÃO',
            part_name: 'coracao',
            top: '24%',
            left: '61%',
            selected: false
        },
        {
            displayName: 'CABEÇA',
            part_name: 'cabeca',
            top: '4%',
            left: '50%',
            selected: false
        },
        {
            displayName: 'PESCOÇO',
            part_name: 'pescoco',
            top: '13%',
            left: '50%',
            selected: false
        },
        {
            displayName: 'COLUNA',
            part_name: 'coluna',
            top: '33%',
            left: '50%',
            selected: false
        },
        {
            displayName: 'COTOVELO DIREITO', 
            part_name: 'cotovelo_direito',
            top: '35%',
            left: '13%',
            selected: false
        },
        {
            displayName: 'COTOVELO ESQUERDO',
            part_name: 'cotovelo_esquerdo',
            top: '35%',
            left: '88%',
            selected: false
        },
        {
            displayName: 'JOELHO DIREITO',
            part_name: 'joelho_direito',
            top: '71%',
            left: '33%',
            selected: false
        },
        {
            displayName: 'JOELHO ESQUERDO',
            part_name: 'joelho_esquerdo',
            top: '71%',
            left: '66%',
            selected: false
        },
        {
            displayName: 'MÃO DIREITA',
            part_name: 'mao_direita',
            top: '54%',
            left: '6%',
            selected: false
        },
        {
            displayName: 'MÃO ESQUERDA',
            part_name: 'mao_esquerda',
            top: '54%',
            left: '95%',
            selected: false
        },
        {
            displayName: 'OMBRO DIREITO',
            part_name: 'ombro_direito',
            top: '20%',
            left: '24%',
            selected: false
        },
        {
            displayName: 'OMBRO ESQUERDO',
            part_name: 'ombro_esquerdo',
            top: '20%',
            left: '77%',
            selected: false
        },
        {
            displayName: 'PUNHO DIREITO',
            part_name: 'punho_direito',
            top: '48%',
            left: '6%',
            selected: false
        },
        {
            displayName: 'PUNHO ESQUERDO',
            part_name: 'punho_esquerdo',
            top: '48%',
            left: '95%'
        },
        {
            displayName: 'QUADRIL',
            part_name: 'quadril',
            top: '51%',
            left: '50%',
            selected: false
        },
        {
            displayName: 'TORNOZELO DIREITO',
            part_name: 'tornozelo_direito',
            top: '91%',
            left: '35%',
            selected: false
        },
        {
            displayName: 'TORNOZELO ESQUERDO',
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
        props.handleSelect(parts[index].displayName)
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