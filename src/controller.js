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
    // // const menu = model.data;
    //
    // console.log(itemMenu);

    const showContent = () => {
      console.log("click")
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
