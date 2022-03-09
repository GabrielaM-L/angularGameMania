import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { ParceirosComponent } from './views/parceiros/parceiros.component';
import { ContatosComponent } from './views/contatos/contatos.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AreaUsuarioComponent } from './views/area-usuario/area-usuario.component';
import { ProdutosComponent } from './views/produtos/produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    ClientesComponent,
    ParceirosComponent,
    ContatosComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AreaUsuarioComponent,
    ProdutosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
