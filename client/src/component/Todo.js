import React, { useEffect, useState } from 'react'
import { create, getData, deleteById, update } from '../api/api'

function Todo() {

  const [task, settask] = useState('')
  const [taskList, settaskList] = useState([])

  const getTodo = async () => {
    var todolist = await getData()
    settaskList([...todolist.data])
  }

  useEffect(() => {
    getTodo()
  }, [task])


  const handleSubmit = async (e) => {
    e.preventDefault()
    create({ name: task })
    // settaskList([...taskList, { complete: false }])
    settask('')
    // settaskList([...getTodo])
  }

  const strike = (x) => {
    update(x.id, { complete: !x.complete })
    // settaskList(taskList.map((a) => a.task === x ? { ...a, complete: !a.complete } : a))
  }

  const deleteTask = (x) => {
    deleteById(x.id)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add New Task</h1>
        <input value={task} type='text' onChange={(e) => settask(e.target.value)} />
        <input type='submit' value={'Add Task'} />
      </form>
      {taskList.map((a, i) => {
        return <div key={i} className='show-text'>
          <span className='task-text' style={{ textDecoration: a.complete ? 'line-through' : 'none' }} onClick={() => strike(a)}>{a.name}</span>
          <button onClick={() => deleteTask(a)}>Delete</button>
        </div>
      })}
    </div>
  )
}

export default Todo