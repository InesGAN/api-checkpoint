import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";

function  App()  {
  const url = 'https://jsonplaceholder.typicode.com/users'

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url).then(json => setData(json.data))
  }, [])

  const renderTable = () => {
    return data.map(user => {
      return (
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.address.street}</td>
          <td>{user.address.suite}</td>
          <td>{user.address.zipcode}</td>
          <td>{user.address.geo.lat}</td>
          <td>{user.address.geo.lng}</td>
          <td>{user.company.name}</td>
          <td>{user.company.catchPhrase}</td> 
          <td> </td>
        </tr>
      )
    })
  }

  return (
    <div className="container">
      <div id="title" className="title">
        <h1 className="titletwo">API Table</h1>
      </div>
      <table id="users"> 
        <thead>
          <tr className="lignone">
            <th>Name</th>
            <th>Email</th>
            <th>Address Street</th>
            <th>Address Suite</th>
            <th>Address zipcode</th>
            <th>Address Geo lat</th>
            <th>Address Geo lng</th>
            <th>Company Name</th>
            <th>Company catchPhrase</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  )
}

export default App;
