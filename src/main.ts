import { GameEngine } from "./engine/Engine";
import { Vector2d } from "./engine/Vector2d";
import { TestController } from "./TestController";

const main = () => {
    
    const htmlCanvas = <HTMLCanvasElement>document.getElementById('canvas');
    const gameEngine = new GameEngine(htmlCanvas, new Vector2d(1280, 720));
    const testController = new TestController(gameEngine);
    gameEngine.start(testController);

}

main();