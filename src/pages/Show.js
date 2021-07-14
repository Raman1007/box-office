import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();
  const [show, setShows] = useState(null);
  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
      setShows(results);
    });
  }, [id]);
  console.log('show', show);

  return <div>this is a show page</div>;
};

export default Show;
