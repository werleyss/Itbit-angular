import { Component, OnInit } from '@angular/core';
import { FormControlName, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuarioService } from './../usuario.service';
import { UsuarioModel } from './../../../shared/models/usuario/usuario-model';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  alterar: boolean = false;

  cadastroForm!: FormGroup;

  objUsuario: UsuarioModel = new UsuarioModel();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private usuario$: UsuarioService
  ) { }

  ngOnInit(): void {
    this.criarForm();
  }

  adicionar(){
    this.atualizarDadosObjeto();
    this.usuario$.adicionar(this.objUsuario).subscribe(
      retorno => {
          console.log(retorno);
      },
      err => {
        console.log(err);
      }
    )

  }

  atualizar(){
    this.atualizarDadosObjeto();
    this.usuario$.atualizar(this.objUsuario.id,  this.objUsuario).subscribe(
      retorno => {
          console.log(retorno);
      },
      err => {
        console.log(err);
      }
    )
  }

  atualizarDadosObjeto(){
    this.objUsuario = Object.assign({}, this.objUsuario, this.cadastroForm.value);
  }

  criarForm(){
      this.cadastroForm = this.fb.group({
            id:                          [{ value: !this.alterar ? 0 : this.objUsuario?.id, disabled: true }],
            nome:                    [!this.alterar ? null : this.objUsuario?.nome, [Validators.required, Validators.minLength(3)]],
            data_nascimento:  [!this.alterar ? null : this.objUsuario?.data_nascimento, [Validators.required]],
            email:                    [!this.alterar ? null : this.objUsuario?.email, [Validators.required]],
            senha:                    [!this.alterar ? null : this.objUsuario?.senha],
            sexo:                      [!this.alterar ? null : this.objUsuario?.sexo, [Validators.required]],
            ativo:                     [!this.alterar ? true : this.objUsuario?.ativo],
      })
  }

  limparForm(){
      this.cadastroForm.reset({ id: 0,  ativo: true })
  }

  onSubmit(){
      if(!this.cadastroForm.valid) return console.log("Erro ao enviar");

      if(this.alterar) this.atualizar()
      else this.adicionar();
  }
}
