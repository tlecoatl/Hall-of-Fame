import './App.css';
import Random from './zord.js';

function Home () {
  let audio = new Audio("/Theme.mp3")

  const start = (e) => {
    e.preventDefault();
    audio.play()
  }

  const stop = (e) => {
    e.preventDefault();
    audio.pause()
  }

  return (
    <div onMouseEnter={start} onMouseLeave={stop}>

      <header> Welcome!</header>
      <h1>Megazord of the Day!</h1>

      <Random />
    </div>
  );
};

export default Home;