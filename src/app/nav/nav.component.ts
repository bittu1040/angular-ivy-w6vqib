import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  _isShowMenu = false;

  get menuClass() {
    return this._isShowMenu ? 'show' : 'hide';
  }

  toggleMenu() {
    this._isShowMenu = !this._isShowMenu;
  }

}