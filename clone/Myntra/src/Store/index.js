import {configureStore} from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatus";
import BagSlice from "./bagSlice";

const itemsStore = configureStore({
  reducer : {
    items : itemsSlice.reducer,
    fetchStatus : fetchStatusSlice.reducer,
    bag : BagSlice.reducer
  }
})



export default itemsStore