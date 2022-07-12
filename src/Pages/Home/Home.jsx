import React,{useState} from "react";
import {useSelector} from 'react-redux'
import "../Home/Home.css";
import { Link } from "react-router-dom";

function Home() {
  const y = useSelector(state => state.order.orders);
  console.log(y);
  const a = [
    {
      sira: 1,
      masa: 3,
      xid: "eltac",
      status: "gozleyen",
      mebleg: 23,
      son: 12,
    },
    {
      sira: 2,
      masa: 5,
      xid: "eltsds",
      status: "sonlanan",
      mebleg: 2003,
      son: 12,
    },
    {
      sira: 1,
      masa: 3,
      xid: "eltac",
      status: "legv",
      mebleg: 23,
      son: 12,
    },
    {
      sira: 1,
      masa: 3,
      xid: "eltac",
      status: "gozleyen",
      mebleg: 23,
      son: 12,
    },
    {
      sira: 1,
      masa: 3,
      xid: "eltac",
      status: "sonlanan",
      mebleg: 3,
      son: 12,
    },
    {
      sira: 1,
      masa: 3,
      xid: "eltac",
      status: "legv",
      mebleg: 23,
      son: 12,
    },
    {
      sira: 1,
      masa: 3,
      xid: "eltac",
      status: "sonlanan",
      mebleg: 23,
      son: 12,
    },
  ];


  const [colorSt,setColorSt] = useState("yellow-st")

  const [filtered,setFiltered] = useState("")
  let x = a.filter(e=> 
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


    let dailySum = a.filter(e=> e.status === "sonlanan")
    let s = 0;
    dailySum.forEach(e=>
      {
        s=s+e.mebleg;
      })




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
          <option selected disabled>Statusa gore axtar</option>
          <option value="hami">hami</option>
          <option value="gozleyen">gozleyen</option>
          <option value="sonlanan">sonlanan</option>
          <option value="legv">legv</option>
        </select>
      </div>
      <div className="table-data">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sıra sayı</th>
              <th scope="col">Masa</th>
              <th scope="col">Xidmətçi</th>
              <th scope="col">Status</th>
              <th scope="col">Məbləğ</th>
              <th scope="col">Sonlanma Tarixi</th>
              <th scope="col">Ətraflı</th>
            </tr>
          </thead>
          <tbody>
            {x.map((e) => {
              return (
                <tr>
                  <th scope="row">1</th>
                  <td>{e.sira}</td>
                  <td>{e.masa}</td>
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
                    <Link className="about-link" to="/order">
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
