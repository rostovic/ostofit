import classes from "./MyProfilePage.module.css";
import { AuthContext } from "../context/auth-context";
import { useContext } from "react";
import { Avatar } from "@mui/material";
import VideoCard from "../components/VideoCard";
import { getAllVideosForUser } from "../backend/userVideos";

const MyProfilePage = () => {
  const authContext = useContext(AuthContext);
  const { firstName, lastName, id } = authContext.userData;
  const userVideos = getAllVideosForUser(id);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Avatar sx={{ height: 150, width: 150 }} />
        <p style={{ fontWeight: 700, fontSize: "20px" }}>
          {firstName + " " + lastName}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "16px",
        }}
      >
        {userVideos.map((video) => (
          <div
            key={video.url}
            style={{
              aspectRatio: 9 / 16,
              width: "30%",
              paddingInline: "12px",
              paddingBottom: "24px",
              display: "flex",
            }}
          >
            <VideoCard videoDetails={video} name={"kek"} isCompact={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProfilePage;
