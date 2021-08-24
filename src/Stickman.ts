import { Color } from "./engine/Color";
import { GameEngine } from "./engine/Engine";
import { GameObject } from "./engine/GameObject";
import { Graphics } from "./engine/Graphics";
import { Vector2d } from "./engine/Vector2d";
import { ObjectIds } from "./ObjectIds";

interface Bone {
    position: Vector2d;
    children: Bone[]
}

export class Stickman extends GameObject<ObjectIds> {

    private skeleton: Bone;

    public constructor (gameEngine: GameEngine) {
        super(gameEngine, ObjectIds.Stickman);

        this.skeleton = {
            position: new Vector2d(150, 180),
            children: [
                {
                    position: new Vector2d(150, 150),
                    children: [
                        {
                            position: new Vector2d(150, 120),
                            children: [
                                {
                                    position: new Vector2d(150, 90),
                                    children: [
                                        
                                    ]
                                },
                                {
                                    position: new Vector2d(180, 170),
                                    children: [
                                        
                                    ]
                                },
                                {
                                    position: new Vector2d(120, 170),
                                    children: [
                                        
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    position: new Vector2d(138, 205),
                    children: [
                        {
                            position: new Vector2d(120, 235),
                            children: [
                                
                            ]
                        }
                    ]
                },
                {
                    position: new Vector2d(162, 205),
                    children: [
                        {
                            position: new Vector2d(180, 235),
                            children: [
                                
                            ]
                        }
                    ]
                }
            ]
        };

    }

    public tick = (deltaT: number) => {
        
    };

    public render = (graphics: Graphics) => {

        graphics.getContext().fillStyle = new Color(20, 255, 20).toString();
        graphics.getContext().strokeStyle = new Color(50, 150, 255).toString();
        graphics.getContext().lineWidth = 3;
        
        const renderSkeleton = (child: Bone, parent?: Bone) => {
            if (parent) {
                graphics.getContext().beginPath();
                graphics.getContext().moveTo(parent.position.x, parent.position.y);
                graphics.getContext().lineTo(child.position.x, child.position.y);
                graphics.getContext().stroke();
            }

            for (let i in child.children) 
                renderSkeleton(child.children[i], child);

            graphics.getContext().beginPath();
            graphics.getContext().arc(child.position.x, child.position.y, 4, 0, 2 * Math.PI);
            graphics.getContext().fill();
        }

        renderSkeleton(this.skeleton);

    };

    

}
