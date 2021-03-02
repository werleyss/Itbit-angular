import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from './../../../shared/models/usuario/usuario-model';
import { UsuarioService } from './../usuario.service';
import { ListaPaginadaModel } from './../../../shared/models/paginacao/lista-paginada-model';

@Component({
  selector: 'app-detalhes-usuario',
  templateUrl: './detalhes-usuario.component.html',
  styleUrls: ['./detalhes-usuario.component.css']
})
export class DetalhesUsuarioComponent implements OnInit {
  pesquisa: UsuarioModel = new UsuarioModel();
  listaUsuario: ListaPaginadaModel<UsuarioModel[]> = new ListaPaginadaModel<UsuarioModel[]>();
  constructor( private usuario$: UsuarioService ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void{
    this.usuario$.obterTodos(this.pesquisa.nome? this.pesquisa.nome : '', this.pesquisa.ativo).subscribe(
      retorno => {
        this.listaUsuario.data = retorno;
      },
      err => {
        console.log(err);
      });
  }

}
