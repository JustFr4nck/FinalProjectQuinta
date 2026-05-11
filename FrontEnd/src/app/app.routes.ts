import { HomePage } from './components/home-page/home-page';
import { Routes } from '@angular/router';
import { ListaMov } from './pages/lista-mov/lista-mov';
import { MovDetails } from './pages/mov-details/mov-details';
import { Prelievo } from './pages/prelievo/prelievo';
import { Deposito } from './pages/deposito/deposito';
import { ModificaDesc } from './pages/modifica-desc/modifica-desc';
import { EliminaMov } from './pages/elimina-mov/elimina-mov';


export const routes: Routes = [

    {path: "", component: HomePage, pathMatch: 'full'},
    {path: "listaMovimenti", component: ListaMov},
    {path: "movDetails", component: MovDetails},
    {path: "prelievo", component: Prelievo},
    {path: "deposito", component: Deposito},
    {path: "ModificaDescrizione", component: ModificaDesc},
    {path: "eliminaMovimento", component: EliminaMov},
    {path: "**", redirectTo: ""}

];
