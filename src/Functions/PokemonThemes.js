export const appStyle = () => {
    return {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export const pokeDisplayStyle = (hexColor) => {
    return {
        alignItems: 'center',
        justiftyItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        background: `linear-gradient(0deg,#fff,${hexColor})`,
        height: '650px',
        tranisition: '2s'
    }
}

export const pokeInputStyle = () => {
    return {
        opacity: '50%',
        border: '1px solid',
        borderRadius: '5px',
        width: '300px',
        height: '30px'   
    }
}

export const buttonStyle = () => {
    return {
        height: '30px',
        borderRadius: '5px',
        opacity: '50%',
        border: '1px solid'
    }
}