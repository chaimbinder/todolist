import styles from './style.module.css'
import React, { useContext, useEffect, useRef, useState } from "react";
import DataContext from '../../../context';
import restAPI from '../../../functions/restAPI';

function TaskPopup({taskToEdit , funcToDo, index}) {
  const {getTasks, setpopupComponent} =  useContext(DataContext)

   let [popupData, setPopupData] = useState({
      name_task: "",
      description: "",
      priority_level: "",
      active: true,
   })

	 useEffect(()=>{
		 if(taskToEdit){
			setPopupData(taskToEdit)
		}
	 },[])

      function handlePopupData({name, value}) {
        let copyPopupData = {...popupData};
        copyPopupData[name] = value;
        setPopupData(copyPopupData)
      }


   


    // async function inputAddTask(event) {
    //   event.preventDefault();
    //       restAPI("task", "POST" , {
    //       name_task: name_task.current.value,
    //       description: description.current.value,
    //       priority_level: priority_level.current.value,
    //       active : false
    
    //     })
    //     .then((data) => {
    //       console.log(data);
    //       name_task.current.value = " "
    //       description.current.value = " "
    //       priority_level.current.value = " "
    //       setpopupComponent(null);
    //       getTasks()
    //     })
    // }

  return (
    <div className={styles.contaunerForm}>
      <form
        	className={styles.form}
        	onSubmit={(event) => {
          	event.preventDefault()
          	funcToDo(popupData, index);
        }}
      >
        <div className="Auth-form-content">
          <h2 className="Auth-form-title"> Enter a task</h2>
          <div className="form-group mt-3">
            <hr />
            {/* <label className={styles.label}>task name</label> */}

            <input
              type="text"
              name="name_task"
              value={popupData.name_task}
				  onChange={(event)=>{handlePopupData(event.target)}}
              className={styles.input}
              placeholder="task name"
              required
            />
          </div>
          <div className="form-group mt-3">
            {/* <label className={styles.label}>Description</label> */}
            <input
              type="text"
              name="description"
              value={popupData.description}
				  onChange={(event)=>{handlePopupData(event.target)}}
              className={styles.input}
              placeholder="Description"
              required
            />
          </div>
          <div className="form-group mt-3">
            {/* <label className={styles.label}>importance</label> */}
            <select
               name="priority_level"
            	value={popupData.priority_level}
              	className={styles.select}
					onChange={(event)=>{handlePopupData(event.target)}}
              	required
            >
              <option value="">Select Importance</option>
              <option value="1">high</option>
              <option value="2">medium</option>
              <option value="3">low</option>
            </select>
          </div>
          <div className={styles.submit}>
            <button type="submit" className={styles.button}>
               enter
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default TaskPopup
