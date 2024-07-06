import Main from "./components/Main";
import { Route, Routes, NavLink, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import { useContext } from "react";
import { AuthContext } from "./context/auth";
import SinglePost from "./components/SinglePost";
import Error from './components/Error404'



export default function App() {
  const context = useContext(AuthContext)

  return (
    <div className="App">
      
      {!context.check && <NavLink to='/'></NavLink>}
      {context.check && <NavLink to='/Home'></NavLink>}
        <Routes>
        <Route path='/Singlepost/:id' element={<SinglePost/>}></Route>
          <Route path='/Error' element={<Error/>}></Route>
        
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/' element={context.check?<Navigate to='/home'/>:<Main/>}></Route>
          
        </Routes>
    </div>
  ); 




}


 