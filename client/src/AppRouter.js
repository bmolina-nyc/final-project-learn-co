import { BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import Header from '../src/components/Header';
import LoginPage from '../src/components/LoginPage';
import MainHomepage from '../src/components/MainHomepage';
import UserProfilePage from '../src/components/UserProfilePage';
import UserContentPage from '../src/components/UserContentPage';  
import NotFoundPage from '../src/components/NotFoundPage';  
import HelpPage from '../src/components/HelpPage';
// import Redux from '../src/components/Redux'  
 
  
  const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
          <Switch>
            <Route path="/" component={LoginPage} exact={true}/>  
            <Route path="/homepage" component={MainHomepage} />
            <Route path="/profile" component={UserProfilePage} />
            <Route path="/content" component={UserContentPage} />
            <Route path="/help" component={HelpPage} />
            
            <Route component={NotFoundPage} />
          </Switch>
      </div>
    </BrowserRouter>
  )
  
export default AppRouter;


  // <Route path="/redux" component={Redux} />