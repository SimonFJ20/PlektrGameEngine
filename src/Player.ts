import { Color } from "./engine/Color";
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
        
        
        const keyInput = this.getEngine().getKeyInput();
        
        const speed = 4;

        if (keyInput.isPressed(65) && !keyInput.isPressed(68)) {
            this.position.x -= speed;
            if (this.position.x < 0)
                this.position.x += speed;
        } else if (keyInput.isPressed(68) && !keyInput.isPressed(65)) {
            this.position.x += speed;
            if (this.position.x > 1280 - 64)
                this.position.x -= speed;
        }

        if (keyInput.isPressed(87) && !keyInput.isPressed(83)) {
            this.position.y -= speed;
            if (this.position.y < 0)
                this.position.y += speed;
        } else if (keyInput.isPressed(83) && !keyInput.isPressed(87)){
            this.position.y += speed;
            if (this.position.y > 720 - 64)
                this.position.y -= speed;
        }

    };

    public render = (graphics: Graphics) => {
        
        // graphics.getContext().drawImage(
        //     this.sprites[this.direction].getImage(),
        //     this.position.x, this.position.y
        // );

        graphics.getContext().fillStyle = new Color(0, 0, 255).toString();
        graphics.getContext().fillRect(this.position.x, this.position.y, 64, 64);

        graphics.getContext().fillStyle = new Color(80, 80, 80).toString();
        graphics.getContext().fillRect(this.position.x + 24, this.position.y - 16, 16, 64);


    };

    

}
