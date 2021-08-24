import { GameEngine } from "./engine/Engine";
import { GameObject } from "./engine/GameObject";
import { Graphics } from "./engine/Graphics";
import { Sprite } from "./engine/Sprite";
import { ObjectIds } from "./ObjectIds";

export class Background extends GameObject<ObjectIds> {
    
    private sprite: Sprite;

    public constructor (gameEngine: GameEngine) {
        super(gameEngine, ObjectIds.Background);

        this.sprite = new Sprite('assets/background.png');
    }

    public tick = (deltaT: number) => {

    };

    public render = (graphics: Graphics) => {
        graphics.getContext().drawImage(this.sprite.getImage(), 0, 0);
    };

}
