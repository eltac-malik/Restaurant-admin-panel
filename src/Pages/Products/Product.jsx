import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

function Product() {
    const [prod,setProd] = useState([])
    const [basket,setBasket] = useState([])
    const x = useSelector(state => state.order.currentOrder)
    console.log(x);

    useEffect(()=>
    {
        axios.get("./api/products.json")
        .then(resp=> setProd(resp.data))

    },[])


    let handleBasket = (x)=>
    {
        let t = basket.some(e=> e===x);

        if (t===false)
        {
            setBasket([...basket,x]) 
        }
        else
        {
            x.count+=1;
        }
    }
    
    console.log(basket);
    return (
        <div className='products'>
            <div className="basket">
           <p onClick={()=>JSON.stringify(localStorage.setItem("basket",basket))}><Link className='basket-link' to='/basket'><span>Sifarişə bax</span><i className="fa-solid fa-2x fa-basket-shopping"></i> <sup>{basket.length}</sup></Link></p>
            </div>

            <div className="p-cards">
            {
                prod.map((e)=>
                {
                    return(
                        <div className="p-card" key={e.id}>
                            <div className="p-img">
                                <img src={e.image} alt="salam"/>
                            </div>
                            <p>{e.title}</p>
                            <p>{e.price}</p>
                            <button onClick={()=>handleBasket(e)}>ADD</button>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Product
