import React from 'react';
import './ProfileInfo.css';

export default function ProfileInfo() {
  return (
    <aside className="profile-info">
      <img 
        src="/images/foto profile.jpg" 
        alt="Foto Fuadi Dhiyaulhaq" 
        className="profile-avatar"
      />
      <div className="profile-details">
        <h2>FUADI DHIYAULHAQ</h2>
        <p className="location">Padang, Sumatera Barat, Indonesia</p>
        <p className="contact">
          efdeyeee@gmail.com | +6282315211425
        </p>
        <p className="linkedin">
          LinkedIn: <a href="https://linkedin.com/in/fuadi-dhiyaulhaq" target="_blank" rel="noreferrer">linkedin.com/in/fuadi-dhiyaulhaq</a>
        </p>
      </div>
    </aside>
  );
}
