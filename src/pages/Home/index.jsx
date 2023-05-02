import { useState } from 'react'
import AddTask from '../../components/AddTask'
import TaskList from '../../components/TaskList'
import PlusButton from '../../components/buttons/PlusButton'

function Home() {
  const [flagPlusButton, setFlagPlusButton] = useState(false)

  return (
    <div className="Home">
      {flagPlusButton && <AddTask bring_down={setFlagPlusButton}/>}
      <PlusButton
        onClick={() => {
          setFlagPlusButton(true)
        }}
      />
      <TaskList />
    </div>
  )
}
export default Home
