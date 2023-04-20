import React from 'react'
import { useDispatch} from 'react-redux'

const Home = () => {
    const dispatch = useDispatch();

    const addition = () => {
        dispatch({
            type:"increment"
        })
    }
    const subtraction = () => {
        dispatch({
            type: "decrement"
        })
    }

    const AddByNo = () => {
        dispatch({
            type: "incrementByValue",
            payload : 20
        })
    }

    return (
        <>
            <button onClick={addition}>increment</button>
            <button onClick={AddByNo}>increment by 20</button>
            <button onClick={subtraction}>decrement</button>
        </>
    )
}

export default Home