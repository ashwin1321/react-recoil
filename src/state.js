import { atom, selector } from "recoil";
// atom is a state container that holds a piece of state
// selector is a function that accepts a piece of state and returns a new state

export const recoilCount = atom({            // atom is a state container that holds a piece of state
    key: 'count',                           // unique ID (with respect to other atoms/selectors)
    default: 0                           // default value (aka initial value)
})

export const modifier = atom({
    key: 'modifier',
    default: 0
})

export const recoilSelector = selector({
    key: 'modified-count',                   // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {                       // get is a function that has a get method as an argument. We can use this to get the value of other atoms/selectors
        const count = get(recoilCount);     // get the value of recoilCount
        const currentMod = get(modifier);     // get the value of modifier
        // variable name has to be different from the atom name
        return count * currentMod;
    }


    //-------------- ASYNC SELECTOR -------------------//

    // WE CAN ALSO USE ASYNC SELECTORS TO FETCH DATA FROM AN API

    // get: async ({ get }) => {
    //     const count = get(recoilCount);
    //     const currentMod = get(modifier);
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //     const data = await response.json();
    //     return data;
    // }
    // ------------------ END -----------------------//



    // -------------- ERROR HANDLING -----------------//
    // get: async ({ get }) => {
    //     const count = get(recoilCount);
    //     const currentMod = get(modifier);
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    //     if (!response.ok) {
    //         throw new Error('Failed to fetch data');
    //     }

    //     return response.json();
    // }
    // ------------------ END -----------------------//



    // -------------- QUERIES WITH PARAMETERS --------------//
    // get: async ({ get }) => {
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);

    //     if (!response.ok) {
    //         throw new Error('Failed to fetch data');
    //     }
    //     return response.json();
    // }

    // To use this selector, we need to pass in the count parameter
    // const { data } = useRecoilValue(recoilSelector(count));
    // --------------------- END -------------------------//


    // -------------- QUERIES WITH MULTIPLE PARAMETERS --------------//
    // get: async ({ get }) => {
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}/${currentMod}`);

    //     if (!response.ok) {
    //       throw new Error('Failed to fetch data');
    //     }
    //     return response.json();
    // }
    // To use this selector, we need to pass in the count and currentMod parameters
    // const { data } = useRecoilValue(recoilSelector({ count, currentMod }));
    // --------------------- END -------------------------//
})


