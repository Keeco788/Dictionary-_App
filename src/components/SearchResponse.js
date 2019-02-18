import React, { Component } from 'react'

function SearchResponse(props) {
    if(props.data.length === 0){
      return <p>No data</p>
    } else {
      return(
          <div>
            <h2>Word: {props.data[0].hwi.hw}</h2>
            <h2>Classification: {props.data[0].fl}</h2>
            <h2>Definition</h2>
            <p>{props.data[0].shortdef[0]}</p>
          </div>
      )
    }

}
export default SearchResponse

