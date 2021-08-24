
export interface GameLoopable {
    tick: (deltaT: number) => any;
    render: () => any;
}

export class GameLoop {

    private fpsSampleTime = 1000 as const;

    private gameEngine: GameLoopable;

    private running: boolean;

    private dateBefore: number;
    private fpsTimer: number;
    private framesCounted: number;
    private framesPerSample: number;

    public logFpsToConsole: boolean;

    public constructor (gameEngine: GameLoopable) {
        this.gameEngine = gameEngine;
        this.running = false;
        this.dateBefore = 0;
        this.fpsTimer = 0;
        this.framesCounted = 0;
        this.framesPerSample = 0;
        this.logFpsToConsole = false;
    }

    private loop = () => {
        const now = Date.now();
        const deltaT = now - this.dateBefore;
        this.dateBefore = now;

        this.framesCounted++;
        if (now - this.fpsTimer > this.fpsSampleTime) {
            this.fpsTimer = now;
            this.framesPerSample = this.framesCounted;
            this.framesCounted = 0;
        }

        this.gameEngine.tick(deltaT);
        this.gameEngine.render();

        if (this.running)
            window.requestAnimationFrame(this.loop);
    }

    public start = () => {
        this.running = true;
        const now = Date.now();
        this.dateBefore = now;
        this.fpsTimer = now;
        this.framesCounted = 0;
        this.loop(); // consider using window.requestAnimationFrame(this.loop) if unreliable
    }

    public stop = () => {
        this.running = false;
    }

    public getFPSample = () => this.framesPerSample;
    public getFPS = () => this.framesPerSample / this.fpsSampleTime * 1000;

}
