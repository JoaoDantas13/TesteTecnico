import { VendasComponent } from './../vendas/vendas.component';
import { ProdutosComponent } from './../produtos/produtos.component';
import { ClienteComponent } from './../cliente/cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'cliente',component:ClienteComponent},
  {path: 'produto',component:ProdutosComponent},
  {path: 'vendas',component:VendasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
