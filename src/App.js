import React from 'react';

const App = () => {
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
            <tr>
              <td>Title 1</td>
              <td>Author 1</td>
              <td>
                <a class="button" target='_blank' href='https://www.google.com/'>Read</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
