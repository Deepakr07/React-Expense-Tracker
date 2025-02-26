import { useState } from "react";

const Tooltip = ({ amount, children, isText = false }) => {
  
  const [showTooltip, setShowTooltip] = useState(false);
  const result = isText? amount: "$"+amount
  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}

      {showTooltip && amount.toString().length > 6 && (
        <div
          style={{
            position: "absolute",
            top: "-1.5rem",
            left: "0",
            backgroundColor: "#333",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "0.9rem",
            whiteSpace: "nowrap",
            zIndex: 10,
          }}
        >
          {result}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
