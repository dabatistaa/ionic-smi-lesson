import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { IonContent, IonLabel, IonTitle, IonFooter } from '@ionic/react';

import Parrafo from './Parrafo';
import Header from './Header';
import Footer from './Footer';

import AppContext from "../AppContext";
import capitalize_first_letter from '../Helpers/capitalize';

const Informe = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const data = useContext(AppContext);
  const { id } = useParams();
  const target = data.filter(post => post.id === id);

  const { titulo, fecha, entrega, contenido, autor, puesto } = target[0];

  return (
    <>
      <IonContent>
        <Header />
        <div className="mx-5 my-4">
          <IonTitle size="large" className="text-2xl text-center text-green-700">{ capitalize_first_letter( titulo ) }</IonTitle>
          <IonTitle size="small" className=" text-center mb-4 text-teal-400">{fecha && 'Para leer el sábado,'} {`${fecha}`}</IonTitle>
          <IonTitle size="small" className="text-center mb-4 text-blue-400">{entrega}</IonTitle>

          <Parrafo nota={contenido} />

          <div>
            <IonLabel className="block text-center text-teal-400">{autor}</IonLabel>
            <IonLabel className="block text-center text-blue-400">{puesto}</IonLabel>
          </div>
        </div>
        <Footer />
      </IonContent>
    </>
  )
}

export default Informe;
