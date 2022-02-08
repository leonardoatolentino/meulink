import './menu.css';
import {BsGithub,BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu(){
  return(
    <div className='menu'>
      <a className='social' target="_blank" href='https://github.com/leonardoatolentino'>
        <BsGithub  color='#fff' size={25}/>
      </a>
      <a className='social' target="_blank" href='https://www.linkedin.com/in/leonardo-tolentino-218118213/'>
        <BsLinkedin  color='#fff' size={25}/>
      </a>
      <Link className='menu-item' to="/links">
      Meus Links
      </Link>
    </div>
  );
}