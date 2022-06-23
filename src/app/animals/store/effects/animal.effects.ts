import { Injectable } from '@angular/core'
import { Effect, ofType, Actions } from '@ngrx/effects'
import { Store, select } from '@ngrx/store'
import { of } from 'rxjs'
import { switchMap, map, withLatestFrom } from 'rxjs'

import { IAppState } from '../state/app.state'
import { 
    GetAnimalsSuccess,
    GetAnimalSuccess,
    GetAnimals,
    GetAnimal,
    EAnimalActions,
    GetAnimalsWithoutCats,
    DeleteAnimal,
    AddAnimal,
    UpdateAnimal
} from '../actions/animal.actions'
import { AnimalService } from 'src/app/animals/services/animal.service'
import { selectAnimalList } from '../selectors/animal.selector'
import { IAnimal } from 'src/app/animals/components/animal/animal'

@Injectable()
export class AnimalEffects {
    @Effect()
    getAnimal$ = this._actions$.pipe(
        ofType<GetAnimal>(EAnimalActions.GetAnimal),
        map(action => action.payload),
        withLatestFrom(this._store.pipe(select(selectAnimalList))),
        switchMap(([id, animals]) => {
            const selectedAnimal = animals!.filter((animal: IAnimal) => animal._id === id)[0]
            return of(new GetAnimalSuccess(selectedAnimal))
        })
    )

    @Effect()
    getAnimals$ = this._actions$.pipe(
        ofType<GetAnimals>(EAnimalActions.GetAnimals),
        switchMap(() => this._animalsService.getAnimals()),
        switchMap((animalHttp: IAnimal[]) => of(new GetAnimalsSuccess(animalHttp)))
    )

    @Effect()
    getAnimalsWithoutCats$ = this._actions$.pipe(
        ofType<GetAnimalsWithoutCats>(EAnimalActions.GetAnimalsWithoutCats),
        switchMap(() => this._animalsService.getAnimals()),
        switchMap((animalHttp: IAnimal[]) => of(new GetAnimalsSuccess(animalHttp.filter(animal => animal.type.toLowerCase() !== 'cat'))))
    )

    @Effect()
    deleteAnimal$ = this._actions$.pipe(
        ofType<DeleteAnimal>(EAnimalActions.DeleteAnimal),
        map(action => action.payload),
        switchMap(id => this._animalsService.deleteAnimal(id)),
        switchMap(() => this._animalsService.getAnimals()),
        switchMap((animalHttp: IAnimal[]) => of(new GetAnimalsSuccess(animalHttp)))
    )

    @Effect()
    addAnimal$ = this._actions$.pipe(
        ofType<AddAnimal>(EAnimalActions.AddAnimal),
        map(action => action.payload),
        switchMap(animal => this._animalsService.addAnimal(animal)),
        switchMap(() => this._animalsService.getAnimals()),
        switchMap((animalHttp: IAnimal[]) => of(new GetAnimalsSuccess(animalHttp)))
    )

    @Effect()
    updateAnimal$ = this._actions$.pipe(
        ofType<UpdateAnimal>(EAnimalActions.UpdateAnimal),
        map(action => action.payload),
        switchMap(animal => this._animalsService.updateAnimal(animal.id, animal.animal)),
        switchMap(() => this._animalsService.getAnimals()),
        switchMap((animalHttp: IAnimal[]) => of(new GetAnimalsSuccess(animalHttp)))
    )

    constructor(
        private _animalsService: AnimalService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) {}
}