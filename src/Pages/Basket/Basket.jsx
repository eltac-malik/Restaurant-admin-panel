import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'

function Basket() {
    const [basket, setBasket] = useState()
    const [emp, setEmp] = useState([])

    const x = useSelector(state => state.order.currentOrder)

    useEffect(()=>
    {
        axios.get("./api/employee.json")
        .then(resp=> setEmp(resp.data))
        setBasket((localStorage.getItem("basket")))
    }
    ,[])
    
    let emp_info = emp.find(e=> e.name===x.employee)
    console.log(emp_info);
    return (
            <div className='last-basket'>
                {
                    emp_info!==undefined&&
                    <div className="last-emp">
                        <h1 className='emp-h1'>Xidmətçi :</h1>
                        <div className="spe-emp">
                        <h1>{emp_info.name}</h1>
                        <div className="last-img">
                            <img src={emp_info.image} alt=""/>
                        </div>
                        </div>
                    </div>
                }
                <div className="last-emp">
                    <h1 className='emp-h1'>Xidmətçi :</h1>
                    <div className="spe-emp">
                    <h1>{}</h1>
                    <div className="last-img">
                        <img src={""} alt=""/>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Basket
