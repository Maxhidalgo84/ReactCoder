const MiComponente = ({ stock, funcion }) => {

    const [count, setCount] = useState(0);
    const [numero, setnumero] = useState(0)

    useEffect(() => {
        setnumero(numero+1);
    }, [count]);


    const sumar = () => {
        setContador(count + 1);
    }

    const restar = () => {
        setContador(count - 1);
    }

    const reset = () => {
        setContador(0);
        funcion(count);
    }

    return (
        <>
            <div>MiComponente</div>
            <h1>{count}</h1>
            <button onClick={sumar}>sumar</button>
            <button onClick={restar}>restar</button>
            <button onClick={reset}>agregar al carrito</button>
            
        </>
    )
}

export default MiComponente