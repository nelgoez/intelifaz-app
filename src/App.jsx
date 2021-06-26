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
    name: '',
    lastname: '',
    nickname: '',
    email: '',
    phone:'',
    role: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    lastname: '',
    nickname: '',
    email: '',
    phone: '',
    role: ''
  })
  const [currentUser, setCurrentUser] = useState(null)
  const reduxUsers = useSelector(state => state.users);
  const [allUsers, setAllUsers] = useState(reduxUsers);
  const [createOpen, setCreateOpen] = useState(false)
  const [viewOpen, setViewOpen] = useState(true)
  const [detailsOpen, setDetailsOpen] = useState(false)

  
  useEffect(() => {
    setAllUsers(reduxUsers);
  }, [reduxUsers]);
  


  return (
    <div className="App">
      <header className='App-header'>
        <nav className='tabs'>
          <button className={viewOpen ? 'tab-selected' : 'tab'} onClick={() => { setViewOpen(true); setCreateOpen(false); setDetailsOpen(false) }}>Usuarios</button>
          <button className={createOpen ? 'tab-selected' : 'tab'} onClick={() => { setViewOpen(false); setCreateOpen(true); setDetailsOpen(false) }}>Agregar usuario</button>
        </nav>
        <video src="./dea10438c1728b0d5697e61f7aee4144.mp4"
          loop
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
          setDetailsOpen={setDetailsOpen} />}
        {detailsOpen && <UserDetails
          user={currentUser}
          setDetailsOpen={setDetailsOpen}
          setViewOpen={setViewOpen}
        />}
      </header>
    </div>
  );
}

export default App;
