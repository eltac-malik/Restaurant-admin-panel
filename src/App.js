import './App.css';
import {useEffect} from 'react'
import Navbar from './Pages/Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Order from './Pages/Order/Order'
import Product from 'Pages/Products/Product';
import {useDispatch,useSelector} from 'react-redux'
import {setOrders} from './redux/orderSlice'
import Basket from 'Pages/Basket/Basket';

function App() {

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



  useEffect(() => {
    (localStorage.setItem("ls",JSON.stringify(a)))
    let ls = JSON.parse(localStorage.getItem("ls"))
    setOrders(ls)
  }, [])



  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/basket' element={<Basket/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
