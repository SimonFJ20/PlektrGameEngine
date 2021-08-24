
export class Vector2d {
    
    public x: number;
    public y: number;

    public constructor (x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public getX = () => this.x;
    public getY = () => this.y;
    public setX = (value: number) => this.x = value;
    public setY = (value: number) => this.y = value;
    
}
