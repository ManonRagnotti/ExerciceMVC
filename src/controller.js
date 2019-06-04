import React from 'react';
import model from './model.json';


class Controller extends React.Component {

    // const itemsMenu = document.querySelectorAll('a');
    //
    // itemsMenu.forEach(function(itemMenu) {
    //   model.data.addEventListener('click', (e) => {
    // });
    //
    //
    //

    //
    // console.log(itemMenu);

    static showContent = (event) => {

        const items = Array.from(document.querySelectorAll('a'));

        // items.forEach((item) => {
        //     const index = item.getAttribute('index');
        //     console.log(index);
        // });
        console.log(items);
        for (let i = 0; i < items.length; i++) {
            const index = items[i].getAttribute('index');
            console.log(index);
            if (index === 0 ) {
                return model.data[0].content;
                console.log(model.data[0].content);
            }
            else if (index === 1 ) {
                return model.data[1].content;
                console.log(model.data[1].content);
            }
            else if (index === 2 ) {
                return model.data[2].content;
                console.log(model.data[2].content);
            }
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
}

export default Controller;


//   const itemsDesktopNext = ['#video_1373570320'];
//   const scrollTo = document.querySelector('#group_1001079493');
//   const itemsMobile = ['#image_860901733', '#image_363991042', '#image_226040006', '#image_232767218', '#image_1681904390'];
//   const itemsMobileNext = ['#video_1373570320', '#video_1351019835', '#video_1537348107', '#podcast-1', '.fs-navigation-footer-wrapper'];
//   let actualScroll;
//   const offsetNextSibling = getElementOffset(scrollTo).top;
//
// for (let i = 0; i < menu.length; i++) {
//   const ArrayItemMenu = Array.from(menu[i].name);
//   const itemMenu = ArrayItemMenu.spl
//
//   console.log(itemMenu)
//
//   // menu[1].name.addEventListener('click', (e) => {
//   //   console.log('click')
//   // });
// }


// menu.forEach((item) => {
// model.data.addEventListener('click', (e) => {
// 		if (!isSmallMedia()) {
// 			e.preventDefault();
// 			const elemNext = document.querySelector(itemsDesktopNext[index]);
// 			const elemOffsetTop = getElementOffset(elemNext).top;
// 			const windowHeight = window.innerHeight /2;
// 			actualScroll = window.scrollY;
// 			const scrollTo = elemOffsetTop - windowHeight;
// 			if (actualScroll < scrollTo) {
// 				scrollToY(elemOffsetTop - windowHeight);
// 			}
// 		}
// 	});
// });
