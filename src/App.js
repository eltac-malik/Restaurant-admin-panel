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
import About from 'Pages/About/About'

function App() {


  const a = [
    {
      sira: 1,
      masa: 3,
      xid: "Elxan Memmedov",
      status: "gozleyen",
      mebleg: 23,
      son: 12,
      basket:
      [    {
        "id": 7,
        "title": "Magnum Badem",
        "image": "https://cdn.getir.com/product/559fec01f462100c00461d5c_tr_1618323765236.jpeg",
        "alt": "100 ml",
        "price": 7.50,
        "category":"qida",
        "count":1
      },
      {
        "id": 8,
        "title": "İçim %3 Yağlı Süt",
        "image": "https://cdn.getir.com/product/5ced482d4a8a2a000137da6d_tr_1623652387464.jpeg",
        "alt": "1 L",
        "price": 7.95,
        "category":"qida",
        "count":1
      },
      {
        "id": 9,
        "title": "Lay's Mevsim Yeşillikli",
        "image": "https://cdn.getir.com/product/5bc97aabb137fb001d751ac7_tr_1609123518121.jpeg",
        "alt": "96 g",
        "price": 6.36,
        "category":"qida",
        "count":1
      }
      ]
    },
    {
      sira: 2,
      masa: 5,
      xid: "Namiq Huseynov",
      status: "sonlanan",
      mebleg: 203,
      son: 12,
         basket:
      [    {
        "id": 7,
        "title": "Magnum Badem",
        "image": "https://cdn.getir.com/product/559fec01f462100c00461d5c_tr_1618323765236.jpeg",
        "alt": "100 ml",
        "price": 7.50,
        "category":"qida",
        "count":1
      },
      {
        "id": 8,
        "title": "İçim %3 Yağlı Süt",
        "image": "https://cdn.getir.com/product/5ced482d4a8a2a000137da6d_tr_1623652387464.jpeg",
        "alt": "1 L",
        "price": 7.95,
        "category":"qida",
        "count":1
      },
      {
        "id": 9,
        "title": "Lay's Mevsim Yeşillikli",
        "image": "https://cdn.getir.com/product/5bc97aabb137fb001d751ac7_tr_1609123518121.jpeg",
        "alt": "96 g",
        "price": 6.36,
        "category":"qida",
        "count":1
      }
      ]
   
    },
    {
      sira: 3,
      masa: 3,
      xid: "Gulnar Elesgerova",
      status: "legv",
      mebleg: 23,
      son: 12,
      basket:
      [    {
        "id": 7,
        "title": "Magnum Badem",
        "image": "https://cdn.getir.com/product/559fec01f462100c00461d5c_tr_1618323765236.jpeg",
        "alt": "100 ml",
        "price": 7.50,
        "category":"qida",
        "count":1
      },
      {
        "id": 8,
        "title": "İçim %3 Yağlı Süt",
        "image": "https://cdn.getir.com/product/5ced482d4a8a2a000137da6d_tr_1623652387464.jpeg",
        "alt": "1 L",
        "price": 7.95,
        "category":"qida",
        "count":1
      },
      {
        "id": 9,
        "title": "Lay's Mevsim Yeşillikli",
        "image": "https://cdn.getir.com/product/5bc97aabb137fb001d751ac7_tr_1609123518121.jpeg",
        "alt": "96 g",
        "price": 6.36,
        "category":"qida",
        "count":1
      }
      ]
   
    },
    {
      sira: 4,
      masa: 3,
      xid: "Gulnar Elesgerova",
      status: "gozleyen",
      mebleg: 23,
      son: 12,
      basket:
      [    {
        "id": 7,
        "title": "Magnum Badem",
        "image": "https://cdn.getir.com/product/559fec01f462100c00461d5c_tr_1618323765236.jpeg",
        "alt": "100 ml",
        "price": 7.50,
        "category":"qida",
        "count":1
      },
      {
        "id": 8,
        "title": "İçim %3 Yağlı Süt",
        "image": "https://cdn.getir.com/product/5ced482d4a8a2a000137da6d_tr_1623652387464.jpeg",
        "alt": "1 L",
        "price": 7.95,
        "category":"qida",
        "count":1
      },
      {
        "id": 9,
        "title": "Lay's Mevsim Yeşillikli",
        "image": "https://cdn.getir.com/product/5bc97aabb137fb001d751ac7_tr_1609123518121.jpeg",
        "alt": "96 g",
        "price": 6.36,
        "category":"qida",
        "count":1
      }
      ]
   
    },
    {
      sira: 5,
      masa: 3,
      xid: "Namiq Huseynov",
      status: "sonlanan",
      mebleg: 3,
      son: 12,
      basket:
      [    {
        "id": 7,
        "title": "Magnum Badem",
        "image": "https://cdn.getir.com/product/559fec01f462100c00461d5c_tr_1618323765236.jpeg",
        "alt": "100 ml",
        "price": 7.50,
        "category":"qida",
        "count":1
      },
      {
        "id": 8,
        "title": "İçim %3 Yağlı Süt",
        "image": "https://cdn.getir.com/product/5ced482d4a8a2a000137da6d_tr_1623652387464.jpeg",
        "alt": "1 L",
        "price": 7.95,
        "category":"qida",
        "count":1
      },
      {
        "id": 9,
        "title": "Lay's Mevsim Yeşillikli",
        "image": "https://cdn.getir.com/product/5bc97aabb137fb001d751ac7_tr_1609123518121.jpeg",
        "alt": "96 g",
        "price": 6.36,
        "category":"qida",
        "count":1
      }
      ]
   
    },
    {
      sira: 6,
      masa: 3,
      xid: "Nermin Baxsiyeva",
      status: "legv",
      mebleg: 23,
      son: 12,
      basket:
      [    {
        "id": 7,
        "title": "Magnum Badem",
        "image": "https://cdn.getir.com/product/559fec01f462100c00461d5c_tr_1618323765236.jpeg",
        "alt": "100 ml",
        "price": 7.50,
        "category":"qida",
        "count":1
      },
      {
        "id": 8,
        "title": "İçim %3 Yağlı Süt",
        "image": "https://cdn.getir.com/product/5ced482d4a8a2a000137da6d_tr_1623652387464.jpeg",
        "alt": "1 L",
        "price": 7.95,
        "category":"qida",
        "count":1
      },
      {
        "id": 9,
        "title": "Lay's Mevsim Yeşillikli",
        "image": "https://cdn.getir.com/product/5bc97aabb137fb001d751ac7_tr_1609123518121.jpeg",
        "alt": "96 g",
        "price": 6.36,
        "category":"qida",
        "count":1
      }
      ]
   
    },
    {
      sira: 7,
      masa: 3,
      xid: "Nermin Baxsiyeva",
      status: "sonlanan",
      mebleg: 23,
      son: 12,
      basket:
      [    {
        "id": 7,
        "title": "Magnum Badem",
        "image": "https://cdn.getir.com/product/559fec01f462100c00461d5c_tr_1618323765236.jpeg",
        "alt": "100 ml",
        "price": 7.50,
        "category":"qida",
        "count":1
      },
      {
        "id": 8,
        "title": "İçim %3 Yağlı Süt",
        "image": "https://cdn.getir.com/product/5ced482d4a8a2a000137da6d_tr_1623652387464.jpeg",
        "alt": "1 L",
        "price": 7.95,
        "category":"qida",
        "count":1
      },
      {
        "id": 9,
        "title": "Lay's Mevsim Yeşillikli",
        "image": "https://cdn.getir.com/product/5bc97aabb137fb001d751ac7_tr_1609123518121.jpeg",
        "alt": "96 g",
        "price": 6.36,
        "category":"qida",
        "count":1
      }
      ]
   
    },
  ];



  useEffect(() => {
    console.log(localStorage.getItem("ls"));
    if (JSON.parse(localStorage.getItem("ls")===null))
    {
      (localStorage.setItem("ls",JSON.stringify(a)))
    }
    
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
          <Route path='/about/:sira' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
