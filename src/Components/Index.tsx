import React, { useContext, ReactText } from 'react';
import { IonApp, IonContent, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import AppContext from '../AppContext';
import Header from './Header';

// import capitalize_first_letter from '../Helpers/capitalize'

const Index = ({ history }) => {

  const data: any = useContext(AppContext);

  return (
    <IonApp>
      <IonContent>
        <Header />
        <IonList>
          {
            data.map((item: { numero: number; id: ReactText; titulo: ReactText; subtitulo: ReactText; fecha: ReactText; type: string; }) => {

              if (item.type === 'leccion') {

                return (
                  <IonCard
                    className="shadow-md rounded-md bg-white max-w-sm justify-center items-center mx-auto"
                    key={item.numero || item.id}
                    onClick={e => {
                      e.preventDefault();
                      history.push(`/leccion/${ item.numero }`)
                    }}
                  >
                    <IonCardHeader>
                      <IonCardTitle className="font-bold text-xl mb-2 text-gray-800">{ item.titulo }</IonCardTitle>
                      <IonCardSubtitle className="inline-block bg-teal-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{ item.fecha }</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCard>
                )

              } else if (item.type === 'informe') {

                return (
                  <IonCard
                    className="shadow-md rounded-md bg-white max-w-sm justify-center items-center mx-auto"
                    key={item.numero || item.id}
                    onClick={e => {
                      e.preventDefault();
                      history.push(`/informe/${ item.id }`)
                    }}
                  >
                    <IonCardHeader>
                      <IonCardTitle className="font-bold text-xl mb-2 text-gray-800">{ item.titulo }</IonCardTitle>
                      <IonCardSubtitle className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{ item.fecha }</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCard>
                )

              }

              return null;


            })
          }
        </IonList>
      </IonContent>
    </IonApp>
  )
}

export default Index;
