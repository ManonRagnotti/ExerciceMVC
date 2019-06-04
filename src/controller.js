import React from 'react';
import model from './model.json';


class Controller {

    static showContent = (index) => {

        const element = index.target;
        const indexElement = parseInt(element.getAttribute('index'));

        // console.log(indexElement); //Retourne l'index de l'element click

        const content = model.data[indexElement].content;

        return model.data[indexElement].content;

        if (indexElement === 0) {
            return model.data[0].content;
            console.log(model.data[0].content);
        }


        // index.target.style.visibility = 'hidden';

        // const items = Array.from(document.querySelectorAll('a'));
        //
        // items.forEach((item) => {
        //     const index = item.getAttribute('index');
        //     console.log(index);
        // });
        // // console.log(item.getAttribute('index'));
        // for (let i = 0; i < items.length; i++) {
        //     const index = items[i].getAttribute('index');
        //     console.log(index);
            // if (index === 0 ) {
            //     return model.data[0].content;
            //     console.log(model.data[0].content);
            // }
            // else if (index === 1 ) {
            //     return model.data[1].content;
            //     console.log(model.data[1].content);
            // }
            // else if (index === 2 ) {
            //     return model.data[2].content;
            //     console.log(model.data[2].content);
            // }
        }
        // const menu = model.data;
        // console.log(menu);
        // menu.map(function(item, i) {
        //     for (let i = 0; i < menu.length; i++) {
        //         if (menu[i].name) {
        //             return menu[i].content
        //         }
        //     }
        //     return console.log(model.data[i].content)
        // });
}

export default Controller;
