import './App.css';

import { Switch, Route } from 'react-router';

import IndexPage from './pages/IndexPage/IndexPage';
import CoursesPage from './pages/CoursesPage/CoursesPage';

function App() {
  return (
    <Switch>
      <Route path = '/' exact render = { () => <IndexPage/> } />
      <Route path = '/courses' render = { () => <CoursesPage/> } />
    </Switch>
  );
}

export default App;
