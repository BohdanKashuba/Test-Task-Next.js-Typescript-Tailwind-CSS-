import React from "react";

import Image from "next/image";

import ClientLogo from "../../assets/images/logo.svg";

import { IClient } from "../../types/client";

const Card: React.FC<IClient> = ({ name, address, company, email }) => {
  return (
    <div className="flex flex-col items-center min-w-[300px] mx-6 p-5 rounded-xl cursor-pointer scale-75 transition-all bg-gradient-to-r from-orange-200 to-green-200 hover:scale-100 focus:scale-100">
      <Image src={ClientLogo} alt={company.name} className="mt-5 w-[75px]" />
      <h6 className="text-lg my-2 italic">{name}</h6>
      <p className="text-lg underline">Info</p>
      <div>
        <p>City: {address.city}</p>
        <p>Street: {address.street}</p>
        <p>Company: {company.name}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default Card;
