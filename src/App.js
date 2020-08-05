import React, { useEffect, useState } from 'react';

const App = () => {

  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://hn.algolia.com/api/v1/search?query=reacthooks');

      result
        .json()
        .then(result => setData(result))
        .catch(e => console.log(e))
    }
    fetchData()
  }, []);

  console.log(data)

  return (
    <div className="container">
      <h1>Fetch Data with React Hooks</h1>
      <div className="contain-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {data.hits.map(item =>
              <tr key={item.objectID}>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <a className="button" target='_blank' href={item.url} rel="noopener noreferrer">Read</a>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
