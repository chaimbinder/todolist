import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export default function GenericTable({ dataFields, tableData = [], styleTable, styleConditionw, icon,handleChange, handleDoubleClick,genericStyleRow }) {

  function sss(rowItem){
    let ss= {}
    if(!rowItem){
      return ss
    }
    if(styleConditionw){
       ss = {...ss, ...styleConditionw(rowItem)}
    }
    if(rowItem.styleRow){
      console.log("rowItem.styleRow",rowItem.styleRow);
       ss = {...ss, ...rowItem.styleRow}
    }
    console.log("ss",ss);
    return ss;
  }

  return (
    <div className='GenericTable'>
      {dataFields && dataFields[0] && (
        <table style={styleTable} className={styles.table}>
          <thead>
          <tr className={styles.tr}>
            {dataFields.map(({columnStyle, column}) => {
              // console.log("column" , column );
              return <th  key={column} className={styles.th} style={columnStyle}>{column}</th>
            }
            )}
          </tr>
          </thead>
          <tbody>
          {tableData && tableData.map((rowItem,indexRow) => (
            
            <tr onDoubleClick={()=>handleDoubleClick(indexRow)}  key={indexRow}  className={styles.tr} style={sss(rowItem)}>
              {dataFields.map(({rowStyle, key, inInput }) => {
                // console.log("key",key)
                let value =  String( rowItem[key]);
                 let styleObject = {...styleConditionw(rowItem, value)}
                return icon &&  key === "icon"? icon(rowItem,indexRow)
                  :<td key={key}
                   className={styles.td} style={rowStyle}>{ rowItem.inInput ? <input style={styleConditionw && styleObject} className={styles.input} value={value} 
                  onChange={(e)=>{
                    handleChange(indexRow, "styleRow", {"background-color": "blue"})
                    handleChange&& handleChange(indexRow, key, e.target.value)
                  }}/> : value}</td>
                }
              )}
            </tr>
          ))}
            </tbody>
        </table>
      )}
    </div>
  )
}
