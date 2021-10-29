import { Button, Card, CardContent, Container, Grid, TextField } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import Swal from "sweetalert2";
import app_config from "../config";


const Fileupload = () =>{

    const [videoFile, setVideoFile] = useState("");
    const url=app_config.api_url;

    const videoform={
        title:'',
        discription :'',
        category :'',
        file :''
    }
    const videosubmit = (values) => {
        values.file = videoFile;
        console.log(values);

        const reqOptions={
            method:'POST',
            body:JSON.stringify(values),
            headers :{'Content-Type':'application/json'}
        };
        fetch(url + '/file/add', reqOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Video Uploaded Successfully'
            })
        })
    }

const uploadvideo =(e)=>{
    const selFile=e.target.files[0];
    console.log(selFile);

    const tempform=new FormData();
    tempform.append('file',selFile);

    fetch(url + '/util/uploadFile',{method:'POST',body:tempform})
    .then(res=>res.json())
    .then(data => {
        console.log(data);
        setVideoFile(selFile.name);
    });
}
    return(
    <div>
        <Container>

            <Card>
                <CardContent>
                    <Grid container >
                        <Grid item md={5}>

                        </Grid>
                        <Grid item md={7}>
                            <h2>Signup Form</h2>
                        <Formik initialValues={videoform} onSubmit={videosubmit}>
                    {({
                        values, handleChange , handleSubmit
                    })=>(
                        <form onSubmit={handleSubmit}>
                            <TextField className="w-100 mt-5" variant="filled" label="title" id="title" onChange={handleChange} value={values.title} ></TextField>
                            <TextField className="w-100 mt-4" multiline variant="filled" label="discription" id="discription" onChange={handleChange} value={values.discription} ></TextField>
                            <TextField className="w-100 mt-4" variant="filled" label="category" id="category" onChange={handleChange} value={values.category} ></TextField>
                            <Grid container spacing={5}>
                        
                        <Grid item className="mt-4">
                            <label>Upload File</label>
                        <input onChange={uploadvideo} type="file" className="form-control"/> 

                        </Grid>
                    </Grid>
                    <Button type="submit" variant="contained" className="w-25 mt-5">Submit Video</Button>
                        </form>
                        ) }
                   </Formik>
                        </Grid>
                    </Grid>
                  
                    
                </CardContent>
            </Card>
        </Container>
        

    </div>
    )
}
export default Fileupload;