import React, { Component } from 'react';

import { routes } from '../routes';

export class App extends Component {
    render() {
        return(
            <div>
                {routes}
            </div>
        )
    }
}