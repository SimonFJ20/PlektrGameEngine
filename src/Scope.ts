import { Color } from "./engine/Color";
import { GameEngine } from "./engine/Engine";
import { GameObject } from "./engine/GameObject";
import { Graphics } from "./engine/Graphics";
import { PhysicsObject } from "./engine/PhysicsObject";
import { Sprite } from "./engine/Sprite";
import { Vector2d } from "./engine/Vector2d";
import { ObjectIds } from "./ObjectIds";
import { Player } from "./Player";

export class Scope extends GameObject<ObjectIds> implements PhysicsObject {

    private player: Player;

    public position: Vector2d;
    public velocity: Vector2d;

    private sprite: Sprite;

    public constructor (gameEngine: GameEngine, player: Player) {
        super(gameEngine, ObjectIds.Scope);

        this.player = player;

        this.position = new Vector2d(0, 0);
        this.velocity = new Vector2d(0, 0);

        this.sprite = new Sprite('assets/scope.png');
    }

    public tick = (deltaT: number) => {
        
        
        const keyInput = this.getEngine().getKeyInput();
        
        const speed = 8;

        if (keyInput.isPressed(74) && !keyInput.isPressed(76))
            this.velocity.x = -speed;
        else if (keyInput.isPressed(76) && !keyInput.isPressed(74))
            this.velocity.x = speed;
        else
            this.velocity.x = 0;

        if (keyInput.isPressed(73) && !keyInput.isPressed(75))
            this.velocity.y = -speed;
        else if (keyInput.isPressed(75) && !keyInput.isPressed(73))
            this.velocity.y = speed;
        else
            this.velocity.y = 0;


        this.position.x += this.velocity.x + this.player.velocity.x;
        if (this.position.x < 0 || this.position.x > 1280 - 64)
            this.position.x -= this.velocity.x + this.player.velocity.x;

        this.position.y += this.velocity.y + this.player.velocity.y;
        if (this.position.y < 0 || this.position.y > 720 - 64)
            this.position.y -= this.velocity.y + this.player.velocity.y;

    };

    public render = (graphics: Graphics) => {
        
        // graphics.getContext().drawImage(
        //     this.sprites[this.direction].getImage(),
        //     this.position.x, this.position.y
        // );

        // graphics.getContext().fillStyle = new Color(255, 255, 0).toString();
        // graphics.getContext().fillRect(this.position.x, this.position.y, 64, 64);
        
        // graphics.getContext().fillStyle = new Color(80, 80, 80).toString();
        // graphics.getContext().fillRect(this.position.x + 24, this.position.y - 16, 16, 64);
        
        graphics.getContext().imageSmoothingEnabled = false;
        graphics.getContext().drawImage(this.sprite.getImage(), this.position.x, this.position.y, 64, 64);

    };

    

}
