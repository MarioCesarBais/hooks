import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if (n , 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}
// Ex 02
function calcPar(num) {
    const n = parseInt(num)
    if (n % 2 === 0) return 'PAR'
    else return 'ÍMPAR'
}
// Ex 01
const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [ehPar, setEhPar] = useState(1)

    useEffect(function() { setEhPar(calcPar(number)) }, [number])

    useEffect(function() { setFatorial(calcFatorial(number)) }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!" />
            <SectionTitle title='Exercício #01'></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{ fatorial === -1 ? "Não existe!" : fatorial }</span>
                </div>
                <input clasname='input' type="number" value={number}
                    onChange={ e => setNumber(e.target.value) } />
            </div>
            <SectionTitle title='Exercício #02' />
                <div className="center">
                    <div>
                        <span className="text">Status:</span>
                        <span className="text red">{ ehPar }</span>
                    </div>
                </div>
        </div>
    )
}

export default UseEffect
