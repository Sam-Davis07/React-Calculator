import React from "react";

const History = ({ history }) => {
  return (
    <div className="history hide-scrollbar">
      <h3>History</h3>
      <ul>
        {history.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
