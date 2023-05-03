import { useState } from 'react'
import DataContext from '.'
import restAPI from '../functions/restAPI'

function MyContext({ children }) {
  const [list, setList] = useState([])
  const [popupComponent, setpopupComponent] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const getTasks = () =>{
    restAPI('task','GET').then((res) => {
      setList(res)
      console.log("uuu");
    })
  }
  return (
    <DataContext.Provider
      value={{
        list,
        setList,
        popupComponent,
        setpopupComponent,
        isOpen,
        setIsOpen,
        getTasks,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
export default MyContext
