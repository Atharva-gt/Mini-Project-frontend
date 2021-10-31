import { Button, Card, CardContent, Container, Grid, TextField } from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import Swal from 'sweetalert2';
import app_config from '../config';
import './fileupload.css';
import img from './upl.png';
const AddVideo = () => {

    const url = app_config.api_url;

    const [videoFile, setVideoFile] = useState("");

    const videoForm = {
        title: '',
        description: '',
        file: ''
    }

    const videoSubmit = (values) => {

        values.file = videoFile;
        console.log(values);

        const reqOptions = {
            method: 'POST',
            body: JSON.stringify(values),
            headers: { 'Content-Type': 'application/json' }
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



    const uploadVideo = (e) => {
        const selFile = e.target.files[0];

        console.log(selFile);

        const tempForm = new FormData();
        tempForm.append('file', selFile);

        fetch(url + '/util/upFile', { method: 'POST', body: tempForm })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setVideoFile(selFile.name);
            });
    }

    return (

        <Container>

            <Card>

                <CardContent className="bg">

                    <Grid container className="mt-5">
                        <Grid item md={5}>
                            <img src="upl.png" alt="upload" />
                        </Grid>
                        <Grid item md={7}>
                            <h1>File Upload</h1>

                            <Formik initialValues={videoForm} onSubmit={videoSubmit} >

                                {({ values, handleChange, handleSubmit }) => (
                                    <form onSubmit={handleSubmit}>

                                        <TextField label="Title" className="w-100 mt-5 tex" variant="filled" id="title" onChange={handleChange} value={values.title} />
                                        <TextField multiline label="Description" className="w-100 mt-4 tex" variant="filled" id="description" onChange={handleChange} value={values.description} />
                                        <Grid container spacing={5}>

                                            <Grid item className="mt-4">
                                                <label >Upload File</label>
                                                <input onChange={uploadVideo} className="form-control" type="file" />
                                                <div className="progress-container">
                                                    <div className="bg-progress"></div>
                                                    <div className="inner-container">
                                                        <div className="status">Uploading...</div>
                                                        <div className="percent-container">
                                                            <span className="percentage" id="progressPercent">0</span>%
                                                        </div>
                                                        <div className="progress-bar"></div>
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>

                                        <Button type="submit" variant="contained" className="w-25 mt-5">Submit Video</Button>

                                    </form>
                                )}

                            </Formik>
                        </Grid>
                    </Grid>



                </CardContent>
            </Card>

        </Container>

    )
}

export default AddVideo;