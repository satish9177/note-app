
const Pin = (props) => {
  //  console.log(props.Del)
  return (
    <>
      <div className="flex flex-col w-64 border-2 rounded-md border-black shadow hover:shadow-xl hover:scale-105 h-fit min-h-40 p-2 ">
        <div className="flex flex-row justify-between text-pretty border-b-2 border-b-stone-700 items-center">
          <p className=" break-words w-56">{props.title}</p>
         { (props.archive || props.del)?<></> :<button onClick={()=>{props.pinned(props.id)} } >
          <span class="material-symbols-outlined">keep</span></button>}
        </div>
        <div className="flex  flex-col">
          <p>{props.note}</p>
          <div className=" relative ">  
          <div className="flex  flex-row-reverse ">
          <button onClick={()=>{props.Del(props.id)} }><span class="material-symbols-outlined">delete</span></button>
           {  props.del?<></> :<button className=" cursor-pointer" onClick={()=>{props.isArchive(props.id)} }><span class="material-symbols-outlined">archive</span></button>}
           </div></div>
        </div>
      </div>
    </>
  );
};

export default Pin;
