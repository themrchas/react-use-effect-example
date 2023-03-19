import  React, { useState, useEffect } from 'react'

//import Card from './components/UI/Card';
import PageHeader from '../src/components/PageHeader'
import Login from '../src/components/Login'


function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);

  const setLoginStatus = loginStatus => {

    console.log('App: setting login status to', loginStatus);

    setIsLoggedIn(loginStatus);

  };

  /*
  useEffect(
    () => {

    let count = 1;
       
       console.log('Executing useEffect');

       var intervalId = setInterval(() => {

        console.log('useEffect with intervalId',intervalId, 'count',count++, )
       }, 500);

       return () => {

        clearInterval(intervalId);

       };


   // },[]
    }
    
  )
*/

   return (

     <React.Fragment>

        <PageHeader isLoggedIn={isLoggedIn}/> 

        {! isLoggedIn ? <Login setLoginStatus={setLoginStatus}/> : <div>yes - money</div> }
    
    </React.Fragment>

    
  );
}

export default App;
