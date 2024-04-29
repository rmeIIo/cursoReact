const Challenge = () => {

    const num1 = 2
    const num2 = 3

    const soma = () => {
        console.log(num1 + num2)
    }

    return (
        <div>
            <h1>Temos os seguintes valores: {num1} e {num2}</h1>
            <button onClick={(soma)}>Clique aqui para somar</button>
        </div>
    )
}

export default Challenge