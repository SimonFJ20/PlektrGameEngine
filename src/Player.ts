import { Color } from "./engine/Color";
import { GameEngine } from "./engine/Engine";
import { GameObject } from "./engine/GameObject";
import { Graphics } from "./engine/Graphics";
import { PhysicsObject } from "./engine/PhysicsObject";
import { Sprite } from "./engine/Sprite";
import { Vector2d } from "./engine/Vector2d";
import { ObjectIds } from "./ObjectIds";

export class Player extends GameObject<ObjectIds> implements PhysicsObject {

    public position: Vector2d;
    public velocity: Vector2d;

    private direction: 'left' | 'right';
    private sprite: Sprite;

    public constructor (gameEngine: GameEngine) {
        super(gameEngine, ObjectIds.Player);

        this.position = new Vector2d(0, 0);
        this.velocity = new Vector2d(0, 0);

        this.direction = 'right';
        this.sprite = new Sprite('assets/player.png');
    }

    public tick = (deltaT: number) => {
        
        
        const keyInput = this.getEngine().getKeyInput();
        
        const speed = 4;

        if (keyInput.isPressed(65) && !keyInput.isPressed(68))
            this.velocity.x = -speed;
        else if (keyInput.isPressed(68) && !keyInput.isPressed(65))
            this.velocity.x = speed;
        else
            this.velocity.x = 0;

        if (keyInput.isPressed(87) && !keyInput.isPressed(83))
            this.velocity.y = -speed;
        else if (keyInput.isPressed(83) && !keyInput.isPressed(87))
            this.velocity.y = speed;
        else
            this.velocity.y = 0;


        this.position.x += this.velocity.x;
        if (this.position.x < 0 || this.position.x > 1280 - 64)
            this.position.x -= this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.position.y < 0 || this.position.y > 720 - 64)
            this.position.y -= this.velocity.y;

    };

    public render = (graphics: Graphics) => {
        
        // graphics.getContext().drawImage(
        //     this.sprites[this.direction].getImage(),
        //     this.position.x, this.position.y
        // );

        // graphics.getContext().fillStyle = new Color(0, 0, 255).toString();
        // graphics.getContext().fillRect(this.position.x, this.position.y, 64, 64);

        // graphics.getContext().fillStyle = new Color(80, 80, 80).toString();
        // graphics.getContext().fillRect(this.position.x + 24, this.position.y - 16, 16, 64);

        graphics.getContext().drawImage(
            this.sprite.getImage(),
            this.position.x, this.position.y,
            64, 64
        );
        
    };

    

}
