import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { DetailComponent } from './components/detail/detail.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { AuthorComponent } from './components/author/author.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGardsGuard } from './services/auth-gards.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},

    {path: 'home', title: 'Home', component: HomeComponent},
    {path: 'about', title: 'About', component: AboutComponent},
    {path: 'create', title: 'Create', component: CreateArticleComponent, canActivate: [authGardsGuard]},
    {path: 'article/:id', title: 'Article', component: DetailComponent, canActivate: [authGardsGuard]},

    {path: 'privacy', title: 'Privacy', component: PrivacyComponent},
    {path: 'author/:id', title: 'Author', component: AuthorComponent},

    {path: 'login', title: 'Login', component: LoginComponent},
    {path: 'register', title: 'Register', component: RegisterComponent},
    
    {path: '**', title: 'Not Found', component: NotfoundComponent},
];
