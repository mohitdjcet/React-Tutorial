// function App() {
//   const name = "Mohit Decodes";
//   return(
//     <div>
//       <h1>Welcome to React {name}</h1>
//       <p>Mohit Decodes {1+2}</p>
//       <button onClick={()=>alert("Clicked")}>Click Me</button>
//     </div>
//   )
// }
// export default App;

import { createElement } from "react";

function App() {
  // return(
  //   <h1 className="txt">Welcome to Mohit</h1>
  // )
  //Convert above code without JSX
  return createElement(
    'h1',
    {className: 'txt'},
    'Welcome to Mohit'
  )
}
export default App;