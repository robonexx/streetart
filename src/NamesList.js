import React from 'react';
import NamesItem from './NamesItem';

import './list.scss';

export default function NamesList(props) {
  return (
    <ul className='namesList'>
     {props.children}
    </ul>
  );
}
