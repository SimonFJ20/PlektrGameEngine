import { Background } from "./Background";
import { ControllerIds } from "./ControllerIds";
import { GameEngine } from "./engine/Engine";
import { GameController } from "./engine/GameController";
import { Player } from "./Player";
import { Stickman } from "./Stickman";
import { TestObject } from "./TestObject";

export class TestController extends GameController<ControllerIds> {

    private background: Background;
    private testObject: TestObject;
    private stickman: Stickman;
    private player: Player;

    public constructor (gameEngine: GameEngine) {
        super(gameEngine, ControllerIds.Test);

        this.background = new Background(this.gameEngine);
        this.testObject = new TestObject(this.gameEngine);
        this.stickman = new Stickman(this.gameEngine);
        this.player = new Player(this.gameEngine);

        this.add(this.background);
        this.add(this.testObject);
        this.add(this.stickman);
        this.add(this.player);
    }

    public tick = (deltaT: number) => {

        

    }

} 
