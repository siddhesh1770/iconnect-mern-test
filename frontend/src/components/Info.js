import React from 'react'

const Info = () => {
  return (
    <div className="info">
        <h2>Hello, these are list of companies</h2>
        <ul>
            <li>Double click on any item to update it in DB</li>
            <li>Click on Add Company button to add new Company</li>
            <li>Try various actions on table like filter, sort, pagination</li>
            <li>Use Filters option to search throughout the data</li>
            <li>Check out source of project <a href='https://github.com/siddhesh1770/iconnect-mern-test'>here</a></li>
            <li>Give 5 to 10 seconds to load data in table due to server goes sleep every 30 minutes of inactivity</li>
            <li>Data for companies pulled from random generator</li>
        </ul>
        <br></br>
    </div>
  )
}

export default Info
