import { Form, Formik } from "formik";

const Login = () => {

const loginform={
    userId:'',
    email:'',
    password:''
}
const submitform=(values)=>{
    console.log(values);
}

    return(
           <Formik initialValues={loginform} onSubmit={submitform}>
           {({
                values,handleSubmit,handleChange
               }
           )=>(
               <Form onSubmit={handleSubmit}>
            <div className="card-body row mt-5" style={{textAlign:'center'}}>
            
        <div className="card w-25 col-md-8 mx-auto">
               <h1>Login</h1>
               
              <input type="text" id="userId" placeholder="User ID" onChange={handleChange} value={values.userId}></input><br/>
              <input type="email" id="email" placeholder="Email" onChange={handleChange} value={values.email}></input><br/>
              <input type="password" id="password" placeholder="Password" onChange={handleChange} value={values.password}></input><br/>
              <button className="btn btn-danger" style={{marginBottom:'20px'}}>Login</button>
  
  
          </div>
         </div>
         </Form>
           )}
       </Formik>
           
       
       );
}
export default Login;