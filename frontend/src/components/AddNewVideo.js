import { useContext, useRef, useState } from "react";
import classes from "./AddNewVideo.module.css";
import { AuthContext } from "../context/auth-context";
import { uploadVideo } from "../backend/helpers";

const AddNewVideo = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const { userData } = useContext(AuthContext);
  const titleRef = useRef();

  const handleUpload = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    const title = titleRef.current.value;
    if (title.length === 0 || selectedFile === null) {
      return;
    }
    const data = new FormData();
    data.append("file", selectedFile, selectedFile.name);
    const response = await uploadVideo(data, userData.username, title);
    if (response === "success") {
      setTimeout(() => {
        setIsUploading(false);
        // modal window success
      }, 1000);
    } else {
      setTimeout(() => {
        setIsUploading(false);
        // modal window error
      }, 1000);
    }
  };

  return (
    <div className={classes.mainDiv}>
      <form className={classes.formUpload}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginTop: "12px",
          }}
        >
          <label htmlFor="file" className={classes.addFile}>
            Select video
          </label>

          <label>
            {selectedFile ? selectedFile.name : "No file selected."}
          </label>
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <span>Title:</span>
          <input id="text" name="text" type="text" ref={titleRef}></input>
        </div>

        <button className={classes.buttonUpload} onClick={handleUpload}>
          {isUploading ? (
            <div className={classes.loaderSpinnerWrapper}>
              <div className={classes.loaderSpinner}></div>
            </div>
          ) : (
            "Upload"
          )}
        </button>

        <input
          id="file"
          name="file"
          type="file"
          className={classes.hiddenInput}
          onChange={(e) => {
            setSelectedFile(e.target.files[0]);
          }}
          style={{ visibility: "hidden" }}
          accept="video/*"
        />
      </form>
    </div>
  );
};

export default AddNewVideo;
