type Constructor<T> = { new() : T }

export default abstract class AbstractControl
{
    public static fromSelector<T extends typeof AbstractControl>(this:new (el:HTMLElement) => T, selector:string) {
        let elements = document.querySelectorAll(selector);
        for (let i = 0; i < elements.length; i++) {
            let el = elements.item(i);
            if (el instanceof HTMLElement) {
                new this(el);
            }
        }
    }
}