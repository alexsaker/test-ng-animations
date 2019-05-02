import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {AnimationBuilder, style, animate, AnimationPlayer} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  @ViewChild('animatedComp') el:ElementRef;
  private animationPlayer:AnimationPlayer;

  constructor(private _builder: AnimationBuilder) {}
  
  ngAfterViewInit(): void {
    this.makeAnimation(this.el.nativeElement);
    this.animationPlayer.onDone(() => console.log(' I finished my first animation with builder!!!!') );
  }
  public makeAnimation(element: any) {
    // first define a reusable animation
    const myAnimation = this._builder.build([
      style({ width: '456px' }),
      animate(2000, style({ width: '100%',height:'100%'}))
    ]);
    // use the returned factory object to create a player
    this.animationPlayer = myAnimation.create(element);
    this.animationPlayer.play();
  }

}
