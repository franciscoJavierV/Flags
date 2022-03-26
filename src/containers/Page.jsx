import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getData, getActualData } from '../actions/index';
import '../assets/styles/Page.css';

export default function Pokedex() {
  const dispatch = useDispatch();
  const [offset, setoffset] = useState(0);
  const [input, setInput] = useState('');

  const handdleChange = e => {
    setInput(e.target.value);
  };

  const handdleInput = () => {
    dispatch(getActualData(input));
  };

  const getMore = () => {
    dispatch(getData(offset));
  };
  const getBack = () => {
    dispatch(getData(offset));
  };

  useEffect(() => {
    dispatch(getData());
    setoffset(15);
    // eslint-disable-next-line
    // eslint-disable-next-line
  }, []);
  return <div className="page"></div>;
}
