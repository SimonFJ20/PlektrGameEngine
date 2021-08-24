import { GameEngine } from "./Engine";
import { HandleableGameObject } from "./GameObject";

export interface HandleableGameController {
    tick: (deltaT: number) => any;
}

export abstract class GameController<ControllerIdsEnum> implements HandleableGameController {

    public id: ControllerIdsEnum;
    protected gameEngine: GameEngine;

    
    public constructor (gameEngine: GameEngine, id: ControllerIdsEnum) {
        this.id = id;
        this.gameEngine = gameEngine;
    }
    
    public abstract tick: (deltaT: number) => any;

    protected add = (object: HandleableGameObject) => {
        this.gameEngine.getObjectHander().add(object);
    }

    protected remove = (object: HandleableGameObject) => {
        this.gameEngine.getObjectHander().remove(object);
    }

}
