"use strict";

export const ConfigureStore = () => {
    return {
        name: 'TodoList',
        initialState: {
            value: []
        },
        reducers: {
            AddFood (index) {
                return {
                    type: 'ADD_TODO',
                    payload: {
                        index: 1
                    }
                }
            },
            RemoveFood (index) {
                console.log("Remove thành công");
            }
        }
    } 
};
