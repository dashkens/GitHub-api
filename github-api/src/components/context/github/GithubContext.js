import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";


const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // get initial users (testing purposes)
    const fetchUsers = async() => {
        setLoading()

        const res = await fetch(`${GITHUB_URL}/users`)
        const data = await res.json()
        
        dispatch({
            type: 'GET_USERS',
            payload: data
        })
    }
    //set loading
    const setLoading = () => dispatch({type: 'SET_LOADING'})

    return <GithubContext.Provider 
        value={{
            users: state.users, 
            loading: state.loading, 
            fetchUsers}}
        >
        {children}
    </GithubContext.Provider>
}

export default GithubContext