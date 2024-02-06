import React from "react";
import { Link } from 'react-router-dom';

import plus from '../../assets/plus-icon.svg'

const AddButton = () => {
  return (
    <Link to="/cities">
      <img src={plus} className="plus-icon" alt="add city" />
    </Link>
  ) 
}

export default AddButton