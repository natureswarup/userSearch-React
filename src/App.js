import React, { useState, useEffect } from 'react'

import './App.css'
import Header from './components/header'
import SearchBar from './components/searchBar'
import UserList from './components/userList'



function App() {
    const [users, setUsers] = useState([])
    const [userSearch, setUserSearch] = useState('')
    useEffect(()=>{

        fetch('https://api.github.com/users')
        .then(data=>data.json())
        .then(data => setUsers(data))
    }, [])

    let filteredUsers = users.filter((user)=>{
        return user.login.includes(userSearch)
    })

  return (
    <>
    <div className="App">
        <Header pageTitle='Github Users' />
        <SearchBar placeholder='Search Users' handleChange={(e)=>setUserSearch(e.target.value)} />
        <UserList filteredUsers={filteredUsers} />
    </div>

    </>
  )
}

export default App
