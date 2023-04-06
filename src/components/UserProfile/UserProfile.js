import React from "react";
import { MdEdit } from "react-icons/md";
import profileBg from "../../assets/images/profile_bg.png";

const UserProfile = () => {
  return (
    <section
      className="flex items-center justify-between bg-cover bg-center px-10 py-3"
      style={{
        background: `linear-gradient(to right, white, transparent),linear-gradient(to left, white, transparent), url(${profileBg})`,
      }}
    >
      <div className="flex items-center gap-6">
        <div className="relative">
          <img
            className="rounded-full w-16 h-16"
            src="https://lh3.googleusercontent.com/a/AGNmyxYkM0Pn5Ta3pRtW2adOBW-rELMto6E8bHTidDulUg=s96-c"
            alt=""
          />
          <div className="absolute -bottom-2 left-5">
            <MdEdit className="text-white bg-text rounded-full p-1 w-6 h-6" />
          </div>
        </div>
        <div>
          <h6 className="text-text text-xl">Hello,</h6>
          <h6 className="text-text text-2xl font-bold">Habid Hossen</h6>
          <h6 className="text-text text-base">habidhossen2@gmail.com</h6>
        </div>
      </div>
      <div>
        <h6 className="text-text text-base font-semibold">0 Followers</h6>
      </div>
    </section>
  );
};

export default UserProfile;
