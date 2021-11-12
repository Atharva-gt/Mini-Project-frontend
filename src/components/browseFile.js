import { Card, CardContent, CardMedia, Grid, Button , CardActions } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import app_config from "../config";
import thumbnail from '../images/thumbnail.png';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import './br.css';
import { Container } from "@material-ui/core";

const BrowseFiles = () => {
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const url = app_config.api_url;

  const fetchFiles = () => {
    fetch(url + "/file/getbyuser/" + currentUser._id)
      .then((res) => res.json())
      .then((data) => {
        setFileList(data);
        setLoading(false);
      });
  };
  const deletefile =(id)=>{
    fetch(url + "/file/delete/" + id,{method:'DELETE'})
    .then((res) => {
      console.log(res.status);
      fetchFiles();
      return res.json();
    })
  }
  const fileLink=(filename)=>{
    const downloadurl=url + "/download/" + filename;
      if (window.clipboardData) { 
          window.clipboardData.setData("Link", downloadurl);
      } 
   navigator.clipboard.writeText(downloadurl).then(function() {
  console.log('Async: Copying to clipboard was successful!');
}, function(err) {
  console.error('Async: Could not copy text: ', err);
});
  }

  const displayFiles = () => {
    if (!loading) {
      return (
        <Grid container spacing={2}>
          {fileList.map((file) => (
            <Grid item xs={3}>
              <Card sx={{ width: 280 }}>
          
                <CardMedia sx={{ width: 180 }} component="img" image={thumbnail}/>
                <CardContent>
                  <h3>Title : {file.title}</h3>
                  <h4>Discription : {file.description}</h4>
                </CardContent>
                <CardActions>
                  <Button onClick={e=>deletefile(file._id)} variant="contained" startIcon={<DeleteOutlineIcon />}>
                    Delete
                  </Button>
                  <Button onClick={e=>fileLink(file.file)} variant="contained" startIcon={<ContentCopyIcon/>}>
                  Copy Link
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    }
  };

  useEffect(() => {fetchFiles();}, []);

  return <Container>{displayFiles()}</Container>;
};

export default BrowseFiles;
