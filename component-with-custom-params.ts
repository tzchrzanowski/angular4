//------------- parent ----------------------------
//parent.ts
import { ArticleComponent } from './article.component';

export class AppComponent {
  titleCaptionMR:string = 'string one';
  imgValueMR: string = 'location string';
  noteCaptionMR:string = 'note string';
}

//parent.html
...
 <app-article [title]='titleCaptionHaCF' [note]='noteCaptionHaCF' [imgLoc]='imgValueHaCF'></app-article>
 ...
//------------- child ----------------------------
//child.ts
// child has to use 'Input', and mark the values that we want to pass to it from parent.

import { Component, Input } from '@angular/core';
 export class ArticleComponent {
	 @Input() title:string;
	 @Input() note:string;
	 @Input() imgLoc:string;
}

//child.html
...
<img class="activator" src={{imgLoc}}>
...
<span class="card-title activator grey-text text-darken-4">{{title}}<i class="material-icons right">more_vert</i></span>
...
<p>{{note}}</p>
...
