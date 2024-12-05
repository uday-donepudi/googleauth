import { useState } from 'react'
import './App.css'
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import GoogleAuth from './components/GoogleAuth';
import WelcomePage from './components/Welcome';
function App() {
  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    try {
      await signOut(auth); 
      setUser(null); 
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div>
      {!user ? (
        <GoogleAuth onLogin={(userData) => setUser(userData)} />
      ) : (
        <div>
          <WelcomePage user={user} />
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  )
}

export default App
