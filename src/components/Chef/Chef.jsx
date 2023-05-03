import React, { useEffect, useState } from "react";
import SingleChef from "./SingleChef/SingleChef";

const Chef = () => {
  const [chefData, setChefData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/chef")
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);

  return (
    <div
      className="py-20"
      style={{
        backgroundImage: `url('https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/pattern-home.jpg')`,
      }}
    >
      <h1 className="text-4xl font-serif  text-center  font-semibold">
        Best Chef in China
      </h1>
      <h3 className="text-xl font-mono text-orange-500 text-center  font-bold mb-14">
        Top in the world..
      </h3>
      <div className="containeR grid grid-cols-1 lg:grid-cols-3 gap-5 ">
        {chefData.map((cd) => (
          <SingleChef chef={cd} key={cd.id} />
        ))}
      </div>
    </div>
  );
};

export default Chef;
