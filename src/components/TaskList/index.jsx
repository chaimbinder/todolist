import styles from './style.module.css'
import restAPI from '../../functions/restAPI'
import { useState, useEffect } from 'react'
import GenericTable from '../genericTable'
import MinusButton from '../buttons/MinusButton'

function TaskList() {
  const [list, setList] = useState(null)

  useEffect(() => {
    restAPI('task/getAllTask').then((res) => {
      setList(res.rows)
    })
  }, [])

  let columnArray = [
    { column: 'ID', key: 'taskid' },
    { column: 'Name', key: 'name_task' },
    {
      column: 'Description',
      key: 'description',
      columnStyle: { color: 'gray' },
    },
    { column: 'Level', key: 'priority_level' },
    { column: 'Active', key: 'active' },
    { column: '', key: 'icon' },
  ]

  return (
    <div className="Homepage">
      <GenericTable
        dataFields={columnArray}
        tableData={list}
        styleConditionw={(item) => {
          return item['priority_level'] === 1
            ? { color: 'red' }
            : item['priority_level'] === 2
            ? { color: 'yellow' }
            : item['priority_level'] === 3
            ? { color: 'green' }
            : {}
        }}
        icon={(data, indexRow) => (
          <MinusButton
            onClick={() => {
              restAPI('task/deleteTask', 'POST', { id: data.taskid })
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
