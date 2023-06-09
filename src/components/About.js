import React from "react";
import { useState } from "react";
import Nav from "./Nav";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";

export default function About({ selectedScreen, setSelectedScreen }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const bgColor = isDarkMode ? "bg-gray-800" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-gray-800";

  const handleModeChange = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <div>
      <div className={`min-h-screen ${bgColor} ${textColor}`}>
        <header className={`py-4 ${textColor}`}>
          <div className='container mx-auto flex justify-between items-center px-4'>
            <Nav
              selectedScreen={selectedScreen}
              setSelectedScreen={setSelectedScreen}
              isDarkMode={isDarkMode}
            />
            <div
              className='w-6 h-6 rounded-full cursor-pointer'
              onClick={handleModeChange}>
              {isDarkMode ? (
                <span className='text-gray-600 hover:text-white cursor-pointer'>
                  Light mode
                </span>
              ) : (
                <span className='text-gray-400 hover:text-gray-800 cursor-pointer'>
                  Dark mode
                </span>
              )}
            </div>
          </div>
        </header>
        <section className='container mx-auto py-10'>
          <h1 className='text-3xl font-bold mb-4'>About ReelSeek</h1>
          <p className='mb-6'>
            ReelSeek is a platform that allows users to search for their
            favorite movies and find out where to watch them. Our mission is to
            make it easy for movie enthusiasts to discover and access their
            preferred content across various streaming platforms.
          </p>
          <p className='mb-6'>
            With ReelSeek, you can search for movies by title, genre, or actor,
            and we'll provide you with a list of streaming services where you
            can watch them. Say goodbye to endless scrolling and searching
            across multiple platforms—ReelSeek has got you covered!
          </p>
          <p>
            Start exploring your favorite movies today and make the most of your
            streaming subscriptions.
          </p>
        </section>

        <section className='container mx-auto py-10 text-center'>
          <h2 className='text-3xl font-bold mb-4'>Contact</h2>
          <p className='text-lg mb-6'>
            ReelSeek was created for development and portfolio purposes. Connect
            with me and explore my other projects.
          </p>
          <div className='flex justify-center mb-4'>
            <a
              href='https://www.linkedin.com/in/matt-chisholm10/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center text-blue-300 hover:text-blue-500 mr-4'>
              <FaLinkedin className='w-6 h-6' />
              <span className='ml-2'>LinkedIn</span>
            </a>
            <a
              href='https://github.com/Matt-Chisholm'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center text-blue-300 hover:text-blue-500 mr-4'>
              <FaGithub className='w-6 h-6' />
              <span className='ml-2'>GitHub</span>
            </a>
            <a
              href='mailto:mathesonchisholm@hotmail.com'
              className='flex items-center text-blue-300 hover:text-blue-500'>
              <img
                src='https://img.icons8.com/ios-filled/50/000000/email.png'
                alt='Email icon'
                className='w-6 h-6'
              />
              <span className='ml-2'>mathesonchisholm@hotmail.com</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
