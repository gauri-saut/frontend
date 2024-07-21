import React, { useEffect, useState } from 'react';
import axios from 'axios';



const App = () => {
  const [data, setData] = useState([]);

  const NewApi = import.meta.env


  const fetchData = async () => {
    try {
      const newdata = await axios.get(NewApi.VITE_API);
      

      setData(newdata.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };





  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.courseName}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
