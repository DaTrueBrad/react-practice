import React from 'react'

export const Hello = () => {
  //! This is the JSX Version of spitting out code.
  // return (
  //   <div id='container' className='just-another-container'>
  //     <h1>Hello Brady, again.</h1>
  //   </div>
  // )
  //! This is the React version of spitting out code.
  return React.createElement('div', {id: 'container', className: 'just-another-container'}, <h1>Hello from React Code</h1>)

}