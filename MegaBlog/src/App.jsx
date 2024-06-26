import React ,{ useState,useEffect } from 'react';
import {useDispatch} from 'react-redux';
import authService from './appwrite/auth';
import './App.css'
import {login,logout} from './store/authSlice';
import { Header,Footer,Loader } from './components';
import { Outlet } from 'react-router-dom';


function App() {
  //console.log(import.meta.env.VITE_APPWRITE_URL);
  const[loading,setLoading] = useState(true);
   const dispatch = useDispatch();

   useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {cd
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return loading ? (
    <div className='h-screen bg-black flex justify-center items-center'>
      <Loader/>
    </div>
  ): (
    <div className='bg-gray-100'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
