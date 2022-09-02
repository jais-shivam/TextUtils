import React, { useState } from "react";

export const About = () => {
    const [myStyle,setMyStyle]= useState({
        color:'black',
        backgroundColor:'white'
    })
    const [btnText,setBtnText]=useState('Switch to Dark Mode')

    const toggleMode=()=>{
        if(myStyle.backgroundColor==='white'){
            setMyStyle({
                color:'white',
                backgroundColor:'black'
            });
            setBtnText('Switch to Light Mode')
        }else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            });
            setBtnText('Switch to Dark Mode')
        }
    }

  return (
    <>
      <div className="container my-3" style={myStyle}>
      <h2>About Us</h2>
        <p>
          About Learn more about the team maintaining Bootstrap, how and why the
          project started, and how to get involved.
        </p>
        <p>
          Team Bootstrap is maintained by a small team of developers on GitHub.
          We’re actively looking to grow this team and would love to hear from
          you if you’re excited about CSS at scale, writing and maintaining
          vanilla JavaScript plugins, and improving build tooling processes for
          frontend code.
        </p>
        <div className="container my-3">
        <button type="button" className="btn btn-warning" onClick={toggleMode}>{btnText}</button>
        </div>
      </div>
    </>
  );
};
