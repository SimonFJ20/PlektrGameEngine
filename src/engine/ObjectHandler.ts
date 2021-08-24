import { HandleableGameObject,  } from "./GameObject";
import { Graphics } from "./Graphics";

export class ObjectHandler {

    private objects: HandleableGameObject[];

    public constructor () {
        this.objects = []
    }

    public tick = (deltaT: number) => {
        for (let i in this.objects)
            this.objects[i].tick(deltaT);
    }

    public render = (graphics: Graphics) => {
        for (let i in this.objects)
            this.objects[i].render(graphics);
    }

    public add = (object: HandleableGameObject) => {
        this.objects.push(object);
    }

    public remove = (object: HandleableGameObject) => {
        for (let i = 0; i < this.objects.length; i++)
            if (this.objects[i] === object)
                return this.objects.splice(i, 1);
    }

}
