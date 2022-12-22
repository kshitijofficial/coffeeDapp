import React, { useEffect, useState } from "react";

export default function Home() {
  const [resourceType, setResourceType] = useState("posts");

  console.log("Hahah");
  // useEffect(() => {
  //   console.log("render");//changes everytime you render
  // });
  useEffect(() => {
    console.log("resourceType changed"); //first time as resourceType changed from nothing to post + changes everytime resourceType changed
  }, [resourceType]);
  // useEffect(() => {
  //   console.log("On Mount or in starting"); //changes everytime resourceType changed
  // }, []);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setResourceType("posts");
          }}
        >
          Posts
        </button>
        <button
          onClick={() => {
            setResourceType("users");
          }}
        >
          Users
        </button>
        <button
          onClick={() => {
            setResourceType("comments");
          }}
        >
          Comments
        </button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

//deploy on server
//metamask account change functionality + tesnet change functionality
//withdraw button functionality check
//ppt link
///github link
