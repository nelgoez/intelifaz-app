import './App.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers, removeUser } from './redux/actions/index'
import CreateUser from './components/CreateUser/CreateUser';
import ViewUsers from './components/ViewUsers/ViewUsers';
import UserDetails from './components/UserDetails/UserDetails'

function App() {

  const dispatch = useDispatch()
  const addUsers = (user) => dispatch(setUsers(user))
  const deleteUser = (user) => dispatch(removeUser(user))
  const [newUser, setNewUser] = useState({
    name:'',
    lastname:'',
    nickname:'',
    email:'',
    role:''
  });
  const [errors, setErrors] = useState({
    name:'',
    lastname:'',
    nickname:'',
    email:'',
    role:''
  })
  const [currentUser, setCurrentUser] = useState(null)
  const reduxUsers = useSelector(state => state.users);
  const [allUsers, setAllUsers] = useState(reduxUsers);
  const [createOpen, setCreateOpen] = useState(false)
  const [viewOpen, setViewOpen] = useState(true)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const users = JSON.parse(localStorage.getItem('users'))
  
  useEffect( ()=> {
    setAllUsers(reduxUsers)
  }, [reduxUsers]);

  useEffect(() => {
    if ( users.length ) users.forEach(u => addUsers(u));
  }, [users, addUsers])

  useEffect(() => {
    if ( allUsers.length ) localStorage.setItem('users', JSON.stringify(allUsers));
  }, [allUsers])


  return (
    <div className="App">
     <header className='App-header'>
       <nav className='tabs'>
         <button className='tab' onClick={()=>{setViewOpen(true); setCreateOpen(false); setDetailsOpen(false)}}>Usuarios</button>
         <button className='tab' onClick={()=>{setViewOpen(false); setCreateOpen(true); setDetailsOpen(false)}}>Agregar usuario</button>
       </nav>
     <video src="./dea10438c1728b0d5697e61f7aee4144.mp4"
      loop={true}
      autoPlay
      alt="the talented team of intelifaz"
      className="jss195">
      </video>
        {createOpen && <CreateUser
        newUser={newUser}
        setNewUser={setNewUser}
        addUsers={addUsers}
        setErrors={setErrors}
        errors={errors}
        allUsers={allUsers} />}
        {viewOpen && <ViewUsers
        users={allUsers}
        deleteUser={deleteUser}
        seeUser={setCurrentUser}
        setViewOpen={setViewOpen}
        setCreateOpen={setCreateOpen}
        setDetailsOpen={setDetailsOpen}/>}
        {detailsOpen && <UserDetails user={currentUser} />}
     </header>
    </div>
  );
}

export default App;
