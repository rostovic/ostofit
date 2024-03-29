// export const BACKEND_URL = "https://ostofit.onrender.com";
export const BACKEND_URL = "http://localhost:5000";

export const createNewAccount = async (
  firstName,
  lastName,
  username,
  password
) => {
  const response = await fetch(`${BACKEND_URL}/createNewAccount`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ firstName, lastName, username, password }),
  });

  const data = await response.json();

  if (data.status === "success") {
    return "success";
  }
  return "error!";
};

export const loginUser = async (username, password) => {
  const response = await fetch(
    `${BACKEND_URL}/login?username=${username}&password=${password}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  const data = await response.json();
  if (data.status === "success") {
    const userData = data.data.userData;
    return userData;
  }
  return "Invalid credentials!";
};

export const refreshUserData = async (username) => {
  const response = await fetch(
    `${BACKEND_URL}/refreshUserData?username=${username}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  const data = await response.json();
  if (data.status === "success") {
    const userData = data.data.userData;
    return userData;
  }
  return;
};

export const getAllDataNumbers = async (id) => {
  const response = await fetch(`${BACKEND_URL}/home?id=${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();
  if (data.status === "success") {
    const numberData = data.data[0];
    return numberData;
  }
  return;
};

export const getAllFollowerRequests = async (id) => {
  const response = await fetch(`${BACKEND_URL}/requests?id=${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  if (data.status === "success") {
    return data;
  }
  return;
};

export const actionRequest = async (action, myID, userID) => {
  const response = await fetch(`${BACKEND_URL}/acceptDeclineRequest`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ action, myID, userID }),
  });
  const data = await response.json();
  if (data.status === "success") {
    return "success";
  }
  return "error";
};

export const getAllFollowersForUser = async (id) => {
  const response = await fetch(`${BACKEND_URL}/followers?id=${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  if (data.status === "success") {
    return data;
  }
  return [];
};

export const getAllFollowingForUser = async (id) => {
  const response = await fetch(`${BACKEND_URL}/following?id=${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  if (data.status === "success") {
    return data;
  }
  return [];
};

export const getProfileData = async (username, id) => {
  const response = await fetch(`${BACKEND_URL}/profile/${username}?id=${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  if (data.status === "success") {
    return data;
  }
  return [];
};

export const getMyProfileData = async (username) => {
  const response = await fetch(`${BACKEND_URL}/profile?username=${username}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  if (data.status === "success") {
    return data;
  }
  return [];
};

export const findUsers = async (username, id) => {
  const response = await fetch(
    `${BACKEND_URL}/findUsers?username=${username}&id=${id}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  if (data.status === "success") {
    return data;
  }
  return [];
};

export const getFollowerShorts = async (id) => {
  const response = await fetch(`${BACKEND_URL}/findShorts?id=${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  if (data.status === "success") {
    return data;
  }
  return [];
};

export const updateUserData = async (username, profilePic, description, id) => {
  const response = await fetch(`${BACKEND_URL}/updateUserData`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ username, profilePic, description, id }),
  });

  const data = await response.json();
  if (data.status === "success") {
    return "success";
  }
  return "error!";
};

export const updateUserDataWithoutUsername = async (profilePic, id) => {
  const response = await fetch(`${BACKEND_URL}/updateUserDataWithoutUsername`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ profilePic, id }),
  });

  const data = await response.json();
  if (data.status === "success") {
    return "success";
  }
  return "error!";
};

export const checkIfUsernameIsNotTaken = async (username) => {
  const response = await fetch(
    `${BACKEND_URL}/checkIfUsernameIsNotTaken?username=${username}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  const data = await response.json();
  if (data.status === "success") {
    return "success";
  }
  return "error";
};

export const getVideoData = async (videoID, myID) => {
  const response = await fetch(
    `${BACKEND_URL}/getVideoData?videoID=${videoID}&myID=${myID}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  const data = await response.json();
  if (data.status === "success") {
    return data.data[0];
  }
  return "error";
};

export const getCommentsData = async (videoID, myID) => {
  const response = await fetch(
    `${BACKEND_URL}/getCommentsData?videoID=${videoID}&myID=${myID}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  const data = await response.json();
  if (data.status === "success") {
    return data.data;
  }
  return "error";
};

export const postComment = async (comment, videoID, myID) => {
  const response = await fetch(`${BACKEND_URL}/postComment`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ comment, videoID, myID }),
  });
  const data = await response.json();
  if (data.status === "success") {
  }
  return;
};

export const likeComment = async (identifier, status, commentID, myID) => {
  const response = await fetch(`${BACKEND_URL}/likeDislikeComment`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ identifier, status, commentID, myID }),
  });
  const data = await response.json();
  if (data.status === "success") {
  }
  return;
};

export const subUnSubToUser = async (
  isSubscribed,
  myID,
  userUsername,
  requestSent
) => {
  const response = await fetch(`${BACKEND_URL}/subUnSubToUser`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ isSubscribed, myID, userUsername, requestSent }),
  });
  const data = await response.json();
  if (data.status === "success") {
  }
  return;
};

export const likeDislikeVideo = async (videoID, myID, liked) => {
  const response = await fetch(`${BACKEND_URL}/likeDislikeVideo`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ videoID, myID, liked }),
  });
  const data = await response.json();
  if (data.status === "success") {
  }
  return;
};

export const uploadVideo = async (formData, username, title) => {
  const response = await fetch(`${BACKEND_URL}/uploadVideo`, {
    method: "POST",
    body: formData,
    headers: {
      token: username,
      title: title,
    },
  });
  const data = await response.json();
  if (data.status === "success") {
    return "success";
  }
  return "error";
};

export const deleteVideo = async (videoID) => {
  const response = await fetch(`${BACKEND_URL}/deleteVideo`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ videoID }),
  });

  const data = await response.json();
  return;
};

export const getCommunityVideos = async (myID, filterNum) => {
  const response = await fetch(
    `${BACKEND_URL}/getCommunityVideos?myID=${myID}&filterNum=${filterNum}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  const data = await response.json();
  if (data.status === "success") {
    return data.data;
  }
  return [];
};
