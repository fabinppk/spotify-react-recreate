import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPuglin from 'reactotron-redux-saga';

if (process.env.REACT_APP_NODE_ENV === 'development') {
    const tron = Reactotron.configure({
        name: 'Spotify Recreate',
        host: '0.0.0.0'
    })
        .use(reactotronRedux())
        .use(sagaPuglin())
        .connect();

    tron.clear();
    console.tron = tron;
}
