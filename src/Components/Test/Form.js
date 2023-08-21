import React from "react";
// import axios from 'axios';
import { Field, Formik,ErrorMessage } from "formik";

const Form = () => {
//   const [Data, SetData] = useState({
//     name: "",
//     number: "",
//   });
//   const [UserData] = useState({
//     name: false,
//     number:false,
//   });
  // const FormDatas = (event) => {
  //   const { name, value } = event.target;
  //   SetData({ ...Data, [name]: value });
  // };


   
  // const GetDetails = async (e) => {
  //   e.preventDefault();
  //   var NameRejx = new RegExp("/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/");

  //   var NameTest =  NameRejx.test(Data.name);
  //   var NumberTest =  NameRejx.test(Data.number);
  
  //   if(!NameTest){
  //     UserData.name =true
  //   }else if(!NumberTest){
  //   UserData.number =true
  //   }
  //   var Paylod = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify(Data)
  //   }
  //   try{

  //     let Fetch = await axios.post('https://jsonplaceholder.typicode.com/posts',Paylod);
  //     console.log(Fetch.data.body,"dsd")
      
  //   } catch(error){
  //     console.log(error);
  //   }
  
  // };

  return (
    <div className="d-flex justify-content-between">

        {/* <input type='text'  onChange={serchValue}></input> */}
      <Formik initialValues={{fullname:"",email:"",password:""}}
      validate={(values)=>{
        const errors = {};
        if (!values.fullname) {
                  errors.fullname = "Required";
                }
       
        if (!values.email) {
                  errors.email = "Required";
                }
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))        
        if (!values.password) {
                  errors.password = "PASSWORD";
                }
                return errors;
            }}
            
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400)}}
              >
        {({isSubmitting})=>(
          <Form>

            <Field   type="text"
               name="fullname"
               placeholder="Enter your fullname"/>
             <ErrorMessage  name="fullname" component="div"/>
     
         
             <Field
               type="email"
               name="email"
               placeholder="Enter email address"
             />
             <ErrorMessage name="email" component="div" />
        
             <Field type="password" name="password" />
             <ErrorMessage name="password" component="div" />

             <button type="submit" disabled={isSubmitting}>
               Submit
             </button>
     
          </Form>
        )}
       
      </Formik>
    </div>
  );
};

export default Form;
