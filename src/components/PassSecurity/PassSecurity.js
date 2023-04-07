import React from "react";

const PassSecurity = () => {
  return (
    <section className="px-10">
      <div>
        <div className="flex items-center justify-between mb-4 mt-6">
          <div>
            <h1 className="text-text text-base font-bold uppercase">
              password & Security
            </h1>
          </div>
          <div>
            <button className="bg-primary text-white rounded-md text-sm h-7 w-20 hover:bg-[#F3AA61] duration-150">
              Change
            </button>
          </div>
        </div>
        <div>
          <label
            for=""
            className="block py-3 text-text text-base font-semibold"
          >
            Password
          </label>
          <div className="flex items-center p-2 rounded-md bg-white">
            <input
              type="password"
              placeholder="*************"
              id=""
              className="w-full py-1 ml-2 outline-none text-sm"
            />
          </div>
        </div>
      </div>
      <hr className="mt-6" />
    </section>
  );
};

export default PassSecurity;
