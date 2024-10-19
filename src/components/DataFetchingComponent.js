// src/components/DataFetchingComponent.js

import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import ChartComponent from './ChartComponent';

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'healthData'));
      const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(fetchedData);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.length === 0 ? <p>No data available</p> : <ChartComponent data={data} />}
    </div>
  );
};

export default DataFetchingComponent;
