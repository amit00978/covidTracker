import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import root from './Reducers'

export default function configStore(initstate) {
    return createStore(
        root,
        initstate,
        applyMiddleware(thunk)
    );
}
