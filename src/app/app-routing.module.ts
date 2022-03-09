import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaUsuarioComponent } from './views/area-usuario/area-usuario.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { ContatosComponent } from './views/contatos/contatos.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ParceirosComponent } from './views/parceiros/parceiros.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { SobreComponent } from './views/sobre/sobre.component';

const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"sobre", component: SobreComponent },
  { path: "clientes", component: ClientesComponent },
  { path: "parceiros", component: ParceirosComponent },
  { path: "contatos", component: ContatosComponent },
  { path: "login", component: LoginComponent },
  { path: "area-usuario", component: AreaUsuarioComponent },
  { path: "produtos", component: ProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
