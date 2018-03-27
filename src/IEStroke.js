import { IEPath2D } from './IEPath2D'

export class IEStroke  {

    constructor(ctx, path) {
        this.actions = new Array();
        this.ctx = ctx;
        this.path = path;
    }

    paint() {
        this.ctx.beginPath();
        let arr = this.path.text.split(" ");
        let result = new Array();

        //循环arr，去除空元素
        arr.forEach(ele => {
            if(ele !== "") {
                result.push(ele);
            }
        });

        for(let i = 0; i < result.length; i+= 3) {
            
            let action = result[i].toUpperCase();
            let x = result[i+1];
            let y = result[i+2];

            if (action === 'M') {
                this.ctx.moveTo(x,y);
            }else if (action === 'L') {
                this.ctx.lineTo(x,y);
            } else {
                console.error('unsupport action')
            }

        }

        this.ctx.stroke();
    }

}
