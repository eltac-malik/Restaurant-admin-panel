import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import "../Home/Home.css";
import { Link } from "react-router-dom";

function Home() {

  const [y,setY] = useState([])

  useEffect(()=>
  {
    JSON.parse(localStorage.getItem("ls"))&&setY(JSON.parse(localStorage.getItem("ls")))
  },[])


  const [filtered,setFiltered] = useState("")
  let x = y.filter(e=> 
    {
      if (filtered === "hami")
      {
        return e  
      }
      else if(e.status.includes(filtered))
      {
        return e
      }
    })

    console.log(y);

    let dailySum = y.filter(e=> e.status === "sonlanan")
    let s = 0;
    dailySum.forEach(e=>
      {
        let x = e.mebleg
        s=s+parseInt(x);
      })

      let wait = x.filter(e=> e.status === 'gozleyen')
      let complated = x.filter(e=> e.status !== 'gozleyen')
      let data = wait.concat(complated)

  return (
    <div className="home">
      <div className="account flex">
        <div className="order-x flex order-count">
          <h1>{dailySum.length}</h1>
          <p>Sifariş Sayi</p>
        </div>
        <div className="order-x flex order-sum">
          <h1>
            {s} <span>AZN</span>
          </h1>
          <p>Günlük gəlir</p>
        </div>
      </div>
      <div className="status-filter">
        <span>AXTAR</span>

        <select onChange={(e=> setFiltered(e.target.value))} className="form-select">
          <option selected disabled>Statusa gorə axtar</option>
          <option value="hami">hamı</option>
          <option value="gozleyen">gozləyən</option>
          <option value="sonlanan">sonlanan</option>
          <option value="legv">ləğv olanlar</option>
        </select>
      </div>
      <div className="table-data">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Masa</th>
              <th scope="col">Xidmətçi</th>
              <th scope="col">Status</th>
              <th scope="col">Məbləğ</th>
              <th scope="col">Sonlanma Tarixi</th>
              <th scope="col">Ətraflı</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => {
              return (
                <tr>
                  <td>{e.masa}</td>
                  <td>{e.xid}</td>
                  <td className="status">
                    {e.status==="sonlanan"
                    ?
                    <p><i className={`fa-solid green-st fa-circle`}></i>{e.status}</p>
                    :
                    (
                      e.status==="gozleyen"?
                    <p><i className={`fa-solid yellow-st fa-circle`}></i>{e.status}</p>
                    :
                    <p><i className={`fa-solid red-st fa-circle`}></i>{e.status}</p>
                    )
                    }
                  </td>
                  <td>{e.mebleg}</td>
                  <td>{e.son}</td>
                  <td>
                    <Link className="about-link" to={`/about/${e.sira}`}>
                      <i className="fa-solid fa-angle-right"></i>
                    </Link>
                  </td> 

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
