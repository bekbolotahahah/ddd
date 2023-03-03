import React from "react";
import PieChart from "../components/Cirecle";
import Histogram from "../components/Diograms";
import LineChartExample from "../components/LastDiogramm";

import Vdiogram from "../components/Vdiogram";

const Card = () => {
  return (
    <div className="h-[100vh] w-full m-5 ">
      <div className="mb-8 flex flex-wrap gap-6">
        <div className="flex items-center h-96 bg-white rounded-lg shadow-xs bg dark:bg-slate-400">
        <LineChartExample/>
        </div>
        <div className="flex items-center h-96 bg-white rounded-lg shadow-xs bg dark:bg-slate-400">
          <Vdiogram />
        </div>
      </div>
      <div className="h-1/2 w-1/2 p-7 flex items-center  bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <PieChart />
      </div>
    </div>
  );
};

export default Card;
