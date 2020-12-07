import React, { useState } from 'react';
import './QrChecked.scss';
import { AiOutlineCheck } from 'react-icons/ai';
import {BiChevronRight} from 'react-icons/bi';
import Load from './../../pages/load/Load'
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import perfil from './../../assets/darlan.jpg';

function QrChecked() {
  const [count, setCount] = useState(0);
  setTimeout(() => {
    setCount(2000);
  }, 2000);
  if(count < 2000){
    return <Load />
  }
  else {
    return (
      <>
        <Link className="format" to="/" >
          <Avatar size="100" round={true} src={perfil} />
          {/* <img className="img-info" src="https://media.tenor.com/images/c7ee1b613a7ddf98ed7c564029bd9c32/tenor.gif"></img> */}
          <p className="info">AUTENTICADO COM</p>
          <p className="info-sub">SUCESSO</p>
          <AiOutlineCheck color="#00D6D6" size="150" />
        </Link>
      </>
    );
  }
    
  }

export default QrChecked;
