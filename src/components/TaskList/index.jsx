import restAPI from '../../functions/restAPI'
import { useContext } from 'react'
import GenericTable from '../GenericTable'
import DeleteButton from '../buttons/DeleteButton'
import DataContext from '../../context'

import TaskPopup from '../popups/TaskPopup'
import { getColorPriority } from '../../functions/tableFunction'
function TaskList() {
  const { list, setList, setpopupComponent , getTasks} = useContext(DataContext)

  function handleDoubleClick(rowItem, index) {
    setpopupComponent(
      <TaskPopup taskToEdit={rowItem} index={index} funcToDo={editTask} />,
    )
  }

  function editTask(Item, index) {
    restAPI('task', 'PATCH', Item).then(() => {
      setpopupComponent(null)
      getTasks()
    })
  }

  let columnArray = [
    // { column: 'ID', key: 'taskid' },
    { column: 'Name', key: 'name_task' },
    { column: 'Description', key: 'description' },
    { column: 'Level', key: 'priority_level' },
    { column: '', key: 'active' },
    { column: '', key: 'icon' },
  ]

  let styleRowFunction = () => {}

  let styleConditionw = (item, value) => {
    return {
      color: getColorPriority(item['priority_level']),
      width: value ? value.length + 'ch' : '',
    }
  }

  let getIcon = (data, indexRow) => {
    return (
      <DeleteButton
        onClick={() => {
          restAPI('task', 'DELETE', { id: data.taskid })
            .then((res) => {
              let copyList = [...list]
              copyList.splice(indexRow, 1)
              setList(copyList)
            })
            .catch((err) => console.log(err))
        }}
      />
    )
  }

  let getActive = (item, index) => {
    return (
      <input
        type="checkbox"
        checked={!item.active}
        onChange ={(event) => {
          let value = !event.target.checked
          item.active = value

          restAPI('task', 'PATCH', item)
            .then((data) => {

              setList(data)
            })
            .catch((err) => console.log(err))
        }}
      />
    )
  }

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
