import * as ReactDOM from 'react-dom';
import * as React from 'react';

import { RouterComponent } from './router';
import { configureStore } from './store/store';

export const store = configureStore();

ReactDOM.render(
    <RouterComponent
        store={store} />,
    document.getElementById('root')
);
