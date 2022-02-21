import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco
    number: 0
}

function reducer(state, action) {
    switch(action.type) {
        case 'numberAdd2':
            return {...state, number: state.number + 2}
        case 'numberMulti7':
            return {...state, number: state.number * 7}
        case 'numberDivide25':
                return {...state, number: Math.round(state.number / 25)}
        case 'numberAddn':
            return {...state, number: state.number + action.number}
        case 'login':
            return {...state, user: {name: action.name}}
        default:
            return state
    }
        
}

const UseReducer = (props) => {
    const [state, dispatch] =useReducer(reducer, initialState)
    let number = 0
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!" />
            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem Usuário</span>
                }
                <span className="text">
                    {state.number}
                </span>
                <div>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'login', name: 'Maria' })}>Login</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberAdd2' })}>+2</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberMulti7' })}>x7</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberDivide25' })}>divide by 25</button>
                </div>
                <div>
                    <button className="btn btnn"
                        onClick={() => {
                            number = parseInt(document.querySelector('input').value)
                            dispatch({ type: 'numberAddn', number: number })}}>Choose a number to add:</button>
                    <input type="number" className="input" />
                </div>
            </div>
        </div>
    )
}

export default UseReducer
