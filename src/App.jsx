import React, { Fragment } from "react"

const App = () => {
  return (
    <Fragment>
      <div className='flex'>
        <div className='flex-none w-14 h-14'>01</div>
        <div className='flex-initial w-64'>02</div>
        <div className='flex-initial w-32'>03</div>
      </div>
    </Fragment>
  )
}

export default App
