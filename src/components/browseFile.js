import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import app_config from "../config";

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

  const displayFiles = () => {
    if (!loading) {
      return (
        <Grid container spacing={5}>
          {fileList.map((file) => (
            <Grid item xs={3}>
              <Card>
                <CardMedia />
                <CardContent>
                  <h3>{file.title}</h3>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return <div>{displayFiles()}</div>;
};

export default BrowseFiles;
