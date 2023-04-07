import React from "react";

const Interests = () => {
  return (
    <section className="px-10">
      <div className="flex items-center justify-between mb-4 mt-6">
        <div>
          <h1 className="text-text text-base font-bold uppercase">Interests</h1>
        </div>
        <div>
          <button className="bg-primary text-white rounded-md text-sm h-7 w-20 hover:bg-[#F3AA61] duration-150">
            Edit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Interests;
