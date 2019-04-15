import React, { useEffect, useState } from "react";

// import axios from "axios";
import Suite from "./Suite";

function App() {
  const [suites, setSuites] = useState([
    {
      suiteCode: "",
      somePrice: 0,
      availability: 0
    }
  ]);
  const [suiteContent, setContent] = useState([]);
  const fetchData = async () => {
    let data;
    await fetch("http://100.115.92.195:5000/", {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      return (data = res.json());
    });
    // console.log("data", await data);

    setSuites(await data);
  };

  const fetchContent = async () => {
    let data;
    await fetch("http://100.115.92.195:4000/", {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      return (data = res.json());
    });

    setContent(await data);
  };
  const fetchBoth = async () => {
    let content;
    let suites;
    Promise.all([
      await fetch("http://100.115.92.195:4000/", {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        return (content = res.json());
      }),
      await fetch("http://100.115.92.195:5000/", {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        return (suites = res.json());
      })
    ]);
    setSuites(await suites);
    setContent(await content);
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // useEffect(() => {
  // fetchContent();
  // }, []);
  useEffect(() => {
    fetchBoth();
  }, []);

  return (
    <ul>
      {suites.length > 0 &&
        suites.map(suite => (
          <Suite
            key={suite.suiteCode}
            suiteCode={suite.suiteCode}
            suiteDetails={
              suiteContent.length > 0 &&
              suiteContent.find(
                content => content.suiteCode === suite.suiteCode
              ).detail
            }
            onClick={() =>
              suiteContent.length > 0 &&
              console.log(
                suiteContent.find(
                  content => content.suiteCode === suite.suiteCode
                ).detail
              )
            }
            // suiteDetails={
            //   state.suiteContent.find(
            //     content => content.suiteCode === suite.suiteCode
            //   ).detail || ""
            // }
          />
        ))}
      {/* {suiteContent.map(content => (
        <li key={content.suiteCode}>{content.detail}</li>
      ))} */}
    </ul>
  );
}

export default App;
