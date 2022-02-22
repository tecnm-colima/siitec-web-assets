import AbstractControl from "./AbstractControl";

export default class SplitButton extends AbstractControl
{
    readonly element:HTMLElement;
    readonly mainButton:HTMLElement;
    readonly dropdownButton:HTMLElement;
    constructor(el:HTMLElement) {
        super();
        this.element = el;
        this.mainButton = el.querySelector('.main-button');
        this.dropdownButton = el.querySelector('.dropdown-button');
        this.initFocusModes();
        el.addEventListener('keyup', this.onKeyUp.bind(this), false);
    }

    private initFocusModes() {
        this.element.tabIndex = 0;
        for (let i = 0; i < this.element.children.length; i++) {
            let item = this.element.children.item(i);
            if (item instanceof HTMLElement) {
                item.tabIndex = -1;
            }
        }
    }

    private onKeyUp(e:KeyboardEvent) {
        switch (e.key) {
            default: return;
            case 'Enter':
                this.mainButton.click();
                break;
            case 'ArrowDown':
                this.dropdownButton.click();
                break;
        }
    }
}