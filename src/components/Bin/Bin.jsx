import Pin from "../pin/Pin";
import { Provide } from "../context/context";
const Bin = () => {
  const {data,Pinned,Archive,Delete}=Provide();
  return (
    <> 
    <div className='flex flex-wrap mt-28 ml-48 gap-3'>
     { 
      // eslint-disable-next-line
     data?.length>0?data.filter((item,i) =>{ if(item.del) return item }).map((item,i)=>{
      return <Pin key={item.id} title={item.title} note={item.note} pinned={Pinned} id={item.id} archive={item.isArchive} isArchive={Archive} del={item.del} Del={Delete}/>
   }): <div>
      nothing in Bin
     </div>}
     </div>
     </>
  )
}

export default Bin