// html 
<input type="text" [(ngModel)]="name">  // sets up two way binding.
<p> {{ name }} </p>

// .ts component:

@Component({
	selector: 'app',
	templateUrl: './app.component.html',	
	styleUrls: ['./app.component.css']
})
export class AppComponent{
	name = '';
}