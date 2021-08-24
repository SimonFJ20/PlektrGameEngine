import { GameEngine } from "./engine/Engine";
import { GameObject } from "./engine/GameObject";
import { Graphics } from "./engine/Graphics";
import { Sprite } from "./engine/Sprite";
import { Vector2d } from "./engine/Vector2d";
import { ObjectIds } from "./ObjectIds";

export class Player extends GameObject<ObjectIds> {

    private position: Vector2d;

    private direction: 'left' | 'right';
    private sprites: {[key: string]: Sprite};

    public constructor (gameEngine: GameEngine) {
        super(gameEngine, ObjectIds.Player);

        this.position = new Vector2d(640, 720 - 64);

        this.direction = 'right';
        this.sprites = {
            left: new Sprite('assets/player-left.png'),
            right: new Sprite('assets/player-right.png')
        }
    }

    public tick = (deltaT: number) => {
        
    };

    public render = (graphics: Graphics) => {
        
        graphics.getContext().drawImage(
            this.sprites[this.direction].getImage(),
            this.position.x, this.position.y
        );

    };

    

}
