import styles from './styles.module.scss'
import {getLevelPriority} from '../../functions/tableFunction'
import React from 'react'

 function GenericTable({columnData,tableData,styleTable,styleConditionw,active,icon,handleDoubleClick}) {
  
  return (
    <div>
      {columnData && columnData[0] && (
        <table style={styleTable} className={styles.table}>

          <thead >
            <tr className={styles.tr}>
          {columnData.map(({ column}, k ) => {
            
            <th key={k} className={styles.th}>{column}</th>
          })}
        </tr>
			</thead>
          <tbody>
            {tableData && tableData[0] &&tableData.map((rowItem, indexRow) => (
               <tr key={indexRow} className={styles.tr} style={styleConditionw(rowItem)}>
                  {columnData.map(({ key }, indexColumn) => {
							let value = rowItem[key]
							return  < React.Fragment key = {indexColumn}>{
								(key === 'icon' && icon) ?
								<td  className={styles.td}>{icon(rowItem, indexRow)}</td> : 
								(key === 'active' && active) ? 
								<td  className={styles.td}>{active(rowItem, indexRow)}</td> :
								(key === 'priority_level') ? 
								<td   className={`${styles.td}  ${!tableData[indexRow].active && styles.tdLine}`} onDoubleClick={() => handleDoubleClick(rowItem, indexRow)}>{getLevelPriority(value)}</td> :
								<td  className={`${styles.td}  ${!tableData[indexRow].active && styles.tdLine}`} onDoubleClick={() => handleDoubleClick(rowItem, indexRow)}>{value}</td>
								}</React.Fragment>
                  })}
               </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default GenericTable;