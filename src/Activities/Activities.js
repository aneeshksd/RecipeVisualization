import React from 'react'
import response from './../../src/response.json';
import 'bootstrap/dist/css/bootstrap.css';
import './Activities.css'
export default function Activities() {
  return (
    <div className='App'>
    {response?.data?.recipe?.values[0]?.values[1]?.valueObj?.activities.map((i) => {
        return (
          <div className='left'>
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8595;</h1>
            <svg width="330" height="200">
              <rect
             x="0"
             y="0"
             width="330"
             height="200"
             stroke="#00FFFF"
             stroke-width="4px"
             fill="blue"
           />
              {/* <text x="20%" y="20%" fill="white">{i?.name}</text> */}
              <text x="50%" y="30%" dominant-baseline="middle" fill="white" text-anchor="middle">Type:{i.type}</text>
              <text x="50%" y="50%" dominant-baseline="middle" fill="white" text-anchor="middle">ActivityName:{i.name}</text>
              <text x="50%" y="70%" dominant-baseline="middle" fill="white" text-anchor="middle">Order{i._order}</text>
              {/* <text x="20%" y="60%" fill="white">{response.data.recipe.value}</text> */}
            </svg>
          </div>
        )

      })}

    </div>
  )
}
