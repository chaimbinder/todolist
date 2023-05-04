import styles from './styles.module.scss'
import {getLevelPriority} from '../../functions/tableFunction'

 function GenericTable({columnData,tableData,styleTable,styleConditionw,active,icon,handleDoubleClick}) {
  




  return (
    <div>
      {columnData && columnData[0] && (
        <table style={styleTable} className={styles.table}>

          <thead className={styles.tr}>{columnData.map(({ column }) => (
			 		<th key={column} className={styles.th}>{column}</th>
				))}
			</thead>

          <tbody>
            {tableData && tableData[0] &&tableData.map((rowItem, indexRow) => (
               <tr key={indexRow} className={styles.tr} style={styleConditionw(rowItem)}>
                  {columnData.map(({ key }, indexColumn) => {
							let value = rowItem[key]
							console.log();
							return  <>{
								(key === 'icon' && icon) ?
								<td key={indexColumn} className={styles.td}>{icon(rowItem, indexRow)}</td> : 
								(key === 'active' && active) ? 
								<td key={indexColumn} className={styles.td}>{active(rowItem, indexRow)}</td> :
								(key === 'priority_level') ? 
								<td active key={indexColumn} className={`${styles.td}  ${!tableData[indexRow].active && styles.tdLine}`} onDoubleClick={() => handleDoubleClick(rowItem, indexRow)}>{getLevelPriority(value)}</td> :
								<td key={indexColumn} className={`${styles.td}  ${!tableData[indexRow].active && styles.tdLine}`} onDoubleClick={() => handleDoubleClick(rowItem, indexRow)}>{value}</td>
								}</>
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