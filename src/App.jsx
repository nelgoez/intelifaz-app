import './App.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers, removeUser } from './redux/actions/index'
import CreateUser from './components/CreateUser/CreateUser';
import ViewUsers from './components/ViewUsers/ViewUsers';

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
  const reduxUsers = useSelector(state => state.users);
  const [allUsers, setAllUsers] = useState(reduxUsers);
  const [createOpen, setCreateOpen] = useState(false)
  const [viewOpen, setViewOpen] = useState(false)
  const [detailsOpen, setDetailsOpen] = useState(false)


  
  

  useEffect( ()=> {
    setAllUsers(reduxUsers)
    if(allUsers && allUsers.length) localStorage.setItem('users', JSON.stringify(allUsers))
  }, [reduxUsers, allUsers]);

  useEffect(() => {
    let users = localStorage.getItem('users')
    if (allUsers && allUsers.length === 0) users.length && JSON.parse(users).map(u=> addUsers(u))
    //eslint-disable-next-line
  }, [])

  return (
    <div className="App">
     <header className='App-header'>
       <nav>
         <button onClick={()=>{setViewOpen(true); setCreateOpen(false); setDetailsOpen(false)}}>Usuarios</button>
         <button onClick={()=>{setViewOpen(false); setCreateOpen(true); setDetailsOpen(false)}}>Agregar usuario</button>
       </nav>
     <video src="./dea10438c1728b0d5697e61f7aee4144.mp4"
      loop='true'
      autoPlay
      alt="the talented team of intelifaz"
      className="jss195">
      </video>
        {createOpen && <CreateUser
        newUser={newUser}
        setNewUser={setNewUser}
        addUsers={addUsers}
        setErrors={setErrors}
        errors={errors} />}
        {viewOpen && <ViewUsers
        users={allUsers}
        deleteUser={deleteUser}/>}
     </header>
    </div>
  );
}

export default App;
