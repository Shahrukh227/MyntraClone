import { Outlet } from "react-router-dom"
import Footer from "../Compoents/Footer"
import Header from "../Compoents/Header"
import FetchItems from "../Compoents/FetchItems"
import { useSelector } from "react-redux"
import Loading from "../Compoents/Loading"



function App() {
 
  const fetchStatus = useSelector(store=>store.fetchStatus)
console.log(fetchStatus.fetchDone)
  return (
    <>
    <Header/>
    <FetchItems/>
    {/* {!fetchStatus.fetchDone  ? <Loading/> : } */}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
