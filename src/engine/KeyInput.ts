
export class KeyInput {

    private currentlyPressedKeys: boolean[];

    public constructor () {
        this.currentlyPressedKeys = [];
        document.body.addEventListener('keydown', this.keyDownEvent);
        document.body.addEventListener('keyup', this.keyUpEvent);
    }

    public isPressed = (keyCode: number) => {
        return this.currentlyPressedKeys[keyCode] ? true : false;
    }

    private keyDownEvent = (event: KeyboardEvent) => {
        if (!event.repeat)
            this.currentlyPressedKeys[event.keyCode] = true;
    }

    private keyUpEvent = (event: KeyboardEvent) => {
        this.currentlyPressedKeys[event.keyCode] = false;
    }

}
