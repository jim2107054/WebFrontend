import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  const showItem = () => {
    setToggle(true);
  };
  console.log(toggle);
  return (
    <div className="bg-gray-800 h-[50vh]">
      <div>
        {toggle && (
          <p className="bg-green-500 text-white text-center p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            natus corporis nihil tenetur voluptate amet quasi delectus ullam
            consectetur repudiandae porro veritatis ipsam! Est sed ab ex
            consequuntur, reprehenderit asperiores!
          </p>
        )}
        <div className="flex justify-center items-center gap-2 mt-20">
          {/* Fixed the onClick handler to invoke the showItem function */}
          <button
            onClick={() => showItem()}
            className="bg-yellow-500 border-[1px] rounded-lg"
          >
            show
          </button>
          <button
            onClick={() => {
              setToggle(false);
            }}
            className="bg-yellow-500 border-[1px] rounded-lg"
          >
            hide
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
