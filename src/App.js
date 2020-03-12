import React from 'react';


function App(){
    return(
        <div style={{background:'url(\'https://media0.giphy.com/media/nGoljTCmVNBK/source.gif\')',backgroundSize:"cover", width:'100vw',height:'100vh'}}>
            <img style={{position:"absolute",right:"40%",left:"40%",width:"20%",top:"35%",bottom:"25%"}} src="https://upload.wikimedia.org/wikipedia/commons/6/6e/JoJo%27s_Bizarre_Adventure_logo.png"/>
            <img style={{height:400,position:"absolute",bottom:"0"}} src="https://66.media.tumblr.com/1deb9b74b6660569e628eabd3df74917/tumblr_o3f40io5ay1sh11j9o1_500.gifv"/>
            <img style={{height:'400px',transform:'rotate3d(0,1,0,180deg)',position:"absolute",bottom:"0",right:"0"}} src="https://vignette.wikia.nocookie.net/deathbattle/images/8/80/JotaroSprite.gif/revision/latest/top-crop/width/220/height/220?cb=20180228220938"/>

        </div>
    );
}
export default App;