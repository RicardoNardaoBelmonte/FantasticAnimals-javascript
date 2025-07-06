import initTabNav from './module/tabNav.js';
initTabNav();

import initScrollSuave from './module/scrollSuave.js';
initScrollSuave();

import initAnimacaoScroll from './module/animacaoScroll.js';
initAnimacaoScroll();

import initAcordionList from './module/acordionList.js';
initAcordionList();

import initModal from './module/modal.js';
initModal();

import initToolTip from './module/toolTip.js';
initToolTip();

import initDropDownMenu from './module/dropdownMenu.js';
initDropDownMenu();

import initMenuMobile from './module/menuMobile.js';
initMenuMobile();

import initFuncionamento from './module/funcionamento.js';
initFuncionamento();

import initFetchAnimais from './module/fetchAnimais.js';
initFetchAnimais();

import initFetchBitcoin from './module/fetchBitcoin.js';
initFetchBitcoin();

import SlideNav from './module/slides.js';
const slide = new SlideNav('.slide', '.div-slide');
slide.init();
slide.addControl('.custom-controls');
