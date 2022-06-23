import { Injectable } from '@angular/core'
import { IAnimal } from '../components/animal/animal'
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private url: string = 'animals'

  constructor(private _http: HttpClient) { }

  addAnimal(animal: IAnimal) {
    return this._http.post(`${this.url}/create`, animal)
  }
  getAnimals() {
    return this._http.get<IAnimal[]>(this.url)
  }
  
  deleteAnimal(id: string) {
    let params = new HttpParams().set('id', id)
    return this._http.delete<IAnimal>(`${this.url}`, { params: params })
  }

  updateAnimal(id: string, animal: IAnimal) {
    let params = new HttpParams().set('id', id);
    return this._http.put<IAnimal>(`${this.url}`, animal, { params: params })
  }
}
