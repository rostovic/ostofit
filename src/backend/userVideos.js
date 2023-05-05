export const userVideos = [
  {
    videos: [
      {
        url: "https://clips.clippit.tv/rkaklx/360.mp4",
        title: "SOOOON GOOAAAAAAAAAAAALLLLLLLLL!!!",
      },
      {
        url: "http://techslides.com/demos/sample-videos/small.mp4",
        title: "Lego bastard",
      },
      {
        url: "https://assets.codepen.io/6093409/river.mp4",
        title: "Swimming in the river",
      },
    ],
    id: 1,
  },
  {
    videos: [
      {
        url: "http://techslides.com/demos/sample-videos/small.mp4",
        title: "Lego bastard",
      },
    ],
    id: 2,
  },
  {
    videos: [
      {
        url: "https://assets.codepen.io/6093409/river.mp4",
        title: "Swimming in the river",
      },
    ],
    id: 3,
  },
  {
    videos: [
      {
        url: "https://clips.clippit.tv/rkaklx/360.mp4",
        title: "SOOOON GOOAAAAAAAAAAAALLLLLLLLL!!!",
      },
    ],
    id: 4,
  },
  {
    videos: [],
    id: 5,
  },
  {
    videos: [],
    id: 6,
  },
];

export const getAllVideosForUser = (id) => {
  const user = userVideos.find((user) => user.id === id);
  return user.videos;
};
