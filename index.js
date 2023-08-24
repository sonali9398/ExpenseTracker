import React from 'react';
import  ReactDOM  from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from './context/Context';
import {SpeechProvider} from '@speechly/react-client'

ReactDOM.render(
    <>
        <SpeechProvider appId='364c41db-80ed-4910-941a-3cd565016b62' language="en-us">
            <Provider>
                <App/>
            </Provider>
        </SpeechProvider>
        
    </>,
document.getElementById('root'));