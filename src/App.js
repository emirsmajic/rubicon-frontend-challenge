import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { SearchContextProvider } from "./context/SearchContext"
import { TabContextProvider } from "./context/TabContext"
import { ThemeContextProvider } from "./context/ThemeContext"
import Homepage from "./pages/Homepage"
import Movie from "./pages/Movie"
import NotFound from "./pages/NotFound"
import TvShow from "./pages/TvShow"
import { GlobalStyle } from "./styles/global"
import { SiteContainer } from "./styles/utils"

export default function App() {
  return (
    <SiteContainer>
      <ThemeContextProvider>
        <TabContextProvider>
          <SearchContextProvider>
            <GlobalStyle />
            <Router>
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/movie/:id" component={Movie} />
                <Route path="/tv-show/:id" component={TvShow} />
                <Route component={NotFound} />
              </Switch>
            </Router>
          </SearchContextProvider>
        </TabContextProvider>
      </ThemeContextProvider>
    </SiteContainer>
  )
}
