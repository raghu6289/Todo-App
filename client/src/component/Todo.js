import React, { useEffect, useState } from 'react'
import { create, getData, deleteById, update } from '../api/api'
import store from '../reducer/store'

function Todo() {

  const [task, settask] = useState('')
  const [taskList, settaskList] = useState([])

  const getTodo = async () => {
    let todolist = await getData()
    let finData = todolist.data
    settaskList(finData)
  }

  useEffect(() => {
    getTodo()
  }, [])

  useEffect(() => {
    updateState()
    store.subscribe(updateState)
  }, [])

  useEffect(() => {
    console.log(store.getState())
  })

  const updateState = () => {
    let state = store.getState()
    settaskList(state.taskReducer)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // await create({ task })
    store.dispatch({ type: 'addTask', payload: { task } })
    // settaskList([...taskList, { complete: false }])
    settask('')
    await getTodo()
  }

  const strike = async (x) => {
    await update(x.id, { complete: !x.complete })
    // store.dispatch({ type: 'delete', payload: a.complete })
    // settaskList(taskList.map((a) => a.task === x ? { ...a, complete: !a.complete } : a))
    await getTodo()
  }

  const deleteTask = async (x) => {
    await deleteById(x.id)
    await getTodo()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add New Task</h1>
        <input value={task} type='text' required={true} onChange={(e) => settask(e.target.value)} />
        <input type='submit' value='Add Task' />
      </form>
      {taskList.map((a, i) => {
        return <div key={i} className='show-text'>
          <span className='task-text' style={{ textDecoration: a.complete ? 'line-through' : 'none' }} onClick={() => strike(a)}>{a.task}</span>
          <button onClick={() => deleteTask(a)}>Delete</button>
        </div>
      })}
    </div>
  )
}

export default Todo