import FAQ from './components/FAQ';
import Header from './components/Header';
import Hero from './components/Hero';
import SongList from './components/SongList';
import SongPlay from './components/SongPlay';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <SongList type='albums/top' name='Top Albums' />
      <SongList type='albums/new' name='New Albums' />
      <hr style={{ border: '1px solid #34C94B' }} />
      <SongList type='songs' name='Songs' />
      <hr style={{ border: '1px solid #34C94B' }} />
      <FAQ />
      <hr />
      <SongPlay />
    </div>
  );
}

export default App;
