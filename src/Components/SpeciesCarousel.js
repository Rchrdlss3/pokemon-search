export default function SpecifesCarousel({fact}){
    return (
        <div style = {{
            width: '350px',
            flexShrink: 0,
            height: '100px',
            border: '1px solid',
            padding: '5px',
            margin: '10px',
            textAlign: 'center',
            alignContent: 'center',
            borderRadius: '10px',
            boxShadow: '1px 5px 5px'
        }}>
            {fact.flavor_text}
        </div>
    )
}