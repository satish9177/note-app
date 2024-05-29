import Pin from '../pin/Pin'
import { Provide } from '../context/context'
const Notes = () => {
  const {title,note,data,Note,Title,Add,Pinned,Archive,Delete}=Provide();
   console.log(data);
  return (
     <>
     <div className='w-11/12 mt-28 ml-52'>
     <div className='flex  justify-center p-8'>
        <div className='flex flex-col h-28 relative  border-2 border-black w-[350px]'>
          <input type='text' value={title} placeholder='enter title' className='outline-none' onChange={Title}/>
          <textarea value={note} placeholder='enter note' className=' h-screen outline-none' onChange={Note}></textarea>
          <button disabled={title.length===0} className='bottom-0 right-1 absolute bg-teal-300 rounded-3xl ' onClick={Add}>
          <span class="material-symbols-outlined"  >
           add
          </span>
          </button>
         </div>
         </div>
         <h1 className='text-slate-950 text-4xl pb-2'>Pinned</h1>
         <div className="flex flex-row gap-3 flex-wrap m-2">
         
           {  
            data?.length>0?data.filter((item,i) => { if(item.pinned===true && !item.isArchive && !item.del) return item }).map((item,i)=>{
               return <><Pin key={item.id} title={item.title} note={item.note} pinned={Pinned} id={item.id} archive={item.isArchive} del={item.del} isArchive={Archive} Del={Delete}/></>
            }):<></>   
           }
       
         </div>
         <h1 className='text-slate-950 text-4xl pb-2'>Other</h1>
         <div className="flex flex-row gap-2 flex-wrap m-2">
          
           {  
             data?.length>0?data.filter((item,i) => { if(item.pinned===false && !item.isArchive && !item.del) return item }).map((item,i)=>{
               return <><Pin key={item.id} title={item.title} note={item.note} pinned={Pinned} id={item.id} archive={item.isArchive} isArchive={Archive} del={item.del} Del={Delete}/></>
            }):<></>   
           }
       
         </div>
          
         </div>
         
         </>
  )
}

export default Notes