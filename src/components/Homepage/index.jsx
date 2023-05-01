import styles from './style.module.css'
import restAPI from '../../functions/restAPI'
import { useEffect } from 'react'
import { useState } from 'react'

function Homepage() {
    const [list, setList] = useState(null)

    useEffect(() => {
        restAPI("task/getAllTask").then((res) => {
            setList(res.rows);
        });
    }, [])

    return (
        <div className='Homepage'>
            <div className="container text-center">
                <div className="row">
                    {list &&
                        list.map((item, index) => {
                            return (
                                <div className="col" key={index}>
                                    <div className="card" style={{ width: "14rem" }}>
                                        <div className="card-body">
                                            <h4>{item.name_task}</h4>
                                            <p
                                                className="btn btn-primary"
                                                onClick={() => {
                                                    //   setEventClick(item);
                                                    //   navigate("../ChatObEvent");
                                                }}
                                            >
                                                click
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    )
}
export default Homepage
