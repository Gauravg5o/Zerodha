import React from "react";

function LeftSection({
    imageURL,
    productName,
    productDesription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
         <div className="d-flex align-items-center">
  <a href={tryDemo} className="text-primary text-decoration-none me-4">
    Try Demo
  </a>
  <a href={learnMore} className="text-primary text-decoration-none">
    Learn More
  </a>
</div>

         <div className="d-flex align-items-center mt-3">
  <a href={googlePlay} className="me-3">
    <img src="media/googlePlayBadge.svg" alt="Google Play" />
  </a>
  <a href={appStore}>
    <img src="media/appstoreBadge.svg" alt="App Store" />
  </a>
</div>

        </div>
      </div>
    </div>
  );
}

export default LeftSection;