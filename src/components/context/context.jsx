import React, { useReducer } from 'react'
import { createContext,useContext} from 'react'
import {v4 as uuid} from 'uuid'
const provider=createContext(null);
function Reducerfun(state,{type,payload}){
  switch(type){
    case 'Title': return {
      ...state,
      title:payload
    }
    case 'Note': return {
      ...state,
      note:payload
    }
    case 'Add': return {
      ...state,
      data:[...state.data,{title:state.title,note:state.note,pinned:false,isArchive:false,del:false,id:uuid()}]
    }
    case 'Clear': return {
      ...state,
      title:'',
      note:'',
      pin:false,
      isArchive:false,
      del:false
    }
    case 'PINNED': return {
      ...state,
      data:state.data.map((item)=>{
        if(payload===item.id) {
          return {
           ...item,
           pinned:!item.pinned
          }
        }else{
          return item;
        }
      })
     }
     case 'ARCHIVE': return {
       ...state,   
       data:state.data.map((item)=>{
        if(payload===item.id) {
          return {
           ...item,
           isArchive:!item.isArchive
          }
        }else{
          return item;
        }
      })
     }
     case 'DELETE': return {
      ...state,   
      data:state.data.map((item)=>{
       if(payload===item.id) {
         return {
          ...item,
          del:!item.del
         }
       }else{
         return item;
       }
     })
    }
    default: return state
  }
}
const intial={
  title:'',
  note:'',
  isArchive:false,
  pinned:false,
  del:false,
  data:[]
}

const ContextProvider = ({children}) => {
  const [{title,note,data},dispatch] = useReducer(Reducerfun,intial);
  
const Add=()=>{
  dispatch({
    type:"Add"
  })
   dispatch(
    {
      type:"Clear"
    }
   )
  } 
  const Title =(e)=>{
   dispatch(
    {
      type:"Title",
      payload:e.target.value
    }
   )
  }
  const Note=(e)=>{
  dispatch(
    {
      type:"Note",
      payload:e.target.value
    }
   )
  }
  const Pinned=(id)=>{
    // console.log(e);
    dispatch({
      type:"PINNED",
      payload:id
    })
  }
  const Archive=(id)=>{
    dispatch({
      type:"ARCHIVE",
      payload:id
    })
  }
  const Delete=(id)=>{
    dispatch({
      type:"DELETE",
      payload:id
    })
  }
  return (
    <provider.Provider value={{title,note,data,Note,Title,Add,Pinned,Archive,Delete}}>
     {children}
    </provider.Provider>
  )
} 
const Provide=()=> useContext(provider);
export  { ContextProvider,Provide}