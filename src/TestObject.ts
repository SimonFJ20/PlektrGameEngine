import { Color } from "./engine/Color";
import { GameEngine } from "./engine/Engine";
import { GameObject } from "./engine/GameObject";
import { Graphics } from "./engine/Graphics";
import { Vector2d } from "./engine/Vector2d";
import { ObjectIds } from "./ObjectIds";

export class TestObject extends GameObject<ObjectIds> {

    private dimension: Vector2d;

    public constructor (gameEngine: GameEngine) {
        super(gameEngine, ObjectIds.Test);

        this.dimension = new Vector2d(0, 0);
    }

    public tick = (deltaT: number) => {
        this.dimension.x += 1/4 * deltaT;
        if (this.dimension.x > 500)
            this.remove();
    }

    public render = (graphics: Graphics) => {
        graphics.getContext().strokeStyle = new Color(150, 150, 150).toString();
        graphics.getContext().lineWidth = 5;
        graphics.getContext().strokeRect(100-2, 600-2, 500+4, 50+4);

        graphics.getContext().fillStyle = new Color(25, 240, 25).toString();
        graphics.getContext().fillRect(100, 600, this.dimension.x, 50);
    }

}
