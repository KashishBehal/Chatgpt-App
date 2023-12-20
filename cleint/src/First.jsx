import React from 'react';
import App from './App';





class  First extends React.Component{
     handleClick=()=>{
        App();
    };
    render(){
    return(
        <div>
<h1  className='h'>ℍ𝕖𝕣𝕖'𝕤 𝕪𝕠𝕦𝕣 ℙ𝕖𝕣𝕤𝕠𝕟𝕒𝕝𝕚𝕤𝕖𝕕 𝔹𝕠𝕥</h1>
<h1 className='i'>Any Question?   </h1>
<div className="container">
  Make 
  <div className="flip">
    <div><div>wOrK</div></div>
    <div><div>lifeStyle</div></div>
    <div><div>Everything</div></div>
  </div>
  AweSoMe!
</div>
<div className='side'>
<button className='b' >Scroll Down </button>
<img src="new.png" className='s'></img>
</div>


<App/>
        </div>
       
    );
};}
export default First;