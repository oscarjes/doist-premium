import React from "react";
import Link from "gatsby-link";
import Hero from '../components/hero';
import Feature from '../components/feature';
import Device from '../components/device';
import Share from '../components/share';

const IndexPage = () => (
  <div className="">
    <Hero />
    <Feature />
    <Device />
    <Share />
  </div>
);

export default IndexPage;
