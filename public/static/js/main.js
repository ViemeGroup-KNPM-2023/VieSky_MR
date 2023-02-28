"use strict";

import { ResponseDataHTML } from "./Core/core.js";
import { CreateFood, Food } from "./Template/Menu.js";
import { CreateStore } from "./Core/Redux/Store.js";
import { ConfigureStore } from "./Core/Redux/ConfigureStore.js";
import { Reducer } from "./Core/Redux/Reducer.js";

export const {getState, dispatch} = CreateStore();
export const {value} = ConfigureStore().initialState
export const {add, remove} = ConfigureStore().reducers;

const API = "http://localhost:3000/menu";

const ElementContainerFood = document.querySelector('.container-food');
const ElementHidenBackground = document.querySelector('.HidenBackground');

ResponseDataHTML(API, ElementContainerFood, Food);
ElementHidenBackground.innerHTML = CreateFood();
const ElementExitCreateFood = document.querySelector('.Exit__CreateFood');

let Store = CreateStore(value, Reducer);

ElementExitCreateFood.onclick = () => {
    console.log("Hủy món thành công!")
    Store.dispatch()
}

