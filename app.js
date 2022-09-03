// fillrect 함수에는 네가지 인자를 가지고 있다
// - x, y, width, height  fill<->stroke
// fill은 색을 채워 넣고, stroke는 선만 있다.
// 경로를 설정해주는 path


const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20)

// ctx.moveTo(200, 200)
// ctx.lineTo(325, 100)
// ctx.lineTo(450, 200 )
// ctx.fill();


ctx.fillRect(210, 200, 15, 100);
ctx.fillRect(350, 200, 15, 100);
ctx.fillRect(260, 200, 60, 200);

ctx.arc(50,50, 20, 0, );