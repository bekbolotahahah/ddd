import React from "react";

const Loading = () => {
  return (
    <div className="mx-auto absolute left-auto right-auto">
      <div className="flex justify-center items-center p-9">
        <div className="w-12 h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-ping text-center">
            loading...
            orUndefind
        </div>
      </div>
    </div>
  );
};

export default Loading;
