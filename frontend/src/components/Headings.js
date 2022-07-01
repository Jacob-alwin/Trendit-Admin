import React from 'react'

function Headings(props) {
  return (
    <div> 
        <h2 class="content-title">{props.heading}</h2>
        <hr/>
    </div>
  )
}

export default Headings