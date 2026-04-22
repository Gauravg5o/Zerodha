import React from "react";

function Team() {
  return (
    <div className="conatiner">
      <div className="row p-3 mt-5  border-top">
        <h1 className=" text-center ">People</h1>
      </div>

      <div
        className="row p-3  text-muted fs-6"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder,CEO </h6>
        </div>
        <div className="col-6 p-3">
          <p>
            {" "}
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p> Playing basketball is his zen.</p>
          <div className="d-flex align-items-center flex-wrap">
            <p className="mb-0 me-2">Connect on</p>
            <a href="#" className="text-primary text-decoration-none me-2">
              Homepage
            </a>
            <span className="me-2">/</span>
            <a href="#" className="text-primary text-decoration-none me-2">
              TradingQnA
            </a>
            <span className="me-2">/</span>
            <a href="#" className="text-primary text-decoration-none">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
