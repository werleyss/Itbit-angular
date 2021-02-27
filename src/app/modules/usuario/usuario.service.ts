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

  adicionar(usuario: UsuarioModel): Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>(`${environment.apiURL}/usuario`, usuario);
  }

  atualizar(id: number, usuario: UsuarioModel): Observable<UsuarioModel>{
    return this.http.put<UsuarioModel>(`${environment.apiURL}/usuario/${id}`, usuario);
  }
}
