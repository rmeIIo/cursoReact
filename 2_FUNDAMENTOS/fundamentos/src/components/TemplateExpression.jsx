const TemplateExpressions = () => {

    const name = 'Roger'
    const data = {
        age: 19,
        job: 'Programmer',
    };

    return (
        <>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{4 + 4}</p>
        </>
    )
}

export default TemplateExpressions