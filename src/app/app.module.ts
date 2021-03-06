import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  Routes ,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';

const appRoutes : Routes = [
{path:'' , component: HomeComponent},
{path:'users' , component: UsersComponent},
{path:'users/:id/:name' , component: UserComponent},
{path:'servers' , component: ServersComponent},
{path:'servers/:id/edit' , component: EditServerComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    EditServerComponent,
    ServerComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
