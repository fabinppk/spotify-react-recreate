import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Analytics from 'react-router-ga';
import './config/reactotron';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import ErrorBox from './components/ErrorBox';
import { Wrapper, Container, Content } from './styles/components';
import store from './store';
import Routes from './routes';

const App = () => (
    <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
            <Analytics id="UA-48509443-12">
                <Wrapper>
                    <Container>
                        <Sidebar />
                        <Content>
                            <ErrorBox />
                            <Header />
                            <Routes />
                        </Content>
                    </Container>
                    <Player />
                </Wrapper>
            </Analytics>
        </BrowserRouter>
    </Provider>
);

export default App;
