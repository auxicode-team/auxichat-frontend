import React from "react";
import ChatUserSelfCard from "../components/ChatLeftSideBar/ChatUserSelfCard";
import ContactInfo from "../components/ContactMedia/ContactInfo";
import ContactMedia from "../components/ContactMedia/ContactMedia";

const chat = () => {
  return (
    <div className="min-h-screen grid grid-cols-12 gap-5">
      {/* LEFT SIDE BAR START */}
      <div className=" col-span-3 flex flex-col">
        <div className="bg-[#E3F6FC] h-32 rounded-b-lg p-5">
          <ChatUserSelfCard />
        </div>
        <div className="bg-[#E3F6FC] mt-4 h-full rounded-t-lg"></div>
        <div className="bg-[#E3F6FC] h-20"></div>
      </div>
      {/* LEFT SIDE BAR END */}

      <div className="bg-red-100 col-span-6"></div>

      {/* right sidebar started */}

      <div className="bg-[#E3F6FC] col-span-3 ">
        <ContactInfo />
        <ContactMedia />
      </div>
    </div>
  );
};

export default chat;
