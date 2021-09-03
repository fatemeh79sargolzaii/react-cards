import React from 'react'
import "../App.css"
const Tweet = ({name,massage}) => {
    return (
        <div className="tweet">
          <h3>{name}</h3>
          <p>{massage}  </p> 
          <h3>Number of Likes</h3> 
        </div>
    )
}

export default Tweet
