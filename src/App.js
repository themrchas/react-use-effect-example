import  React, { useState } from 'react'

//import Card from './components/UI/Card';
import PageHeader from '../src/components/PageHeader'
import Login from '../src/components/Login'




function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);

   return (

     <React.Fragment>
        <PageHeader loggedIn={isLoggedIn}/> 

        {! isLoggedIn ? <Login /> : <div>yes - money</div> }
    
    </React.Fragment>

    
  );
}

export default App;
