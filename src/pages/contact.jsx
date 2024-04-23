import React, { useState } from 'react';
import Header from '../component/header';
import Main from '../component/main';

const Contact = () => {
  const [title, setTitle] = useState("Contact");
  const [paragraphVisible, setParagraphVisible] = useState(true);

  return (
    <div className="bg-gradient-to-br from-green-500 to-blue-500 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-white mb-8">{title}</h1>
        <div className="max-w-lg bg-white rounded-lg overflow-hidden shadow-2xl shadow-black">
        <div className="p-6">
            {paragraphVisible && (
              <p className="text-lg text-gray-800 leading-relaxed text-center p-4">
                This is the content of the home page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus velit at justo ullamcorper, eget rhoncus dolor tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris eget libero eu nisi aliquam accumsan sit amet ut odio. Fusce malesuada, ligula vel vestibulum ullamcorper, mi sapien consectetur dolor, id vulputate leo nunc vel ligula. Nulla facilisi. Aenean porttitor libero in arcu laoreet, in lacinia orci volutpat. Sed at purus elit. Suspendisse potenti. Duis vitae arcu odio. Quisque aliquet urna ac bibendum aliquam. Duis auctor vehicula fermentum.
              </p>
            )}
            <div className='text-center text-3xl'>
              <Main toggleParagraphVisibility={() => setParagraphVisible(!paragraphVisible)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
