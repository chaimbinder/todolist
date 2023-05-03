import styles from './style.module.css'
import restAPI from '../../functions/restAPI'
import { useState, useEffect, useContext } from 'react'
import GenericTable from '../GtenericTable'
import MinusButton from '../buttons/MinusButton'
import DataContext from '../../context'
import { CiEdit } from "react-icons/ci";
import { BsTrash3 } from "react-icons/bs";
import TaskPopup from '../popups/TaskPopup'
import { getColorPriority } from '../../functions/tableFunction'
function TaskList() {
  
  const {list, setList , getTasks, setpopupComponent} =  useContext(DataContext)
  let [listChange, setListChange] = useState([])


  useEffect(() => {
    if(list){
      console.log("list = ",list);
    }
  }, [list])

  // useEffect(() => {
  //   if(listChange){
  //     console.log("listChange = ",listChange);
  //   }
  // }, [listChange])


  function handleDoubleClick(rowItem, index) {
    // console.log("indexRow = ",rowItem);
    // console.log("index = ",index);
    // console.log("list = ",list);
    // console.log("listindex = ",list[index]);
    	let copyList = [...list]
      setpopupComponent(<TaskPopup taskToEdit={rowItem} index={index} funcToDo={editTask}/>)
  }


  function editTask(Item , index) {
		restAPI("task", "PATCH" , Item)
			.then(() => {
				setpopupComponent(null);
				setList((e)=>{
					let copyList = [...e]
					copyList.splice(index,1, Item)
					return copyList
				})
			})
  }


  let columnArray = [
    { column: 'ID', key: 'taskid' },
    { column: 'Name', key: 'name_task' },
    { column: 'Description', key: 'description' },
    { column: 'Level', key: 'priority_level' },
    { column: '', key: 'active' },
    { column: '', key: 'icon' },
  ]


  let styleRowFunction = ()=>{}

  
  let styleConditionw = (item, value) => {
	return {
		color: getColorPriority(item['priority_level']), 
		width: value ? value.length + 'ch' : ""}
	}


  let getIcon = (data, indexRow)=>{
		return <MinusButton
		onClick={() => {
		  restAPI('task', 'DELETE', { id: data.taskid })
			 .then((res) => {
				console.log("res ",res);
				let copyList = [...list]
				console.log("1 = ",copyList);
				copyList.splice(indexRow, 1)
				console.log("2 = ",copyList);
				console.log("indexRow = ",indexRow);
				setList(copyList)
			 })
			 .catch((err) => console.log(err))
		}}
	 />
  }

  let getActive = (item , index)=>{
	// console.log(item.active);
	  return <input type='checkbox' checked={!item.active} onClick={(event)=>{
			let value = !event.target.checked;
			item.active = value

			restAPI('task', 'PATCH', item)
				.then(() => {
					let copyList = [...list]
					copyList[index].active = value
					setList(copyList)
				})
				.catch((err) => console.log(err))

	}}/>
  }


  // {  
  return (
    <div className="Homepage">
      <GenericTable
        styleRowFunction={styleRowFunction}
        columnData={columnArray}
        tableData={list}
        handleDoubleClick={handleDoubleClick}
        styleConditionw={styleConditionw}
        icon={getIcon}
        active={getActive}
      />
    </div>
  )
}
export default TaskList
