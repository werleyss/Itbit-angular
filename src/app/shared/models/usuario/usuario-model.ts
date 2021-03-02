export class UsuarioModel{
  id?: string;
  nome?: string;
  dataNascimento?: string;
  idade: number;
  email?: string;
  senha?: string;
  sexo?: 'M'| 'F';
  ativo?: boolean = true;
}
