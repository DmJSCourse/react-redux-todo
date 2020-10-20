import React from 'react';
import './Filters.scss';

const Filters = () => { 
  return (
    <div className="filters">
      <h2 className="filters__header">Filter The List:</h2>
       <span className="filters__filter">All</span>
       <span className="filters__filter">Completed</span>
       <span className="filters__filter">Unfinished</span>
    </div>
  )
}

export default Filters;
