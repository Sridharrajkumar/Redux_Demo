const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'ADD') {
        return {
            counter: state.counter + 1
        };
    }
    else if (action.type === 'SUB')
    {
        return {
            counter: state.counter - 1
        };  
    }
    return state;
};



const store = redux.createStore(counterReducer);


const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'ADD' })
store.dispatch({ type: 'ADD' })
store.dispatch({ type: 'ADD' })
store.dispatch({ type: 'ADD' })
store.dispatch({ type: 'SUB' })
store.dispatch({ type: 'SUB' })

