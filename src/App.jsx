import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { logo } from '/src/assets';

import ArticleHero from './components/article/Hero';
import ArticleDemo from './components/article/Demo';
import YoutubeHero from './components/youtube/Hero'
import YoutubeDemo from './components/youtube/Demo'


import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <header className="w-full flex justify-center items-center flex-col">
          <nav className="flex justify-between items-center w-full mb-10 mt-5 scroll-pt-36">
            <img
              src={logo}
              alt="sumz_logo"
              className="w-28 object-contain"
            />

            <button
              type="button"
              onClick={() => window.open('https://github.com/bimprakosoo/article-summarize')}
              className="black_btn"
            >
              Github
            </button>
            <button
              type="button"
              onClick={() => window.open('/youtube', "_self")}
              className="red_btn"
            >
              Youtube
            </button>
          </nav>
          <Routes>
            <Route path="/" element={<div><ArticleHero /><ArticleDemo /></div>} />
            <Route path="/youtube" element={<div><YoutubeHero /><YoutubeDemo /></div>} />
          </Routes>
        </header>
      </div>
    </main>
    </BrowserRouter>
  )
}

export default App