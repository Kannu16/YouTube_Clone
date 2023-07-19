import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ButtonList = () => {
  const myTogglemenu = useSelector(store => store.toggle.isMenuOpen);
  const countryname = ["IN", "BD", "Brazil", "Canada", "Colombia", "Ethiopia", "FI", "GP", "IQ", "NZ", "SG", "LK"];


  const buttonList = ["All", "Mixes", "Music", "Lo fi", "ComputerPrograming", "BollywoodMusic", "Live", "Mantras", "Cricket", "Editing", "Javascript", "Motivation"];

  return (
    <>
      <div className='position-fixed p-2 youtube-buttonList-container bg-light w-100' style={{ marginLeft: myTogglemenu ? "13%" : "5%", zIndex: "4" }}>
        {countryname.map((item, index) => (
          <Link
            key={index}
            className='btn mx-2 youtube-buttonList'
            style={{ backgroundColor: index === 0 ? "black" : "", color: index === 0 ? "#fff" : "" }}
          >
            {buttonList[index]}
          </Link>
        ))}
      </div>
    </>
  );
};

export default ButtonList;
