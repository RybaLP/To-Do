import { Route, Routes } from 'react-router-dom'

//// Routy do poszczegolnych stron 
import MainPage from './components/MainPage/MainPage'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Intro from './components/Intro/Intro'
import CreateTask from './components/CreateTask/CreateTask'

function App() {


  return (
    <>
      <Routes>
          <Route path='/' element={<Intro/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/home' element={<MainPage/>}></Route>
          <Route path='/edit/:id'></Route>
          <Route path='/create' element={<CreateTask/>} />
      </Routes>
    </>
  )
}

export default App
