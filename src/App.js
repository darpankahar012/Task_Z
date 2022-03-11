import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import { suspenseFallbackLoader } from './components/Loader'

const Index = lazy(() => import("./components/Home"));
const Header = lazy(() => import("./components/Header/Header"));

function App() {
  let load = suspenseFallbackLoader()
  return (
    <div className="App">
      <Router>
        <Suspense fallback={load}>
          <Header />
          <Switch >
            <Route exact path="/" component={(props) => <Index {...props} />} />
            <Route exact path="/privacy" component={(props) => <Index {...props} />} />
          </Switch >
          <Footer />
        </Suspense>
      </Router>
    </div>
  )
}

export default App