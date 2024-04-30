import React from "react";
import "./Fees.css";

const Fees = () => {
  return (
    <div className="fee_main">
      <div className="fee_head">
        <h2>
          FEES
          <br />
          STRUCTURE
        </h2>
        <div className="fee_total">
          <h1>25</h1>
          <p>
            Lacs
            <br />
            INR
          </p>
        </div>
        <p>
          Our fees system is dynamic based on
          <br />
          first entrant getting maximum concession
        </p>
      </div>
      <table>
        <tr>
          <th>
            Applicant
            <br />
            Class
          </th>
          <th>
            Application
            <br />
            Period
          </th>
          <th>
            Maximum
            <br />
            Concession
          </th>
          <th>
            Fee After
            <br />
            Concession
          </th>
          <th>
            More
            <br />
            on it
          </th>
        </tr>
        <tr>
          <td>
            <h1>
              Early <span>Bird</span>
            </h1>
          </td>
          <td></td>
          <td>
            <p>
              20%
              <br />
              You Save.
            </p>
          </td>
          <td></td>
          <td>Request Fee Breakdown</td>
        </tr>
        <tr>
          <td>
            <h1>
              Mid <span>Eagle</span>
            </h1>
          </td>
          <td></td>
          <td>
            <p>
              20%
              <br />
              You Save.
            </p>
          </td>
          <td></td>
          <td>Download Payment Schedules</td>
        </tr>
        <tr>
          <td>
            <h1>
              Late <span>Riser</span>
            </h1>
          </td>
          <td></td>
          <td>
            <p>
              20%
              <br />
              You Save.
            </p>
          </td>
          <td></td>
          <td>Read Fee Policies</td>
        </tr>
      </table>
    </div>
  );
};

export default Fees;
