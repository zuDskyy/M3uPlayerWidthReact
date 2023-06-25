import "./styles/app.css";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/home/Home";
import M3uPlaylist from './m3u/M3uPlaylist'
import M3uPlayer from "./m3u/M3uPlayer";

function App() {

  return (
    <div className="App" >
   <Routes>

     <Route path='/'  element={<Home/>}/> 
     <Route path='/tv' element={<M3uPlaylist/>}>
     <Route path='channel/:id' element={<M3uPlayer/>}/>
      
     </Route>
    
    </Routes>
       
    </div>
  );
}

export default App;
