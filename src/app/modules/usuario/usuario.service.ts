import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UsuarioModel } from './../../shared/models/usuario/usuario-model';
import { Observable } from 'rxjs';
import { environment} from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor( private http: HttpClient) { }

  obterTodos(search?: string, status?: boolean): Observable<UsuarioModel[]>{
    return this.http.get<UsuarioModel[]>(`${environment.apiURL}/usuario`,{params: { nome: search, ativo: status.toString()}});
  }

  obterPorId(id: string): Observable<UsuarioModel>{
    return this.http.get<UsuarioModel>(`${environment.apiURL}/usuario/${id}`);
  }

  adicionar(usuario: UsuarioModel): Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>(`${environment.apiURL}/usuario`, usuario);
  }

  atualizar(id: string, usuario: UsuarioModel): Observable<UsuarioModel>{
    return this.http.put<UsuarioModel>(`${environment.apiURL}/usuario/${id}`, usuario);
  }
}
