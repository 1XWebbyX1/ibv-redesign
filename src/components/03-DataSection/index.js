import React, { Component } from 'react';
import ResearchSection from './00-ResearchSection'
import InsightSection from './01-InsightSection'

class DataSection extends Component {
  render() {
    return (
      <div className='Section'>
        <ResearchSection />
        <InsightSection />
      </div>
    );
  }
}

export default DataSection;
