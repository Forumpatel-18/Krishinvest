import React, { useState, useRef, useEffect } from 'react';
import { links } from './data';

const navbar = () => {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-transparent">
        <a className="navbar-brand" href="/">
          <img src="/images/icon1.png" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav navleft">
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li className="nav-item" key={id}>
                      <a className="nav-link" href={url}>{text}</a>
                    </li>
                  );
                })}
            </ul>
        </div>
      </nav>

    </>
  );
};

export default navbar;
