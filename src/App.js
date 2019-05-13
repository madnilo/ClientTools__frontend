import React, { Component } from 'react';
import Main from './components/Main'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from './state/Store'
import PartDetails from './components/PartDetails/';
import GlobalStyles from './components/__styles__/GlobalStyles'
import theme from './components/__styles__/DefaultTheme'
import styled, { ThemeProvider } from 'styled-components';
import ScrollToTop from './ScrollToTop'

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <StyledPage>
            <GlobalStyles />
            <div>
              <BrowserRouter>
                <ScrollToTop>
                  <div>
                    <Route exact path='/' component={Main} />
                    <Route path='/home' component={Main} />
                    <Route path='/details' component={PartDetails} />
                  </div>
                </ScrollToTop>
              </BrowserRouter>
            </div>
          </StyledPage>
        </ThemeProvider>
      </Provider>

    );
  }
}

export default App;

const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.black};
    display: flex;
    align-items: space-between;
    max-width: ${props => props.theme.maxWidth};
    @media (${props => props.theme.mobileScreen}){
        flex-direction: column;
    }
`;