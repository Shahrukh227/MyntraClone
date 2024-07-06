import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Bag from "../src/Compoents/Bag.jsx"
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Home from "../src/routes/Home.jsx"
import {Provider} from "react-redux"
import itemsStore from './Store/index.js'

const router = createBrowserRouter([{
  path:"/",element:<App/>,children:[{
    path:"/" ,element:<Home/>
  },{
    path:"/bag",element:<Bag/>
  }]
}])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={itemsStore}>
   <RouterProvider router={router}/>
   </Provider>
  </React.StrictMode>,
)
