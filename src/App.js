import './App.css';
import {useState, useEffect } from 'react';
import axios from 'axios';
import GifList from './components/GifList';
import SelectedGif from './components/SelectedGif';

const api_key = "";

function App() {
  const [gifList, setGifList] = useState()
  const [selectedGif, setSelectedGif] = useState()
  const [query, setQuery] = useState("")

  useEffect(() => {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${query}&limit=5&offset=0&rating=g&lang=en`)
    .then((res) => res.data)
    .then((data) =>{
      setGifList(data.data)
    })
  }, [query])

  const handleChangeQuery = (e) =>{
      setQuery(e.target.value)
  }
  
  return (
    <div className="App">
      <SelectedGif src={selectedGif}/>
      <div className="GifListContainer">
        <input className="GifListInput" onChange={handleChangeQuery} placeholder="faites votre recherche ici"/>
        <GifList list={gifList} selected={setSelectedGif}/>
      </div>
    </div>
  
  );
}

export default App;
