import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextProvider from './components/Context/ContextProvider';
import{LoadScript} from'@react-google-maps/api';
// import ContextProvider from './components/Context/GoogleWraper';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
          <ContextProvider>
            <LoadScript
             googleMapsApiKey='AIzaSyAoJwUr3rjwlC4FgP7eDnU6OpvQkzmCj-8'
             libraries={['places','directions']}
            >
                <App />
            </LoadScript>
          </ContextProvider>
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
