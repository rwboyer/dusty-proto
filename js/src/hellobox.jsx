// Import React and HelloText class
import React from 'react';
import HelloText from './hellotext.jsx';

// Create class called HelloBox that extends the base React Component class
export default class HelloBox extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div>
            <HelloText name="Dan" />
        </div>
    }
}
