import React, { useEffect, useState } from "react";

const Body = () => {
  const [datainfo, setdatainfo] = useState([]);

  const fetchdata = async () => {
    const data = await fetch("https://www.reddit.com/r/reactjs.json");

    const json = await data.json();

    // console.log(json.data.children);

    setdatainfo(json.data?.children);
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className=" mx-auto p-4 bg-gray-100 min-h-screen w-full">
      <h1 className="text-4xl font-bold text-center p-4 bg-white rounded mb-6">
        ReactJS Reddit Posts
      </h1>
      <div className="flex flex-wrap bg-gray-200 justify-between overflow-hidden">
        {datainfo.map((item) => (
          <div className="p-4 m-4 shadow bg-white border" key={item.data.id}>
            <h1 className="text-3xl">{item.data?.title}</h1>
            {item.data?.selftext_html ? (
              <p
                className="p-2 m-2 text-justify "
                dangerouslySetInnerHTML={{ __html: item.data?.selftext_html }}
              ></p>
            ) : (
              <p className="p-2 m-2 ">(No Discription)</p>
            )}
            <a
              className="p-2 m-2 text-blue-600 hover:underline text-lg"
              href={item.data?.url}
              target="blank"
            >
              view the url
            </a>
            <p className="p-2 m-2 text-lg ">Score : {item.data?.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
