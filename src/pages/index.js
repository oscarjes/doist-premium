import React from "react";
import Link from "gatsby-link";
import Hero from '../components/hero';
import Feature from '../components/feature';
import Device from '../components/device';
import Share from '../components/share';
import Collaborate from '../components/collaborate';
import Ontrack from '../components/ontrack';

const IndexPage = () => (
  <div className="">
    <Hero />
    <Feature />
    <Device />
    <Share />
    <Collaborate />
    <Ontrack />
  </div>
);

export default IndexPage;
