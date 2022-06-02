import React from 'react';

const Body = ({ json }) => {
  
  
  return (
    <div>{JSON.stringify(json, null, 5)}</div>
  )
}

export default Body;