import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchActions } from "../Store/fetchStatus"
import { itemsActions } from "../Store/itemsSlice"

function FetchItems() {

 const fetchStatus =  useSelector(store=>store.fetchStatus)
 const items = useSelector(store=>store.items)

 const dispath = useDispatch()

 useEffect(()=>{
 
  if(fetchStatus.fetchDone) return;
  const constructor = new AbortController;
  const signal = constructor.signal;


  fetch("http://localhost:8080/items",{signal})
  .then((res)=>res.json())
  .then((data)=>{
    dispath(itemsActions.addingInitialstate(data.items[0])) 
    dispath(fetchActions.markFetchDone()) 
  });

  return ()=>{
    constructor.abort();
  }

 },[fetchStatus])
  return (
   <></>
  )
}

export default FetchItems
