import React from 'react';
import './header.css';

export default function Header() {
  return (
    <header className="App-header">
      <h1 className="reduce-spacing">Hello there!</h1>
      <h2 className="reduce-spacing-two"> My name is Karen.</h2>
      <h2>I design, code and bring your ideas to life.</h2>
      <nav>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/karengarzp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="App-link"
          href="https://github.com/karengarzap"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
