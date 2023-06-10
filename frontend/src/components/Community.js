import { useState, useEffect } from "react";
import classes from "./Community.module.css";
import CommunityVideoCard from "./CommunityVideoCard";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { getCommunityVideos } from "../backend/helpers";

const Community = () => {
  const { userData } = useContext(AuthContext);
  const [communityVideos, setCommunityVideos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filterNum, setFilterNum] = useState(1);

  const getVideos = async () => {
    setIsLoading(true);
    const videos = await getCommunityVideos(userData.id, filterNum);
    setCommunityVideos(videos);
    setIsLoading(false);
  };

  useEffect(() => {
    getVideos();
  }, [filterNum]);

  if (isLoading) {
    return (
      <div className={classes.loaderSpinnerWrapper}>
        <div className={classes.loaderSpinner}></div>
      </div>
    );
  }

  if (communityVideos === null || communityVideos.length === 0) {
    return (
      <div className={classes.noContentDiv}>
        <div className={classes.noContentDivBorder}>
          <p>No new content!</p>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.mainDiv}>
      <div className={classes.selectDiv}>
        <select
          defaultValue={1}
          className={classes.selectOption}
          onChange={(e) => setFilterNum(e.target.value)}
        >
          <option value="1">Last 24h</option>
          <option value="7">Last week</option>
          <option value="30">Last month</option>
        </select>
      </div>
      <div className={classes.contentDiv}>
        {communityVideos.map((video) => (
          <CommunityVideoCard videoDetails={video} key={video.videoID} />
        ))}
      </div>
    </div>
  );
};

export default Community;
