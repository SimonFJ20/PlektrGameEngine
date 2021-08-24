import { GameController, HandleableGameController } from "./GameController";
import { GameLoop, GameLoopable } from "./GameLoop";
import { Graphics } from "./Graphics";
import { ObjectHandler } from "./objectHandler";
import { Vector2d } from "./Vector2d";

export class GameEngine implements GameLoopable {

    private graphics: Graphics;
    private objectHandler: ObjectHandler;
    private gameLoop: GameLoop;

    private gameController!: HandleableGameController;

    public constructor (htmlCanvas: HTMLCanvasElement, canvasSize: Vector2d) {
        this.graphics = new Graphics(htmlCanvas, canvasSize.x, canvasSize.y);
        this.objectHandler = new ObjectHandler();
        this.gameLoop = new GameLoop(this);
        
        this.gameLoop.logFpsToConsole = true;
    }

    public tick = (deltaT: number) => {
        this.objectHandler.tick(deltaT);
        this.gameController.tick(deltaT);
    }

    public render = () => {
        this.objectHandler.render(this.graphics);
    }

    public start = (initialController: HandleableGameController) => {
        this.gameController = initialController;
        this.gameLoop.start();
    }

    public getObjectHander = () => this.objectHandler;

}
