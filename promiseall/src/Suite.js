import React from "react";
import ContentLoader from "react-content-loader";

const Loader = () => (
  <ContentLoader
    height={120}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="10" y="44" rx="3" ry="3" width="350" height="6" />
    <rect x="5" y="20" rx="3" ry="3" width="380" height="6" />
    <rect x="12" y="71" rx="3" ry="3" width="201" height="6" />
  </ContentLoader>
);

export default function Suite({ suiteCode, suiteDetails, onClick }) {
  return (
    <div>
      {suiteCode && suiteDetails ? (
        <React.Fragment>
          <h2>Suite: {suiteCode}</h2>
          <h4>{suiteDetails || "Loading..."}</h4>
        </React.Fragment>
      ) : (
        <div style={{ maxWidth: 400 }}>
          <Loader />
        </div>
      )}
    </div>
  );
}
