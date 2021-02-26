import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from './../../shared/models/usuario/usuario-model';
import { Observable } from 'rxjs';
import { environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor( private http: HttpClient) { }

  obterTodos(search: UsuarioModel): Observable<UsuarioModel[]>{
    return this.http.get<UsuarioModel[]>(`${environment.apiURL}/${search}`);
  }
}
