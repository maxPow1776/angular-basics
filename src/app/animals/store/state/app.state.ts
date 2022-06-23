import { RouterReducerState } from '@ngrx/router-store'

import { IAnimalState, initialAnimalState } from './animal.state'

export interface IAppState {
    router?: RouterReducerState,
    animals: IAnimalState
}

export const initialAppState: IAppState = {
    animals: initialAnimalState
}

export function getInitialState(): IAppState {
    return initialAppState
}