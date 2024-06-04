import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/counterSlice'
import {useFetchingTripsQuery} from "./api/trips";

export default function App() {
    const {data, error, isFetching} = useFetchingTripsQuery();
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    console.log("data:", data)
    console.log("err:", error)

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}
