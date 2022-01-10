import { useReducer } from 'react'
// import Content from './Content'

const initialState = {
  job: '',
  jobs: []
}
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const REMOVE_JOB = 'remove_job'

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload
  }
}
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload
  }
}
const removeJob = payload => {
  return {
    type: REMOVE_JOB,
    payload
  }
}
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      }
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      }
    case REMOVE_JOB:
      return {
        ...state,
        jobs: action.payload,
      }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { job, jobs } = state
  const handleJob = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
  }
  const handleDelete = (index) => {
    const newJobs = [...jobs]
    newJobs.splice(index, 1)
    dispatch(removeJob(newJobs))
  }
  return (
    <>
      <h1>Todo</h1>
      <input type="text"
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value))
        }}
        placeholder='Enter todo ...'
      />
      <button onClick={handleJob}>Add</button>
      <ul>
        {
          jobs.map((job, index) => {
            return (
              <li key={index}>{job} <span onClick={()=> handleDelete(index)}>&times;</span></li>
            )
          })
        }
      </ul>
    </>
  )
}

export default App;
