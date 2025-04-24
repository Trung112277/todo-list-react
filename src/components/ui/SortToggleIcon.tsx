import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDownShortWide,
  faArrowUpShortWide,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonIcon } from './buttonIcon';

const SortToggleIcon = () => {
  const [asc, setAsc] = useState(true);

  const toggleSort = () => {
    setAsc((prev) => !prev);
  };

  return (
    <ButtonIcon onClick={toggleSort} className="text-green-500">
      <FontAwesomeIcon icon={asc ? faArrowDownShortWide : faArrowUpShortWide} />
    </ButtonIcon>
  );
};

export default SortToggleIcon;
