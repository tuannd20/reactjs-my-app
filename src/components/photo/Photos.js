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
      console.log(images);
      setRandomPhotos(images);
    });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-5">
      {randomPhotos.map((item, index) => (
        <div key={item.id} className="p-3 bg-white shadow-md rounded-lg">
          <img src={item.download_url} alt={item.author} />
        </div>
      ))}
    </div>
  );
};

export default Photos;
