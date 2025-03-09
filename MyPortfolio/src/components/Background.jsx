import { useEffect, useRef } from 'react';

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        const str = "A+jk js:2 @dfs 17 tr YY ufds M5r p87 #18 $!& ^dsf $Ew er JH # $ . (! ;) ,: :";
        const matrix = str.split("");
        const font = 12;
        const col = canvas.width / font;
        const arr = [];

        for (let i = 0; i < col; i++) {
            arr[i] = 1;
        }

        const draw = () => {
            ctx.fillStyle = "rgba(0,0,0,0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#00FF00";
            ctx.font = `${font}px system-ui`;

            for (let i = 0; i < arr.length; i++) {
                let txt = matrix[Math.floor(Math.random() * matrix.length)];
                ctx.fillText(txt, i * font, arr[i] * font);

                if (arr[i] * font > canvas.height && Math.random() > 0.975) {
                    arr[i] = 0;
                }
                arr[i]++;
            }
        }

        const animationId = setInterval(draw, 20);

        return () => {
            clearInterval(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed left-0 top-0"
            style={{ width: '100%', height: '100%' }}
        ></canvas>
    )
}

export default Background;
