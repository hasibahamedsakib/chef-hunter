import React, { useEffect, useState } from "react";
import Loading from "../../pages/Loader/Loading";
import SingleChef from "./SingleChef/SingleChef";

const Chef = () => {
  const [chefData, setChefData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3001/chef")
      .then((res) => res.json())
      .then((data) => {
        setChefData(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div
      className="py-20"
      style={{
        backgroundImage: `url('https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/pattern-home.jpg')`,
      }}
    >
      <h3 className="text-xl font-mono text-orange-500 text-center  font-bold py-3">
        Best Chef in China
      </h3>
      <h1 className="text-5xl font-bold text-slate-800  text-center  mb-14">
        Top of the world
      </h1>

      <div className="containeR grid grid-cols-1 lg:grid-cols-3 gap-5 ">
        {chefData.map((cd) => (
          <SingleChef chef={cd} key={cd.id} />
        ))}
      </div>
    </div>
  );
};

export default Chef;
