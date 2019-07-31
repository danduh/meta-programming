"use strict";
var exports = {}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroComponent = void 0;

var _dec, _class, _temp;
const Component = conf => {
    return async function (clazz) {
        var elem = document.createElement(conf.selector);
        elem.addEventListener('click', function (e) {
            alert('Thanks!');
        });
        let tmpl = await fetch('app-hero-component.component.html').then(str => str.text());

        let _cl = new clazz();

        Object.keys(_cl).forEach(baseClPr => {
            tmpl = tmpl.replace(`{{${baseClPr}}}`, _cl[baseClPr]);
        });
        elem.innerHTML = tmpl;
        document.body.appendChild(elem);
        return _cl;
    };
};
let HeroComponent = (_dec = Component({
  selector: 'app-hero-component',
  templateUrl: './app-hero-component.component.html',
  styleUrls: ['./app-hero-component.component.scss']
}), _dec(_class = (_temp = class HeroComponent {
  constructor() {
    this.title = 'Welcome to Hero APP';
  }

}, _temp)) || _class);
exports.HeroComponent = HeroComponent;

