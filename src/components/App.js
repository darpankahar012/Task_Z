import React, { lazy, Suspense } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

const Index = lazy(() => import("./Home"));

function App() {
    return (
        <div className="App">
            <Router>
                <Suspense fallback={load}>
                    <Switch>
                        <Route exact path="/" render={(props) => <Index {...props} />} />
                        {/* <Route exact path="/signup" render={(props) => <Signup {...props} />} /> */}
                    </Switch>
                </Suspense>
            </Router>
        </div>
    )
}

export default App