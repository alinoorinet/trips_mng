import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/counterSlice'
import {useFetchingTripsQuery} from "./api/trips";
import {
    RouterProvider
} from "react-router-dom";
import router from './router'
import Main from "./components/Main";
import Test from "./components/Test";

const loading = (
    <div className="d-flex justify-content-center align-items-center" style={{width:"100%", height:"100%", position:"absolute"}}>
        <div className="spinner-border text-dark" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);




export default function App() {
    // const {data, error, isFetching} = useFetchingTripsQuery();
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    // console.log("data:", data)
    // console.log("err:", error)

    return (
        /*<div>
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
        </div>*/
        /*<Router>
            <React.Suspense fallback={loading}>
                <Switch>
                    <Route exact path="/" name="Main" render={(props) => <Main {...props} />} />
                    <Route path="/test" name="dashboard" render={(props) => <Test {...props} />} />
                </Switch>
            </React.Suspense>
        </Router>*/
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    )
}
