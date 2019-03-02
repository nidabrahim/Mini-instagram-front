import React, { Component } from 'react';
import './style.css';

export const CallToActionComponent = (props)=>{
  return <section className="cta">
    <div className="cta-content">
      <div className="container">
        <h2>Stop waiting.<br />Start creating.</h2>
      </div>
    </div>
    <div className="overlay"></div>
  </section>
};