import React from 'react'

const RemoteComponent = () => {
  return (
    <div>
        <h1>RemoteComponents</h1>
        <RemoteComponent2 />
        </div>
  )
}
function RemoteComponent2(){
    return <h3>I am Even More Remote</h3>
}

export default RemoteComponent