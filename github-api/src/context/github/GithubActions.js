
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL


// get search result
export const searchUsers = async(text) => {
    const params = new URLSearchParams({
        q: text
    })
    const res = await fetch(`${GITHUB_URL}/search/users?${params}`)
    const {items} = await res.json()
    
    return items
}

// get single user
export const getUser = async(login) => {

    const res = await fetch(`${GITHUB_URL}/users/${login}`)

    if(Response.stuatus === 404) {
        window.location = '/notfound'
    } else {
        const data = await res.json()
        
        return data
    }
}

// get user repos
export const getUserRepos = async(login) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10
    })

    const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`)
    
    const data = await res.json()
    return data
}

