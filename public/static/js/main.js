"use strict";

import { ResponseDataHTML } from "./Core/core.js";
import { CreateFood, Food } from "./Template/Menu.js";
import { CreateStore } from "./Core/Redux/Store.js";
import { ConfigureStore } from "./Core/Redux/ConfigureStore.js";
import { Reducer } from "./Core/Redux/Reducer.js";
import { SlidebarNav } from "./Template/Slidebar.js";
import { Header } from "./Template/Header.js";
import { Slidebar } from "./Template/Slidebar.js";

export const {getState, dispatch} = CreateStore();
export const {value} = ConfigureStore().initialState
export const {add, remove} = ConfigureStore().reducers;

const API_Menu = "http://localhost:3000/api-menu";
const API_Home = "http://localhost:3000/api-home";

// app

const App = () => {
    return `
        ${Header()}
        ${Slidebar()}
    `
};

const ElementRoot = document.getElementById('root');
ElementRoot.innerHTML = App();

const ElementContainerFood = document.querySelector('.container-food');
const ElementHidenBackground = document.querySelector('.HidenBackground');

const ElementSlideBarList = document.querySelector('.SlideBar__list');

// ElementRoot.innerHTML = Header();

ResponseDataHTML(API_Home, ElementSlideBarList, SlidebarNav)
ResponseDataHTML(API_Menu, ElementContainerFood, Food);
ElementHidenBackground.innerHTML = CreateFood();
const ElementExitCreateFood = document.querySelector('.Exit__CreateFood');

let Store = CreateStore(value, Reducer);

ElementExitCreateFood.onclick = () => {
    console.log("Hủy món thành công!")
    Store.dispatch()
}


