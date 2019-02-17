import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import hljs from "highlight.js";
import {MDCTabBar} from '@material/tab-bar';

@Component({
  selector: "app-pdp",
  templateUrl: "./pdp.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    "./pdp.component.scss",
    "../../../../node_modules/highlight.js/styles/vs.css"
  ]
})
export class PDPComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.querySelectorAll("code").forEach(function(element) {
      element.innerHTML = element.innerHTML
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    });
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block);
    });
    const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

  }
}
