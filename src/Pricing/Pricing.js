import React, { Component } from 'react';
import OneColumnPage from '../OneColumnPage/OneColumnPage';
import HeaderWrapper from '../HeaderWrapper/HeaderWrapper';
import PricingContent from '../PricingContent/PricingContent';

class Pricing extends Component {
  render() {
    return (
      <OneColumnPage>
        <HeaderWrapper />
        <PricingContent />
      </OneColumnPage>
    );
  }
}

export default Pricing;
