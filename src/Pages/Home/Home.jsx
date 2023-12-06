import React from 'react';
import './Home.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect( () => {
    fetch('Data.json')
    .then(res => res.json())
    .then(data => setData(data))
  },[]);

  const [information, setInformation] = useState([]);
  useEffect( () => {
    fetch('Information.json')
    .then(res => res.json())
    .then(data => setInformation(data))
  },[]);

  return (
    // parent card----------------------
    <div id='card'>
      {/* child card---------------------  */}
      <section className='card1'>
        <div className='card-header'>
          <div>
          <div id='r'></div>
          <h1>Incomplete</h1>
          </div>
          <p>0</p>
        </div>
        <div>
        {
        information.map(data => <Card
        key={data.id}
        data={data}
        ></Card>)
      }
        </div>
      </section>
      {/* child card---------------------  */}
      <section className='card1'>
      <div className='card-header'>
          <div>
          <div id='b'></div>
          <h1>To Do</h1>
          </div>
          <p>0</p>
        </div>
        <div>
        {
        data.map(data => <Card
        key={data.id}
        data={data}
        ></Card>)
      }
        </div>
      </section>
    {/* child card---------------------  */}
      <section className='card1'>
      <div className='card-header'>
          <div>
          <div id='y'></div>
          <h1>Doing</h1>
          </div>
          <p>0</p>
        </div>
        <div>
        {
        information.map(data => <Card
        key={data.id}
        data={data}
        ></Card>)
      }
        </div>
      </section>
    {/* child card---------------------  */}
      <section className='card1'>
      <div className='card-header'>
          <div>
          <h1>under Review</h1>
          </div>
          <p>0</p>
        </div>
        <div>
        {
        information.map(data => <Card
        key={data.id}
        data={data}
        ></Card>)
      }
        </div>
      </section>
      {/* child card---------------------  */}
      <section className='card1'>
      <div className='card-header'>
          <div>
          <h1>Completed</h1>
          </div>
          <p>0</p>
        </div>
        <div>
        {
        data.map(data => <Card
        key={data.id}
        data={data}
        ></Card>)
      }
        </div>
      </section>
      {/* child card---------------------  */}
      <section className='card1'>
      <div className='card-header'>
          <div>
          <h1>Overd</h1>
          </div>
          <p>0</p>
        </div>
        <div>
        {
        information.map(data => <Card
        key={data.id}
        data={data}
        ></Card>)
      }
        </div>
      </section>
    </div>
  );
};

export default Home;