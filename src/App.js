import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch , Route } from 'react-router-dom'
import { Container } from '@material-ui/core';

import './App.css';
import Cover from './Cover';
import Name from './Name';
import Num from './Num';

function App() {

  const rand_bg = () => {

    let index = Math.floor(Math.random() * 6);
    return index;

  }

  const bgSet = ["#1abc9c", "#3498db", "#9b59b6", "#f1c40f", "#e67e22", "#e74c3c"]
  const bgDefault = bgSet[rand_bg()];
  const [bg, setBg] = useState(bgDefault);

  const change_bg = () => {

    setInterval(() => {

      let index = rand_bg();
      setBg(bgSet[index]);

    }, 10000)

  }

  useEffect(() => {

    change_bg()

  },[])

  return (
    <>
      <Container 
        className="bg" 
        maxWidth="xl"
        maxHeight="xl"
        style={{ background: bg}}
      >

      <Router>
        <Switch>
          <Route path='/' exact component={Cover} />
          <Route path='/name' exact component={Name} />
          <Route path='/card-number' exact component={Num} />
        </Switch>
      </Router>
      </Container>
    </>
  );
}

export default App;
