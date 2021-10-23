import { Formik } from 'formik';
const Signup = () => {
 
    const signupForm={
        name:'',
        userId:'',
        email:'',
        password:''
    }
    
    const signupSubmit=(values)=> {
        console.log(values);
    }

    return(
        <>
            <Formik initialValues={signupForm} onSubmit={signupSubmit}>
                {(
                    {
                        values,handleSubmit,handleChange
                    }
                )=>(
                    <form onSubmit={handleSubmit}>
                    <div className="card-body  row mt-5" style={{textAlign:'center'}}>
            
                    <div className="card w-25 col-md-8 mx-auto">
                           <h1>Sign Up</h1>
                           <input type="text" placeholder="Name" id="name" value={values.name} onChange={handleChange} ></input><br/>
                          <input type="text" placeholder="User ID" id="userId" value={values.userId} onChange={handleChange}   ></input><br/>
                          <input type="email" placeholder="Email" id="email" value={values.email} onChange={handleChange}   ></input><br/>
                          <input type="password" placeholder="Password" id="password" value={values.password} onChange={handleChange}  ></input><br/>
                          <button className="btn btn-success">Proceed</button>
                     </div>
                     </div>
                     </form>
                )}
            </Formik>       
         </>
    );
}
export default Signup;