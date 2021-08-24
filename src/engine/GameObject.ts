import { GameEngine } from "./Engine";
import { Graphics } from "./Graphics";

export interface HandleableGameObject {
    tick: (deltaT: number) => void;
    render: (graphics: Graphics) => void;
}

export abstract class GameObject<ObjectIdsEnum> implements HandleableGameObject {

    private gameEngine: GameEngine;
    public id: ObjectIdsEnum;

    public abstract tick: (deltaT: number) => any;
    public abstract render: (graphics: Graphics) => any;

    protected remove = () => {
        this.gameEngine.getObjectHander().remove(this);
    };

    public constructor (gameEngine: GameEngine, id: ObjectIdsEnum) {
        this.gameEngine = gameEngine;
        this.id = id;
    }

}
