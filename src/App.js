import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MediaQuery from 'react-responsive';
import Loadable from 'react-loadable';
import Loading from './LoadingComponent';

const App = () => (
  <div>
    <div>Device Test!</div>
    <MediaQuery query="(orientation: portrait)">
      <LoadableNarrow />
    </MediaQuery>
    <MediaQuery query="(orientation: landscape)">
      <LoadableWide />
    </MediaQuery>
    <MediaQuery query="(min-resolution: 2dppx)">
      <div>You are retina</div>
    </MediaQuery>
  </div>
);

const LoadableWide = Loadable({
  loader: () => import('./WideComponent'),
  loading: Loading,
});


const LoadableNarrow = Loadable({
  loader: () => import('./NarrowComponent'),
  loading: Loading,
});


export default App;
