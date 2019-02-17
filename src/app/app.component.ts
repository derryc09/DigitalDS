import { Component, OnInit } from "@angular/core";
// import { MDCTopAppBar } from "@material/top-app-bar/index";
import {MDCList} from "@material/list";
// import {MDCTabBar} from '@material/tab-bar';
import {MDCTextField} from '@material/textfield';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AccentureXD';
  constructor() {}

  ngOnInit() {
    // const topAppBarElement = document.querySelector(".mdc-top-app-bar");
    // const topAppBar = new MDCTopAppBar(topAppBarElement);
    const list = MDCList.attachTo(document.querySelector('.mdc-list'));
    list.wrapFocus = true;


    // Tabs
    // const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

    // Text Fields
    const textField = new MDCTextField(document.querySelector('.mdc-text-field'));


  }
}
