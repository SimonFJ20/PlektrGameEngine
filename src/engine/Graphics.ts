import { Color } from "./Color";

export class Graphics {

    private width: number;
    private height: number;

    private htmlCanvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    public constructor (htmlCanvas: HTMLCanvasElement, width: number, height: number) {
        this.width = width;
        this.height = height;
        this.htmlCanvas = htmlCanvas;
        this.context = this.htmlCanvas.getContext('2d')!;
        this.htmlCanvas.width = this.width
        this.htmlCanvas.height = this.height
    }

    public clear = (color?: Color) => {
        this.context.save();
        this.context.fillStyle = color?.toString() || '#000';
        this.context.fillRect(0, 0, this.width, this.height);
        this.context.restore();
    }

    public getCanvas = () => this.htmlCanvas;
    public getContext = () => this.context;

}
