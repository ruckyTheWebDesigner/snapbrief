"use client";

import React from "react";
import Hero from "./Hero";
import Demo from "./Demo";

function HomePage() {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Demo />
      </div>
    </main>
  );
}

export default HomePage;
