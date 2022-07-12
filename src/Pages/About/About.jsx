import React,{useEffect,useState} from 'react'
import './About.css'
import {useParams,useNavigate} from 'react-router-dom'

function About() {

    let {sira} = useParams()
    const [data,setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("ls")))
    }, [])

    let x = data&&data.find(e=> e.sira == sira);
    console.log(x);
    return (
        <div className='about'>
            {x&&
            <>
            <div className="submit-emp">
                <p>Xidmət edən : {x.xid}</p>
            </div>
            <div className="submit-prod">
                {
                    x.basket.map((e)=>
                    {
                        return(
                            <div className="prods">
                                <p>{e.title}</p>
                                <div className="submit-img">
                                    <img src={e.image} alt=""/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="btns">
                <button onClick={()=> 
                {
                    let z = 
                    {
                        sira:x.sira,
                        masa:x.masa,
                        xid:x.xid,
                        status:"legv",
                        mebleg:x.mebleg,
                        son:x.son,
                        basket:x.basket
                    }
                    let filter_z = data.filter(e=> e.sira!==x.sira)
                    filter_z.push(z)
                    localStorage.setItem("ls",JSON.stringify(filter_z))

                    navigate("/")
                }} className='bad'>Sifarişi ləğv et</button>
                <button onClick={()=> 
                {
                    let z = 
                    {
                        sira:x.sira,
                        masa:x.masa,
                        xid:x.xid,
                        status:"sonlanan",
                        mebleg:x.mebleg,
                        son:x.son,
                        basket:x.basket
                    }
                    let filter_z = data.filter(e=> e.sira!==x.sira)
                    filter_z.push(z)
                    localStorage.setItem("ls",JSON.stringify(filter_z))

                    navigate("/")
                }} className='good'>Sifariş tamamlandi</button>
            </div>
            </>
            }
        </div>
    )
}

export default About
