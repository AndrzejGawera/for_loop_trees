function drawMirrorTree(n = 5) {
  for (let i = 0 ; i < n; i++) {
    let line = "";
    for (let j = i; j < n ; j++) {
      line += "*";
    }
    console.log(line);
  }
}

function drawTree(n = 5) {
  let line = "";
  for (let i = 0; i < n; i++) {
    line += "*";
    console.log(line);
  }
}

function drawMatrix(n = 5) {
  let lines = "";
  for (let i = 1 ; i <= n; i++) {
    let line = "";
    for (let j = 0; j <= n ; j++) {
      line += j + " ";
    }
    lines += `${line}\n`;
  }
  console.log(lines);
}

function drawChristmasTree(n = 5) {
  for (let i = 1 ; i < n; i++) {
    let line = "";
    for (let k = i; k < n ; k++) {
      line += " ";
    }
    for (let j = 1; j <= (2*i-1) ; j++) {
      line += "*";
    }
    console.log(line);
  }
}

