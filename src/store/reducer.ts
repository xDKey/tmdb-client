import { Action } from '../type';

export const rootReducer = (state: any = {}, action: Action) => {
    switch(action.type){
        case 'some': return state
        default: return state
    }
}