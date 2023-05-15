import React from "react";

import { Notification } from "@mantine/core";

import { logo } from "../assets";
import Image from "next/image";

const Hero = () => {
  const [show, setShow] = React.useState(true);

  const showNotification = () => {
    setShow(true);
  };
  return (
    <>
      <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
          <Image src={logo} alt='sumz_logo' className='w-48 object-contain' />

          <button
            type='button'
            onClick={showNotification}
            className='black_btn'>
            Login
          </button>
        </nav>

        <h1 className='head_text'>
          Summarize Articles with <br className='max-md:hidden' />
          <span className='orange_gradient '>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
          Simplify your reading with SnapBrief AI, an open-source article
          summarizer that transforms lengthy articles into clear and concise
          summaries
        </h2>
      </header>

      {show && (
        <Notification
          onClose={() => setShow(false)}
          className='absolute top-2 right-3'>
          This feature is in beta, please try again later
        </Notification>
      )}
    </>
  );
};

export default Hero;
