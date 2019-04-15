import React, { useEffect, useState } from "react";
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
  const fetchData = fetch("http://100.115.92.195:5000/", {
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    return res.json();
  });

  const fetchContent = fetch("http://100.115.92.195:4000/", {
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    return res.json();
  });

  const fetchBoth = async () => {
    Promise.all([fetchData, fetchContent]).then(values => {
      setSuites(values[0]);
      setContent(values[1]);
    });
  };

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
          />
        ))}
    </ul>
  );
}

export default App;
