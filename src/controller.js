import React from 'react';
import model from './model.json';


class Controller extends React.Component {


    static showContent = (index) => {

        const allItems = Array.from(document.querySelectorAll('a'));

        allItems.forEach((element, index) => {
            if (element.className === 'active') {
                element.classList.remove('active');
            }
        })

        //Récupère l'element click
        const element = index.target;
        //Retourne l'index de l'element click
        const indexElement = parseInt(element.getAttribute('index'));

        //Selection et affichage des div contenu
        const divContent = Array.from(document.querySelectorAll('.container div'));

        divContent.forEach((el, index) => {
            if (index === indexElement) {
                el.classList.add('activeContent');
                element.classList.add('active');

            } else {
                el.classList.remove('activeContent');
            }

        })

        // divContent.forEach((element, index) => {
        //     if (index === indexElement) {
        //         element.classList.add('active');
        //
        //     } else {
        //         element.classList.remove('active');
        //     }
        // })
        //
        // if (divContent.hasAttributes('data-paused')) {
        //
        // }
        // console.log(divContent);

    }

}

export default Controller;
