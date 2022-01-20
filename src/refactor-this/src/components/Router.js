import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";


function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" render={() => (
                    window.location.search.includes('?') ? (
                        <Home />
                    ) : (
                        <Redirect to="/?category=nature" />
                    )
                )} />
            </Switch>

        </BrowserRouter>
    );
}
export default Router;
