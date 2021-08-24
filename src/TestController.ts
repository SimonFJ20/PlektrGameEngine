import { Background } from "./Background";
import { ControllerIds } from "./ControllerIds";
import { GameEngine } from "./engine/Engine";
import { GameController } from "./engine/GameController";
import { Player } from "./Player";
import { Scope } from "./Scope";

export class TestController extends GameController<ControllerIds> {

    private background: Background;
    private player: Player;
    private scope: Scope;

    public constructor (gameEngine: GameEngine) {
        super(gameEngine, ControllerIds.Test);

        this.background = new Background(this.gameEngine);
        this.player = new Player(this.gameEngine);
        this.scope = new Scope(this.gameEngine);

        this.add(this.background);
        this.add(this.player);
        this.add(this.scope);
    }

    public tick = (deltaT: number) => {

        

    }

} 
