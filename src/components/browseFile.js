import { Card, CardContent, CardMedia, Grid, Button , CardActions } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import app_config from "../config";
import thumbnail from '../images/thumbnail.png';

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
  

  const displayFiles = () => {
    if (!loading) {
      return (
        <Grid container spacing={5}>
          {fileList.map((file) => (
            <Grid item xs={3}>
              <Card>
          
                <CardMedia component="img" image={thumbnail}/>
                <CardContent>
                  <h3>{file.title}</h3>
                  <h4>{file.description}</h4>
                </CardContent>
                <CardActions>
                  <Button onClick={e=>deletefile(file._id)}>
                    Delete
                  </Button>
                  <Button>
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

  return <div>{displayFiles()}</div>;
};

export default BrowseFiles;
