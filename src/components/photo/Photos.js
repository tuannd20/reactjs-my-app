import React, { useEffect, useState } from "react";
import axios from "axios";

const getRandomPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      // console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);

  useEffect(() => {
    getRandomPhotos().then((images) => {
      setRandomPhotos(images);
    });
  }, []);

  console.log(typeof randomPhotos);

  return (
    <div>
      {randomPhotos.map((item, index) => (
        <div key={item.id}>{item.id}</div>
      ))}
    </div>
  );
};

export default Photos;
