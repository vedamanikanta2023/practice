import './App.css'
import { UserDetails } from './UserDetails'
import { Sample } from './Sample'
import Alert from './Alert'
import { MetaData } from './MetaData'
import Component1 from './Components'
import ImageViewer from './ImageViewer'
import Header from './Header'
import PositionDemo from './PositionDemo'
import { Timer } from './Timer'

const shoeCollections=[];
for(let i=0;i<100;i++){
  shoeCollections.push("mani");
}

function App() {
  try {
    console.log(yedava);
  } catch (error) {
    console.warn(`in catch block `, error);
  }
  return (
    <>
    <Timer />
    {/* <PositionDemo />
    <Header />
    <div className="gallery-grid">
      {shoeCollections.map((collection, index) => (
        <ImageViewer />
      ))}
    </div> */}
    {/* <ImageViewer /><ImageViewer /><ImageViewer /><ImageViewer /><ImageViewer /><ImageViewer /><ImageViewer /><ImageViewer /><ImageViewer /><ImageViewer /><ImageViewer /> */}
    {/* <ShoeStore /> */}
    {/* <Component1 /> */}
    {/* <MetaData /> */}
      {/* <Alert type="success" message={"Your payment is successful"} /> */}
      {/* <UserDetails />    */}
      {/* <Sample />  */}
    </>
  )
}

export default App
