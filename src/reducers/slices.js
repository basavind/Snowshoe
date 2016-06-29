import { actionTypes } from '../constants';
import { assign } from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD_TRANSLATION:
            let sliceId = action.id;
            let currentSlice = state[action.id];

            return assign({}, state, {
                [sliceId]: assign({}, currentSlice, {
                    translations: [
                        ...currentSlice.translations,
                        action.translateId
                    ]
                })
            });
        default:
            return state;
    }
};