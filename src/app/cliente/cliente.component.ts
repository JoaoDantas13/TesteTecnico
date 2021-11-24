import { Cliente } from './../class/cliente';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente[];
  displayedColumns: string[] = ['position','name','weight','symbol']
  formulario: FormGroup;

  constructor(
  private formBuilder: FormBuilder,
  private http: HttpClient,
  private service:ServiceService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome:[null,Validators.required],
      cpf:[null,Validators.required],
      cep:[null,Validators.required],
      lougradouro:[null,Validators.required],
      numero:[null,Validators.required],
      bairro:[null,Validators.required],
      complemento:[null,Validators.required],
      cidade:[null,Validators.required],
      email:[null,Validators.required],
      datanascimento:[null,Validators.required]
    });

      this.service.list().subscribe(dados => this.cliente = dados);



  }

  onSubmit(){
    console.log(this.formulario.value);
    if(this.formulario.valid){
      console.log('submit');
      this.service.create(this.formulario.value).subscribe(
        success => alert("Cadastrado com sucesso"),
        error => console.error(error)
      );
    }

  }

}
