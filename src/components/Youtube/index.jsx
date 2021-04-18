import axios from "axios";
import React, { useEffect } from "react";

const Youtube = () => {
  const API_TOKEN = "AIzaSyAj5Jgxnvmi2kaZRra3hFtkfHC4lQcSMbE";
  const getAPIdata = async () => {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?access_token=${API_TOKEN}&search=reactjs`,
      {
        Authorization: `Bearer ${API_TOKEN}`
      }
    );
    console.log("RESPONSE FROM YOUTUBE:", response);
  };
  useEffect(() => {
    getAPIdata();
  });
  return <h2>Hello Youtube</h2>;
};

export default Youtube;
