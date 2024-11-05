import React from 'react'
import './Main.css'

const MainPage = () => {

  const tasks = [{
    name: 'take a dog',
    index: 1,
  },
  {
    name: 'brush your teath',
    index: 2,
  }
]

  return (
    <div className='container'>
      <div className='header'>
          <h3>To Do</h3>
          <input type='text'></input>
        <br />
          <button>Add task +</button>
      </div>
      <div className='tasks'>
        <ul className='list'>
           {tasks.map((task)=>{return <li>{task.name}</li>})}
        </ul>
      </div>
    </div>
  )
}

export default MainPage