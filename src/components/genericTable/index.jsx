import styles from './styles.module.scss';

export default function GenericTable({ dataFields, tableData = [], styleTable, styleConditionw, icon }) {
  return (
    <>
      {dataFields && dataFields[0] && (
        <table style={styleTable} className={styles.table}>
          <thead>
          <tr className={styles.tr}>
            {dataFields.map(({columnStyle, column}) => (
              <th  key={column} className={styles.th} style={columnStyle}>{column}</th>
            ))}
          </tr>
          </thead>
          <tbody>
          {tableData && tableData.map((rowItem,indexRow) => (
         
            <tr  key={indexRow}  className={styles.tr} style={styleConditionw && styleConditionw(rowItem)}>
              {dataFields.map(({rowStyle, key}) => {return icon &&  key === "icon"? icon(rowItem,indexRow)
                  :<td key={key} className={styles.td} style={rowStyle}>{String( rowItem[key])}</td>
                }
              )}
            </tr>
          ))}
            </tbody>
        </table>
      )}
    </>
  )
}
