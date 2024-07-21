import React, { useEffect, useState } from 'react';
import axios from 'axios';



const App = () => {
  const [data, setData] = useState([]);

  const NewApi = import.meta.env


  const fetchData = async () => {
    
      const Maindata = await axios.get(NewApi.VITE_API);

      setData(Maindata.data); 
    
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
