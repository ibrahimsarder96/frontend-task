import React from 'react';
import './Card.css';
import { SiBookstack} from "react-icons/si";
import {  AiOutlineLink } from "react-icons/ai";
import {  TbMessages } from "react-icons/tb";
import {  BiCalendar} from "react-icons/bi";
const Card = ({data}) => {

  const {id, img1,img2, img3, img4, name, client} = data;

  const linkAdd= (data) =>{
    window.alert('Modal Open')
  }
  return (
    <div id='child-card'>
      <div className='top-img'>
        <div>
        <img id='img-fast' src={img1}  alt="" />
        <h4>{client}</h4>
        </div>
        <div>
        <img id='img-sec' src={img2}  alt="" />
        <h4>{name}</h4>
        </div>
      </div>
      <section className='mid-part'>
        <div>
          <p><SiBookstack /> Lorem ipsum dolor...</p>
        </div>
        <div>
          <p className='or'><span><BiCalendar/></span>1/2</p>
        </div>
      </section>
      <section className='end-part'>
      <img id='img-rd' src={img4}  alt="" />
      <img id='img-th' src={img3}  alt="" />
      <p id='increase'>12+</p>
      <p id='mess'><span><TbMessages/></span>15</p>
     <button onClick={linkAdd} >
     <p id='link'><span><AiOutlineLink/></span>25</p>
     </button>
      <p id='cal'><span><BiCalendar/></span>30-12-22</p>
      </section>
    </div>
  );
};

export default Card;