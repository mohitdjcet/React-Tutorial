import User from './User.jsx';

function App() {
  return(
    <div>
      <h1>Welcome to React {abc()}</h1>
      <p>Mohit Decodes</p>
      <UserOne />
      <User />
    </div>
  )
}

const UserOne = () => {
  return(
    <div>
      <h1>User</h1>
      <p>Mohit Decodes One</p>
    </div>
  )
}

function abc(){
  return(
    <div>
      <h1>abc</h1>
      <p>Mohit Decodes Two</p>
    </div>
  )
}
export default App;