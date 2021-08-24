import { clamp } from "./utils";

export class Color {

    private red: number;
    private green: number;
    private blue: number;
    private alpha: number;

    public constructor (red: number, green: number, blue: number, alpha: number = 1) {
        this.red = clamp(red, 0, 255);
        this.green = clamp(green, 0, 255);
        this.blue = clamp(blue, 0, 255);
        this.alpha = clamp(alpha, 0, 1);
    }


    public getGrey = (): Color => {
        const brightness = (this.red + this.green + this.blue) / 3;
        return new Color(brightness, brightness, brightness);
    }

    public getGreyAlpha = (): Color => {
        const brightness = (this.red + this.green + this.blue) / 3;
        return new Color(brightness, brightness, brightness, this.alpha);
    }
    
    public toString = () => `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    
    public getRed = (): number => this.red;
    public getGreen = (): number => this.green;
    public getBlue = (): number => this.blue;
    public getAlpha = (): number => this.alpha;
    public setRed = (red: number): number => this.red = clamp(red, 0, 255);
    public setGreen = (green: number): number => this.green = clamp(green, 0, 255);
    public setBlue = (blue: number): number => this.blue = clamp(blue, 0, 255);
    public setAlpha = (alpha: number): number => this.alpha = clamp(alpha, 0, 1);

}