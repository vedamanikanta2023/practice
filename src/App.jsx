import './App.css'
import { UserDetails } from './UserDetails'
import { Sample } from './Sample'
import Alert from './Alert'
import { MetaData } from './MetaData'

function App() {
  return (
    <>
    <MetaData />
      <Alert type="success" message={"Your payment is successful"} />
      {/* <UserDetails />    */}
      <Sample /> 
    </>
  )
}

export default App
