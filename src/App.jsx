import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';
import Loader from './components/Loading.jsx';
import UserCard from './components/UserCard.jsx';
import Footer from './components/Footer.jsx';
import './App.css'


function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

    const fetchUsers = async() => {
      setLoading(true);
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
    <div className="flex flex-col min-h-screen" id='home'>
      <Navbar onClick={fetchUsers}/>
      <div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
      </div>

      {loading ? <Loader/> : <UserCard users={users} />}
      <Footer/>
    </div>
  );
}

export default App;

