import React from 'react';
import './App.css'
//---------My Components---------
import Follow, {UserToFollow} from './components/follow';
import Header from './components/navbar';
import AllHistorys,{History} from './components/historys';
import Post from './components/post';
import images from './components/img/images'


function App() {
  return (
    <>
    <Header image={images[0].userImg}/>

    {/*------These are the suggestions of frends--------*/}
    <Follow myName="Chris Daniel" myUserName="chr1s__" myImg={images[0].userImg}>
            {images.map((el,index)=> <UserToFollow key={index + '-' + el.user} image={el.userImg} name={el.user}  type="Suregerencias para ti"/>)}
    </Follow>

    {/*------Here are the historys--------*/}
    <AllHistorys>
           {images.map((el,index)=> <History key={index + '-' + el.user} imageProfile={el.userImg} userName={el.user}/>)}
            <History imageProfile={images[1].userImg} userName="punteroww"/>
            <History imageProfile={images[1].userImg} userName="programer"/>
            <History imageProfile={images[1].userImg} userName="theemprendedor"/>
            <History imageProfile={images[1].userImg} userName="martingala"/>
            <History imageProfile={images[1].userImg} userName="tradersof"/>
            <History imageProfile={images[1].userImg} userName="unnicque"/>
            <History imageProfile={images[1].userImg} userName="morivivi01"/>
    </AllHistorys>

    {/*------The posts--------*/}
    {images.map((el,index)=> <Post key={index + '-' + el.user} userImg={el.userImg} userName={el.user} postImg={el.url} caption="this is a example" likes="45.200" time="7 HORAS"account="chr1__" />)}
   </>
  );
}

export default App;
