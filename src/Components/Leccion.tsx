import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";

import Pregunta from "./Pregunta"
import Parrafo from './Parrafo'
import Header from './Header'
import Footer from './Footer'

import AppContext from "../AppContext";
import { IonContent, IonLabel, IonTitle } from "@ionic/react";

const Leccion = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const data = useContext(AppContext)

  let { numero } = useParams();

  numero = numero > 0 ? numero : 0
  const target = data.filter(e => e.numero === numero)[0];

  const { titulo, subtitulo, fecha, introduccion, preguntas, adicional } = target;

  return (
    <>
      <IonContent className="p-1 mx-5 my-4">
        <Header />
        <div className="mx-5 my-4">
          <IonLabel className="inline-block bg-teal-100 rounded-full px-3 py-1 text-base font-semibold text-gray-700 mb-3">Lección {numero}</IonLabel>
          <IonTitle size="large" className="my-1 text-2xl text-center text-green-700">{titulo}</IonTitle>
          <IonLabel className=" block mb-2 text-center text-teal-400" >{subtitulo}</IonLabel>
          <IonLabel className="mb-4 text-blue-400"><em>{fecha}</em></IonLabel>
          <Parrafo nota={introduccion} />
          <Pregunta preguntas={preguntas} />

          {
            adicional.contenido.length > 0 ?

              <>
                <IonTitle size="small" className="text-center mt-4 mb-1 text-blue-400 underline" >
                  {adicional.contenido.length > 0 ? 'Estudio adicional' : null}
                  {adicional.titulo ? `- ${adicional.titulo}` : null}
                </IonTitle>
                {(adicional.contenido.length > 0) ? <Parrafo nota={adicional.contenido} /> : null}
              </>

              :

              null
          }


        </div>
        <Footer />
      </IonContent>

    </>
  )
}


export default withRouter(Leccion)
