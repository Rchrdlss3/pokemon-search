export default function PokemonNameComponent({name}){
    return (
        <div>
            <h1 style = {{
                fontSize: '5em'
            }}>{name.charAt(0).toUpperCase()}{name.slice(1)}</h1>
        </div>
    )
}