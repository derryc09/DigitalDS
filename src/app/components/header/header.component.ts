import { Component, OnInit } from "@angular/core";
import { MDCTopAppBar } from "@material/top-app-bar/index";
import {MDCList} from "@material/list";
import {MDCDrawer} from "@material/drawer";
import {MDCTabBar} from '@material/tab-bar';
import {MDCTextField} from '@material/textfield';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const topAppBarElement = document.querySelector(".mdc-top-app-bar");
    const topAppBar = new MDCTopAppBar(topAppBarElement);
    const list = MDCList.attachTo(document.querySelector('.mdc-list'));
    list.wrapFocus = true;


    // Tabs
    const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

    // Text Fields
    const textField = new MDCTextField(document.querySelector('.mdc-text-field'));


  }
}
