import styles from './style.module.css'
import restAPI from '../../functions/restAPI'
import React, { useRef } from "react";

function AddTask(props) {
 
    const name_task = useRef("");
    const description = useRef("");
    const priority_level = useRef("");
   
 

    async function inputAddTask(event) {
      event.preventDefault();
  
          restAPI("task/createTask", "POST" , {
          name_task: name_task.current.value,
          description: description.current.value,
          priority_level: priority_level.current.value,
          active : false
    
        })
        .then((data) => {
          console.log(data);
          name_task.current.value = " "
          description.current.value = " "
          priority_level.current.value = " "
          props.bring_down(false)
        });
    }

  return (
    <div className="AddTask">
      <form
        className="inputAddTask"
        onSubmit={(event) => {
          console.log(event);
          inputAddTask(event);
        }}
      >
        <div className="Auth-form-content">
          <h2 className="Auth-form-title">הכנס משימה</h2>
          <div className="form-group mt-3">
            <hr />
            <label>שם משימה</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="שם משימה"
              ref={name_task}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>תיאור</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="תיאור"
              ref={description}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>חשיבות</label>
            <select
              className="form-control mt-1"
              ref={priority_level}
              required
            >
              <option value="">בחר חשיבות</option>
              <option value="1">גבוהה</option>
              <option value="2">בינונית</option>
              <option value="3">נמוכה</option>
            </select>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
               הכנס
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default AddTask
