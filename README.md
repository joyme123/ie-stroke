# ie-stroke
增加ie对canvas中stroke(path)函数的支持

# 目前仅支持直接传入path字符串

使用示例：

```
<!DOCTYPE>
<html>
    <head>
        <title>ie stroke 兼容</title>
        <style>
            #canvas { 
                border:1px solid black;
            }
        </style>
    </head>
    
    <body>
        <canvas id = "canvas" width="600" height="600" ></canvas>
    </body>
    <script src="iestroke.js"></script>
    <script>

        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext('2d');
        ctx.rect(100,100,100,100);
        ctx.stroke();

        let path = new IEStroke.IEPath2D("M  20  20  L  400  400 M 200 200 L 18 90");
        ctx.stroke(path);
    </script>
</html>
```