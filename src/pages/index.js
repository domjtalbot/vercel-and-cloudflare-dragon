import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  return (
    <main>
      <Helmet>
        <title>Dragon</title>
      </Helmet>
      <h1>Dragon</h1>
      <img src="https://media.giphy.com/media/3owvJXPRVdfvynuxZS/giphy.gif" />
    </main>
  );
}

export default Index;
