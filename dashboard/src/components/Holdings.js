// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { VerticalGraph } from "./VerticalGraph";
// import { holdings } from "../data/data";

// const Holdings = () => {
//   const [allHoldings, setAllHoldings] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3002/allHoldings").then((res) => {
//       setAllHoldings(res.data);
//     });
//   }, []);

//   const labels = holdings.map((subArray) => subArray["name"]);

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Stock Price",
//         data: holdings.map((stock) => stock.price),
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//       },
//     ],
//   };

//   return (
//     <>
//       <h3 className="title">Holdings ({holdings.length})</h3>

//       <div className="order-table">
//         <table>
//           <thead>
//             <tr>
//               <th>Instrument</th>
//               <th>Qty.</th>
//               <th>Avg. cost</th>
//               <th>LTP</th>
//               <th>Cur. val</th>
//               <th>P&L</th>
//               <th>Net chg.</th>
//               <th>Day chg.</th>
//             </tr>
//           </thead>

//           <tbody>
//             {holdings.map((stock, index) => {
//               const curValue = stock.price * stock.qty;
//               const isProfit = curValue - stock.avg * stock.qty >= 0.0;
//               const profClass = isProfit ? "profit" : "loss";
//               const dayClass = stock.isLoss ? "loss" : "profit";

//               return (
//                 <tr key={index}>
//                   <td>{stock.name}</td>
//                   <td>{stock.qty}</td>
//                   <td>{stock.avg.toFixed(2)}</td>
//                   <td>{stock.price.toFixed(2)}</td>
//                   <td>{curValue.toFixed(2)}</td>
//                   <td className={profClass}>
//                     {(curValue - stock.avg * stock.qty).toFixed(2)}
//                   </td>
//                   <td className={profClass}>{stock.net}</td>
//                   <td className={dayClass}>{stock.day}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       <div className="row">
//         <div className="col">
//           <h5>
//             29,875.<span>55</span>{" "}
//           </h5>
//           <p>Total investment</p>
//         </div>
//         <div className="col">
//           <h5>
//             31,428.<span>95</span>{" "}
//           </h5>
//           <p>Current value</p>
//         </div>
//         <div className="col">
//           <h5>1,553.40 (+5.20%)</h5>
//           <p>P&L</p>
//         </div>
//       </div>

//       <VerticalGraph data={data} />
//     </>
//   );
// };

// export default Holdings;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import { holdings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        // ✅ yahan apna backend URL rakho
        const res = await axios.get("http://localhost:3002/allHoldings");
        setAllHoldings(res.data || []);
      } catch (error) {
        console.error("Error fetching holdings:", error);
        setApiError("Server se data load nahi ho pa raha.");
      } finally {
        setLoading(false);
      }
    };

    fetchHoldings();
  }, []);

  // agar API se data mila hai to use karo, warna local holdings use karo
  const dataSource = allHoldings.length ? allHoldings : holdings;

  const labels = dataSource.map((item) => item.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: dataSource.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  if (loading) {
    return <p>Loading holdings...</p>;
  }

  return (
    <>
      <h3 className="title">
        Holdings ({dataSource.length})
      </h3>

      {apiError && (
        <p style={{ color: "orange", marginBottom: "10px" }}>{apiError}</p>
      )}

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {dataSource.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;

