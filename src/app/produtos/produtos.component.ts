import { ServiceService } from './../service/service.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../class/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto : Produto[];
  displayedColumns: string[] = ['position','name','weight','symbol']
  formulario: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private http: HttpClient,
    private service: ServiceService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome:[null,Validators.required],
      valorunitario: [null,Validators.required]
    });

    this.service.listProduto().subscribe(dados => this.produto = dados);

  }

  onSubmit2(){
    console.log(this.formulario.value);
    if(this.formulario.valid){
      console.log('submit');
      this.service.createproduto(this.formulario.value).subscribe(
        success => alert("Produto Cadastrado com Sucesso!"),
        error => console.error(error)
      )
    }
  }

}
