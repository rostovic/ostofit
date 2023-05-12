export const loginUser = async (username, password) => {
  const response = await fetch(`http://localhost:5000/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  if (data.status === "success") {
    const userData = data.data.userData;
    return userData;
  }
  return "false";
};

export const getAllDataNumbers = async (id) => {
  const response = await fetch(`http://localhost:5000/home?id=${id}`, {
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
  const response = await fetch(`http://localhost:5000/requests`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  const data = await response.json();
  if (data.status === "success") {
    console.log("kek");
  }
  return;
};

export const getAllFollowersForUser = async (id) => {
  const response = await fetch(`http://localhost:5000/followers?id=${id}`, {
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
  const response = await fetch(`http://localhost:5000/following?id=${id}`, {
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
  const response = await fetch(
    `http://localhost:5000/profile/${username}?id=${id}`,
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

export const getMyProfileData = async (username) => {
  const response = await fetch(
    `http://localhost:5000/profile?username=${username}`,
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

export const findUsers = async (username, id) => {
  const response = await fetch(
    `http://localhost:5000/findUsers?username=${username}&id=${id}`,
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
