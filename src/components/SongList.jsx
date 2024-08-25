import { useEffect, useState } from "react";
import SongCarousel from "./SongCarousel";
const BASE_URL = 'https://qtify-backend-labs.crio.do';

export default ({type, name}) => {
  const [songs, setSongs] = useState([])
  async function getSongs() {
    try {
      const res = await fetch(`${BASE_URL}/${type}`);
      const data = await res.json();
      setSongs(data);
      console.log('type, data', type, data);
    } catch (error) {
      console.log('err >>>', error);
    }
  }
  useEffect(() => {
    getSongs();
  }, [])
  return (
    <>
      <div className="d-flex justify-content-between mx-3">
      <p style={{fontWeight: 700}}>{name}</p>
      {type !== 'songs' && <a style={{fontWeight: 700, color: '#34C94B', textDecoration:'none'}} href="#">Show all</a>}
      </div>
      <SongCarousel songs={songs}/>
    </>
  );
};
