import styles from './style.module.css'
import restAPI from '../../functions/restAPI'
import { useState, useEffect } from 'react'
import GenericTable from '../GenericTable'
import MinusButton from '../buttons/MinusButton'

function TaskList() {
  const [list, setList] = useState(null)

  useEffect(() => {
    restAPI('task/getAllTask').then((res) => {
      setList(res.rows)
    })
  }, [])

  function handleChange(index, key, value) {
      let copyList = [...list]
      copyList[index][key] = value;
      setList(copyList)
  }


  function handleDoubleClick(index) {
    let copyList = [...list]
    for (const item of copyList) {
      item.inInput = false;
    }
    copyList[index].inInput = true;
    console.log("fffffffffff",copyList);
      setList(copyList)
  }



  let columnArray = [
    { column: 'ID', key: 'taskid' },
    { column: 'Name', key: 'name_task', inInput: true },
    {
      column: 'Description',
      key: 'description',
      columnStyle: { color: 'gray' },
     inInput: true 
    },
    { column: 'Level', key: 'priority_level' ,inInput: true },
    { column: 'Active', key: 'active' ,inInput: true },
    { column: '', key: 'icon' },
  ]
  // {  
  return (
    <div className="Homepage">
      <GenericTable
        dataFields={columnArray}
        tableData={list}
        handleChange={handleChange}
        genericStyleRow={(func , index)=>func(index)}
        handleDoubleClick={handleDoubleClick}
        styleConditionw={(item, value) => {
          return {color: item['priority_level'] === 1
            ?  'red' 
            : item['priority_level'] === 2
            ? 'yellow' 
            : item['priority_level'] === 3
            ? 'green' 
            : {}
             , width: value ? value.length + 'ch' : ""}}}
        icon={(data, indexRow) => (
          <MinusButton
            onClick={() => {
              restAPI('task/deleteTask', 'DELETE', { id: data.taskid })
                .then((res) => {
                  console.log('delete is Task', data.taskid)
                  let copyList = [...list]
                  copyList.splice(indexRow, 1)
                  setList(copyList)
                })
                .catch((err) => console.log(err))
            }}
          />
        )}
      />
    </div>
  )
}
export default TaskList
