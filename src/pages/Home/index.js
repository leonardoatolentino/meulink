import {FiLink} from 'react-icons/fi';
import './home.css'

function Home() {
  return (
    <div className="container-home">
      
      <div className="logo">
        <img src="/logo.png" alt="Encurtador de links" />
        <h1>Encurtador de URL</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input 
            placeholder='Cole seu link aqui...'
          />
        </div>

        <button>Encurtar link</button>
      </div>
    </div>
  );
}

export default Home;