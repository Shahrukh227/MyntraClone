import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name : "fetchStatus",
  initialState : {
fetchDone : false,
currentlyFetching : false
  },
  reducers: {
markFetchDone : (store,actions)=>{
  return store.fetchDone = true
},
markFetchingStarted : (store,actions)=>{
  return store.currentlyFetching = true
  },
  markFetchingDone : (store,actions)=>{
    return store.currentlyFetching = false
  }
}
})

export const fetchActions = fetchStatusSlice.actions;

export default fetchStatusSlice;
