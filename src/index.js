import { IEStroke } from './IEStroke'
import { IEPath2D } from './IEPath2D'

CanvasRenderingContext2D.prototype.old_stroke = CanvasRenderingContext2D.prototype.stroke

CanvasRenderingContext2D.prototype.stroke = function(path) {

    if(path === undefined) {
        this.old_stroke()
    } else {
        let ieStroke = new IEStroke(this,path);
        ieStroke.paint();
    }
}


export { IEPath2D } from './IEPath2D'
export { IEStroke } from './IEStroke'