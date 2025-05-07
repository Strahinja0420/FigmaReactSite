import React, { useEffect, useState } from "react";
import { Header, Info, Topics, Blog, Testimonials, Footer } from "./components";
import { client } from "./client";

const App = () => {

  const [posts,setPosts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "posts]';

    client.fetch(query).then((data) => {
      setPosts(data);
    })
  },[])

  return (
    <>
      <Header />
      <h1>{posts[0] && posts[0].title}</h1>
      <Topics />
      <Info />
      <Blog />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
