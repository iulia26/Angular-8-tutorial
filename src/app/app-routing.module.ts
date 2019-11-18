import { OutputGraphComponent } from './output-graph/output-graph.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ListComponent} from './list/list.component';
import { ChartsComponent} from './charts/charts.component';


const routes: Routes = [
 { path:'', component: HomeComponent },
 { path: 'list', component: ListComponent },
 { path: 'charts', component: ChartsComponent},
 { path: 'output-graph', component: OutputGraphComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
