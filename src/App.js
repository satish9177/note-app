 import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Notes from './components/Notes/Notes';
import Sidebar from './components/Sidebar/Sidebar';
import Archive from './components/Archive/Archive';
import Bin from './components/Bin/Bin';
function App() {
  return (
   <> <Navbar/>
     
    <main className='flex'>
      <Sidebar/>
      <Routes>
       <Route path='/' element={ <Notes/>} />
       <Route path='/Archive' element={<Archive/>} /> 
        <Route path='/bin' element={<Bin/>}/>
       </Routes>
      </main>
       
      </>
  )
}

export default App;
