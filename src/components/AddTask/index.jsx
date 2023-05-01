import styles from './style.module.css'
import restAPI from '../../functions/restAPI'
import axios from 'axios'
import React, { useRef } from "react";

function AddTask() {
 
    const name_task = useRef("");
    const description = useRef("");
    const priority_level = useRef("");
    const active = useRef("");
   
 

    async function inputAddTask(event) {
      event.preventDefault();
  
      axios
        .post("task/createTask", {
          name_task: name_task.current.value,
          description: description.current.value,
          priority_level: priority_level.current.value,
          active:active.current.value,
    
        })
        .then((data) => {
          console.log(data);
        });
    }

  return (
    <div className="Home">
      <h1>home</h1>
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
            <input
              type="text"
              className="form-control mt-1"
              placeholder="חשיבות"
              ref={priority_level}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>נעשה</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="נעשה"
              ref={active}
              required
            />
          </div>
          <br />
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
