import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {setCurrentTable,setCurrentEmployee,setCurrentId} from '../../redux/orderSlice'
import axios from "axios";
import "../Order/Order.css";
import validation from "../../validation/orderValidation";
function Order() {

  const [emp, setEmp] = useState([]);
  
  useEffect(() => {
    axios.get("./api/employee.json").then((resp) => setEmp(resp.data));
  }, []);

  const navigate = useNavigate();
  const dispath = useDispatch();
  return (
    <div className="order">
      <Formik
        initialValues={{
          table: "",
          employee: "",
        }}
        onSubmit={(val) => {
          localStorage.setItem("first-info",JSON.stringify(val))
          navigate("/product")
        }}
        validationSchema={validation}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="table-choose">
              <h1>Sifarişin aid olduğu masanı seçin</h1>
              <Field component="select" name="table" className="form-select">
                <option selected disabled></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </Field>
              {errors.table && touched.table ? (
                  <div className='error'>bu hissə boş buraxıla bilməz</div>
                ) : null}
            </div>
            <div className="emp-choose">
              <h1>Xidmət edəcək şəxsi seçin</h1>
              <Field name="employee" component="select" className="form-select">
                <option selected disabled></option>
                {emp.map((e) => {
                  return (
                    <option key={e.id} value={e.name}>
                      {e.name}
                    </option>
                  );
                })}
              </Field>
              {errors.table && touched.table ? (
                  <div className='error'>bu hissə boş buraxıla bilməz</div>
                ) : null}
            </div>
            <input className="sub-btn" value="Sifariş yarat" type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Order;
