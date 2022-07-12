import {createSlice} from '@reduxjs/toolkit'

const orderSlice = createSlice({
    name:"order",
    initialState:{
        currentOrder:
        {
            id:null,
            table:"",
            employee:"",
            orders:[]
        }
    },
    reducers:{
        setCurrentId:(state,action)=>
        {
            state.currentOrder.id = action.payload
        },
        setCurrentTable: (state,action)=>
        {
            state.currentOrder.table = action.payload
            state.currentOrder.employee = action.payload
        },
        setCurrentEmployee: (state,action)=>
        {
            state.currentOrder.employee = action.payload
        },
        setOrders:(state,action)=>
        {
            state.currentOrder.orders = action.payload
        }
    }
})


export const {setCurrentId,setCurrentTable,setCurrentEmployee,setOrders} = orderSlice.actions
export default orderSlice.reducer