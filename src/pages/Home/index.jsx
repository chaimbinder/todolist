import { useContext, useEffect, useState } from 'react'
import TaskPopup from '../../components/popups/TaskPopup/index'
import TaskList from '../../components/TaskList'
import AddTaskButton from '../../components/buttons/AddTaskButton'
import DataContext from '../../context/index'
import restAPI from '../../functions/restAPI'

function Home() {

	useEffect(() => {
		getTasks()
	 }, [])


	const { setpopupComponent, getTasks, setList } = useContext(DataContext)

	function inputAddTask(data) {
		restAPI("task", "POST" , data)
			.then((data) => {
				setpopupComponent(null);
				setList((e)=>{
					let copyList = [...e];
					copyList.push(data)
					return copyList;
				})
			})
	}


  return (
    <div className="Home">
      <AddTaskButton onClick={() => {setpopupComponent(<TaskPopup funcToDo={inputAddTask}/>)}}/>
      <TaskList />
    </div>
  )
}
export default Home
