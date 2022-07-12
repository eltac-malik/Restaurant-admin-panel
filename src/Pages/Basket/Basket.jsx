import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'

function Basket() {
    const [basket, setBasket] = useState([])
    const [emp, setEmp] = useState([])
    const [arr, setArr] = useState([])
    const [empfind,setEmpFind] = useState()
    const navigate = useNavigate()
    useEffect(()=>
    {
        axios.get("./api/employee.json")
        .then(resp=> setEmp(resp.data))
        setBasket(JSON.parse(localStorage.getItem("basket")))
        setEmpFind(JSON.parse(localStorage.getItem('first-info')))
        setArr(JSON.parse(localStorage.getItem("ls")))

    }
    ,[])

    useEffect(() => {
        localStorage.setItem("basket", basket)
    }, [basket])

    let emp_info = emp.find(e=> e.name===empfind.employee)
    console.log(arr);

    let handleDel = ()=>
    {
        
    }

    return (
            <div className='last-basket'>
                {
                    emp_info!==undefined&&
                    <div className="last-emp">
                        <h1 className='emp-h1'>Xidmətçi</h1>
                        <div className="spe-emp">
                        <h1>{emp_info.name}</h1>
                        <div className="last-img">
                            <img src={emp_info.image} alt=""/>
                        </div>
                        </div>
                    </div>
                }
                <div className="last-emp">
                    <h1 className='emp-h1'>Məhsullar</h1>
                    <div className="spe-emp columns">
                        {
                            basket&&basket.map((e, i)=>
                                {
                                    console.log(e);
                                    return(
                                        <div className="prod">
                                            <p className='prod-name'>{e.title}</p>
                                            <div className="basket-img">
                                                <img src={e.image} alt=""/>
                                            </div>
                                            <div className="change">
                                                <button onClick={()=> {
                                                    setBasket(basket.map(b => {
                                                        if (b.id == e.id) {
                                                            return {...b, count : b.count > 1 ? b.count-1 : 1}
                                                        }
                                                        return b
                                                    }))
                                                    

                                                }} className='increase'>-</button>
                                                <span>{e.count}</span>
                                                <button onClick={()=> {
                                                    setBasket(basket.map(b => {
                                                        if (b.id == e.id) {
                                                            return {...b, count : b.count+1}
                                                        }
                                                        return b
                                                    }))
                                                    

                                                }} className='decrease'>+</button>
                                            </div>
                                            <button 
                                            onClick={()=>
                                            {
                                                let newbasket = basket.filter(x=> x.id !== e.id)
                                                localStorage.setItem("basket",JSON.stringify(newbasket))
                                                setBasket(JSON.parse(localStorage.getItem("basket")))
                                            }}
                                            className='delete'>Delete</button>
                                        </div>
                                    )
                                }
                                )
                                
                        }
                    </div>
                </div>
                        <button onClick={()=>
                        {
                            let mebleg =0;
                            basket.forEach(e=>
                                {
                                    let price = Number(e.price)
                                    let count = Number(e.count)
                                    let sum = mebleg+e.price
                                    mebleg = sum
                                    
                                })

                                console.log(mebleg);
                            let sira = Number((Math.random(100)*100).toFixed())
                            let status = "gozleyen"
                            let masa = empfind.table
                            let xid = empfind.employee
                            let time = new Date();
                            let t1 = time.getDay();
                            let t2 = time.getHours();
                            let t4 = time.getMonth();
                            let t3 = time.getMinutes()
                            let son = t2+":"+t3+"/"+t1+"/"+t4

                            let last = {sira,masa,xid,status,mebleg,son,basket}
                            arr.push(last)
                            localStorage.setItem("ls",JSON.stringify(arr))
                            navigate("/")
                        }} className='basket-btn add-basket'>Sifariş et</button>
                        <button className='basket-btn del-basket'>Sifarişi ləğv et</button>
            </div>
    )
}

export default Basket
