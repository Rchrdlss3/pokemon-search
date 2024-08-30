export default function InfoCardComponent({pokeInformation}) {

    return (
        <div style = {{
            width:'200px',
            height:'100px',
            borderStyle: 'none solid none solid',
            borderWidth: '1px',
            borderColor: '#00000050',
            textAlign: 'center'
        }}>
            <h3>{pokeInformation.name}</h3>
            <p>{pokeInformation.stat}</p>  
            {pokeInformation.stats ? <ul>
                {pokeInformation.stats.map(stat => <li style= {{listStyleType: 'none'}}>{stat.ability.name}</li>)}
            </ul> : null}
        </div>
    )
}