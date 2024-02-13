import React from "react";
import { IClient } from "@/app/types/client";

interface ClientDetailsProps {
  client: IClient;
}

const ClientDetails: React.FC<ClientDetailsProps> = ({ client }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">{client.name}</h2>
      <div className="mb-4">
        <strong>Username:</strong> {client.username}
      </div>
      <div className="mb-4">
        <strong>Email:</strong> {client.email}
      </div>
      <div className="mb-4">
        <strong>Address:</strong> {client.address.street}, {client.address.suite}, {client.address.city}, {client.address.zipcode}
      </div>
      <div className="mb-4">
        <strong>Phone:</strong> {client.phone}
      </div>
      <div className="mb-4">
        <strong>Website:</strong> {client.website}
      </div>
      <div>
        <strong>Company:</strong> {client.company.name} - {client.company.catchPhrase} ({client.company.bs})
      </div>
    </div>
  );
};

export default ClientDetails;
