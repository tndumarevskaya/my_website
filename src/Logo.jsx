import React from 'react';
import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <div>
        <NavLink to="/start_page">
            <img  src="./sources/Sims4.png" width="100%"/>
        </NavLink>
    </div>
  );
}

export default Logo;
