import { useEffect, useState } from "react";
import "./dynamic.css";
import axios from "axios";
import searchIcon from "../../assets/searchIcon.png";
const Dynamic = () => {
  const [image, setImage] = useState("");
  const [resImageArr, setResImageArr] = useState([]);
  const apiRoot = "https://api.unsplash.com";
  const accessKey = process.env.REACT_APP_ACCESS_KEY;
  const res = async () => {
    try {
      const json = await axios.get(
        `${apiRoot}/search/photos?page=1&query=${image}&per_page=6&client_id=${accessKey}`
      );
      // console.log(json.data);
      setResImageArr(json.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    res();
  }, []);
  const handleClick = () => {
    res();
    setImage("");
  };
  const handleChange = (e) => {
    setImage(e.target.value);
  };
  //   console.log(resImageArr);

  return (
    <>
      <div className="dynamicContainer">
        {" "}
        <div className="search">
          <button onClick={handleClick}>
            <img src={searchIcon} alt="" />
          </button>
          <input
            value={image}
            onChange={handleChange}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleClick();
            }}
            type="text"
            name="photo"
            placeholder="Search images"
          />
        </div>
        <div className="imageContainer">
          {resImageArr.map((item) => {
            return (
              <div className="gridItem" key={item.id}>
                <img src={item.urls.small} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dynamic;
