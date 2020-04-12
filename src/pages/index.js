import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
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
