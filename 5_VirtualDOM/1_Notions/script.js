// import React from 'react'

function App() {
    const user = {
        firstname: 'Jim',
        lastname: 'Darby',
        dateOfBirth: '1985-10-23T00:00:00.000Z',
        job: 'Front-end Developper',
        children: [
            {
            firstname: 'Paul',
            age: 10
            },
            {
            firstname: 'Erin',
            age: 16
            }
        ]
    }
    
    return (
        <div className='App user-profile'>
            <h1>{user.firstname} {user.lastname}</h1>
            <h2>Born {new Date(user.dateOfBirth).toLocaleDateString()}</h2>
            <p>Working as a {user.job.toUpperCase()}</p>
            <p>{user.children.length} kids</p>
        </div>
    )
}
export default App;