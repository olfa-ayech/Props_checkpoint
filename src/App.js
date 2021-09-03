import './App.css';
import React from 'react';
import propTypes from "prop-types"
import ProfileComponent from './profile/profileComponent'

function App() {
  const alertName = name => {alert(name)}
  return (
    
    <>
    
  <ProfileComponent
        name="Olfa Ayech" 
        bio= "I'm Olfa , industrial computer engineer. Now i try to improve my web development skills by assistig a Full stack web development course. "
        profession="Industrial Computer engineer"
        alertName={alertName}

        >


<img src="./LLLL.jpg" className="w-full h-full object-center object-cover" alt=""/>



        </ProfileComponent>
  
    </>
  );
  ProfileComponent.propTypes = {
    name : propTypes.string,
    bio :  propTypes.string,
    profession:  propTypes.string,
}
}

export default App;
