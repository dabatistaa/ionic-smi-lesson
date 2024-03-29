import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import './theme/main.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';

import { data } from './lecciones.json';

import AppContext from './AppContext';

import Index from './Components/Index';
import Leccion from './Components/Leccion';
import Informe from './Components/Informe';

const App = () => {

  return (
    <AppContext.Provider value={ data } >
      <IonicApp />
    </AppContext.Provider>
  );
};

const IonicApp = () => {

  return (
    <>
      <IonApp >
        <IonReactRouter>

          <IonRouterOutlet id="main">
            <Route path="/" component={ Index } exact />
            <Route path="/leccion/:numero" component={ Leccion } exact />
            <Route path="/informe/:id" component={ Informe } exact/>
          </IonRouterOutlet>

        </IonReactRouter>
      </IonApp>
    </>
  )
}

export default App;
