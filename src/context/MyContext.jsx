import { useState } from 'react'
import DataContext from '.'

function MyContext({ children }) {
  const [data, setData] = useState(null)
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}
export default MyContext
