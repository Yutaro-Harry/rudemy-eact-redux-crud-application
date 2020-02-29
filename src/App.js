import React, {Component} from 'react';

// class App extends Component {
//   render () {
//     // const greeting = "qwe"
//     // const dom =  <h1 className="foo">{greeting} Hello, world!</h1>
//     // return dom
//     return (
//       <React.Fragment>
//         <label htmlFor= "bar">bar</label>
//         <input type="text" onChange={() => {console.log("aaa")}}/>
//       </React.Fragment>
//     )
//   }
// }

const App =()=>{
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}
const Cat =()=>{
  return <div>Hi!</div>
}

export default App;