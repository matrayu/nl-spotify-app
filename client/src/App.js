import { useEffect, useState } from 'react';
import { accessToken, logout, getCurrentUserProfile } from './spotify';
import './App.css';

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);
  
  useEffect(() => {
    setToken(accessToken)

    const fetchData = async () => {
      try {
        const { data } = await getCurrentUserProfile();
        setProfile(data);

        console.log(data)

      } catch (e) {
        console.error(e);
      }
    }

    fetchData();

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!token ? (
          <a className="App-link" href="http://localhost:8888/login">
            Log in to Spotify
          </a>
        ) : (
          <>
            <h1>Logged in!</h1>
            <button onClick={logout}>Log Out</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
