"use client";

import type {NextPage} from "next";
import {useParams, notFound} from 'next/navigation'

import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import ClientDetails from "@/app/components/ClientDetails";
import {useEffect, useState} from "react";
import {IClient} from "@/app/types/client";
import axiosInstance from "@/app/HTTPServices/axiosInstance";

const Post: NextPage = () => {
  const {id} = useParams();

  const [client, setClient] = useState<IClient | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  const getData = async () => {
    setLoading(true);
    try {
      const {data} = await axiosInstance.get("/users/" + id);
      setClient(data);
    } catch (err) {
      let error = err;
      return console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!loading && !client) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header/>

      <main className="pt-[120px] grow">
        <Container>
          {loading ? (
            <p>Loading...</p>
          ) : client ? (
            <ClientDetails client={client} />
          ) : (
            <p>No client data available</p>
          )}
        </Container>
      </main>

      <Footer/>
    </div>
  );
};

export default Post;
