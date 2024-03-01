import React, { useState, useEffect } from 'react';
import { GiEvilWings } from "react-icons/gi";

import axios from 'axios';
import Navbar from './components/Navbar.jsx';
import Loader from './components/Loading.jsx';
import UserCard from './components/UserCard.jsx';
import Footer from './components/Footer.jsx';
import './App.css'


function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(true)

  useEffect(() => {
    setLoading(true);
    setLoad(false)
    setTimeout(() => {
      setLoading(false);
      setLoad(true)
    }, 1000)
  }, [])

    const fetchUsers = async() => {
      setLoading(true);
      setLoad(false)
      try {
        const response = await axios.get('https://reqres.in/api/users?page=1');
        setUsers(response.data.data);
        setLoading(false);
        
      } catch (error) {
        setLoading(false)
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };
   

  return (
    <div className="flex flex-col min-h-screen" id='/'>
      <Navbar onClick={fetchUsers}/>
      <div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
      </div>
     {load ? (<div className="flex flex-col items-center justify-center gap-4 py-2 m-12">
                  <h1 className="text-4xl font-bold text-navy-800 flex items-center justify-center"><i>Welcome <span className='flex items-center justify-center text-6xl hover:text-white'><GiEvilWings /></span></i></h1>
                  <p className="text-2xl text-dark-900 hover:text-dark-700 font-bold">Tame your work, organize your life</p>
                  <p className="text-slate-800 flex items-center justify-center">This web application contain only dummy data. That you can use for the testing purpose only this is not usefull information</p>
       </div>) : ""} 
      {loading ? <Loader/> : <UserCard users={users} />}
       
      <Footer/>
    </div>
  );
}

export default App;

