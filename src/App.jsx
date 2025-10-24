import './App.css'
import { UserDetails } from './UserDetails'
import { Sample } from './Sample'
import Alert from './Alert'
import { MetaData } from './MetaData'
import Component1 from './Components'

function App() {
  return (
    <>
    <Component1 />
    <MetaData />
      <Alert type="success" message={"Your payment is successful"} />
      {/* <UserDetails />    */}
      <Sample /> 
    </>
  )
}

export default App
