
export class Sprite {

    private image: HTMLImageElement;
    

    public constructor (source: string) {
        this.image = new Image();
        this.image.src = source;
    }

    public getImage = () => this.image;
    public setImage = (image: HTMLImageElement) => this.image = image;

}
