import React from 'react';

const BosslangLogo: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 250"
      className="w-full h-auto max-w-[800px]"
    >
      <defs>
        <style>
          {`
            .bosslang-text {
              font-family: 'Permanent Marker', cursive;
              font-size: 140px;
              fill: #ff5733;
              letter-spacing: 5px;
            }
          `}
        </style>
      </defs>
      {/* Background is transparent */}
      <text
        x="50%"
        y="55%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="bosslang-text"
      >
        BOSSLANG
      </text>
    </svg>
  );
};

export default BosslangLogo;
