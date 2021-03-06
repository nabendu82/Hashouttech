import React from 'react'
import { buyEgg } from '../redux'
import { useDispatch, useSelector } from 'react-redux'

const HooksEggContainer = () => {
    const numOfEggs = useSelector(state => state.egg.numOfEggs);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Num of Hook Eggs - {numOfEggs}</h2>
            <button onClick={() => dispatch(buyEgg())}>Buy Egg</button>
        </div>
    )
}

export default HooksEggContainer
