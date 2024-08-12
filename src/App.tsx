import axios from 'axios';
import React from 'react';

function App() {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const uploadFile = files[0]
      const formData = new FormData()
      formData.append(uploadFile.name, uploadFile)
      axios.post('https://jsonplaceholder.typicode.com/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        console.log(res);
      })
    }
  }


  return (
    <div className="App">
      <input type="file" name='myFile' onChange={handleFileChange} />
    </div>
  );
}

export default App;
