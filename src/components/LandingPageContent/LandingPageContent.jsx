import "./LandingPageContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button } from 'react-bootstrap';

const LandingPageContent = () => {
  return (
    <main className="main-container">
      {/* Hero Section */}
      <section className="hero flex-row-container">
        <div className="hero-left">
          <div className="hero-info space-S flex-col-container">

            <Typography variant="h1" component="div" gutterBottom>
             FunFocus 🚀
            </Typography>
            <p className="hero-content">
              FunFocus is your one stop platform for both fun and focus!
            </p>
            <div className="hero-info-btns flex-row-container">
              <Link to="/tasks">
                <Button variant="primary" >Go for tasks</Button>
              </Link>
              <Link to="/tasks">
              <Button variant="success">Have fun</Button>{' '}
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-right centered-flex-row-container">
          <img src="/assets/images/hero.png" style={{maxWidth:"100%"}}  alt=" Hero Image" />
        </div>
      </section>
    </main>
  );
};

export { LandingPageContent };
