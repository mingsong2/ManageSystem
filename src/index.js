import React from 'react';
import ReactDOM from 'react-dom';
import Route from './Route';

import { Provider } from 'mobx-react';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Route />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
