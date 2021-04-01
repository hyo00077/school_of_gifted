let count = 20;
let state = [];
let img_1;
let img_src = [];
let arrow_img_src = ["./source/arrow/0A.png", "./source/arrow/1A.png", "./source/arrow/2A.png", "./source/arrow/3A.png"]
let img_idx = 0;
let img_list = [];
let arrow_img_list = [];
let height;
let width;
let cnv;
let container = document.getElementById("myCanvas");
let cont_width;
let cont_height;

let text_coord = [];
let text_array = [];

var check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; //한글
var check_num = /[0-9]/; // 숫자 
var check_eng = /[a-zA-Z]/; // 문자

cont_width = parseInt(window.getComputedStyle(document.getElementById("myCanvas")).width);
cont_height = parseInt(window.getComputedStyle(document.getElementById("myCanvas")).height);

if (cont_width < 1024) {
  for (let index = 0; index < 45; index++) {
    img_src.push("./source/background_small/" + index + ".jpg");
  }
} else {
  for (let index = 0; index < 45; index++) {
    img_src.push("./source/background/" + index + ".jpg");
  }
}





function windowResized() {
  loop();
  cont_width = parseInt(window.getComputedStyle(document.getElementById("myCanvas")).width);
  cont_height = parseInt(window.getComputedStyle(document.getElementById("myCanvas")).height);
  height = cont_height;
  width = cont_width;
  resizeCanvas(width, height);

}

function setup() {
  cont_width = parseInt(window.getComputedStyle(document.getElementById("myCanvas")).width);
  cont_height = parseInt(window.getComputedStyle(document.getElementById("myCanvas")).height);
  height = cont_height;
  width = cont_width;
  console.log(height, width);

  for (let index = 0; index < 6; index++) {
    text_coord[index] = [random(0, width - 880), random(60, height - 60)];
  }

  frameRate(4);
  cnv = createCanvas(width, height);
  cnv.id("canvas"); //myCanvas로 바꾸기 여차하면
  cnv.parent(container);
  cnv.style("border-radius: 30px 30px 30px 30px");
  for (let x = 0; x < count; x++) {
    state[x] = [];
    for (let y = 0; y < count; y++) {
      state[x][y] = int(random(0, 5));
    }
  }
  push();
  imageMode(CENTER);
  image(img_list[0], 0.5 * width, 0.5 * height, width, img_list[img_idx].height * width / img_list[img_idx].width);
  pop();

}

function draw() {
  // cnv.mouseOver(loop);
  // cnv.mouseOut(noLoop);
  background(255);
  push();
  imageMode(CENTER);
  image(img_list[img_idx], 0.5 * width, 0.5 * height, width, img_list[img_idx].height * width / img_list[img_idx].width);
  pop();

  if (width > 983) {
    let w_count = int(map(mouseX, 0, width, 1, 20));
    let h_count = int(map(mouseY, 0, height, 1, 20));
    let tile_W = width / w_count;
    let tile_H = height / h_count;

    noStroke();
    for (let x = 0; x < w_count; x++) {
      state[x] = [];
      for (let y = 0; y < h_count; y++) {
        state[x][y] = int(random(0, 6));
        let a = new new_content(x, y, state[x][y], tile_W, tile_H);
        a.object_show();
      }
    }

    // 글자 표시하는 부분
    if (frameCount % 8 == 1) {
      let selected_text = getSelectionText();
      // console.log(selected_text);
      add_text_array(selected_text);
      console.log(text_array);
      for (let key = 0; key < text_array.length; key++) {
        let cWidth = textWidth(str(key + 1) + ". " + text_array[key]);
        let text_x = random(0, width - cWidth);
        let text_y = height / 5 * key + height / 6.5;


        text_coord[key] = [text_x, text_y];

      }

    }

    for (let key = 0; key < text_array.length; key++) {
      rectMode(CORNER)
      if (check_kor.test(text_array[key]) == true) {
        textSize(height / 5 - height / 20);
        textFont('Gothic A1');
        fill(255);
        stroke(252, 11, 216);
        strokeWeight(8);
        text(text_array[key], text_coord[key][0], text_coord[key][1]);
      } else if (check_eng.test(text_array[key]) == true) {
        textSize(height / 5 - height / 40);
        textFont('Lexend');
        fill(255);
        stroke(252, 11, 216);
        strokeWeight(8);
        text(text_array[key], text_coord[key][0], text_coord[key][1]);
      }
    }
  } else {
    if (frameCount % 8 == 1) {
      img_idx++;
      if (img_idx == img_src.length) {
        img_idx = 0;
      }
    }
  }
}

// 실제로 그려지는 것들
class new_content {
  constructor(x, y, index_cont, tile_W, tile_H) {
    this.x = x;
    this.y = y;
    this.index_cont = index_cont;
    this.tile_W = tile_W;
    this.tile_H = tile_H;
  }
  // 경우에 따라 다르게 그려지는 것들
  object_show() {
    if (this.index_cont == 0) {
      push();
      // fill(252, 11, 216);
      // ellipseMode(CORNER);
      translate(this.x * this.tile_W, this.y * this.tile_H);
      // ellipse(0, 0, this.tile_W, this.tile_H);
      image(arrow_img_list[this.index_cont], 0, 0, this.tile_W, this.tile_H);
      pop();
      // console.log(this.index_cont)
    } else if (this.index_cont == 1) {
      push();
      // fill(252, 11, 216);
      // ellipseMode(CORNER);
      translate(this.x * this.tile_W, this.y * this.tile_H);
      // ellipse(0, 0, this.tile_W, this.tile_H);
      image(arrow_img_list[this.index_cont], 0, 0, this.tile_W, this.tile_H);
      pop();
      // console.log(this.index_cont)
    } else if (this.index_cont == 2) {
      push();
      // fill(252, 11, 216);
      // ellipseMode(CORNER);
      translate(this.x * this.tile_W, this.y * this.tile_H);
      // ellipse(0, 0, this.tile_W, this.tile_H);
      image(arrow_img_list[this.index_cont], 0, 0, this.tile_W, this.tile_H);
      pop();
    } else if (this.index_cont == 3) {
      push();
      // fill(252, 11, 216);
      // ellipseMode(CORNER);
      translate(this.x * this.tile_W, this.y * this.tile_H);
      // ellipse(0, 0, this.tile_W, this.tile_H);
      image(arrow_img_list[this.index_cont], 0, 0, this.tile_W, this.tile_H);
      pop();
    }
  }
}


function preload() {
  for (let i = 0; i < img_src.length; i++) {
    img_list.push(loadImage(img_src[i]));
  }
  for (let a = 0; a < arrow_img_src.length; a++) {
    arrow_img_list.push(loadImage(arrow_img_src[a]));
  }

}

function mousePressed() {
  if (width > 983) {
    img_idx += 1;
    if (img_idx == img_src.length) {
      img_idx = 0;
    }
  }
}

function touchPressed() {
  if (width > 983) {
    img_idx += 1;
    if (img_idx == img_src.length) {
      img_idx = 0;
    }
  }
}


function no_loop() {
  noLoop();

}

function yes_loop() {
  loop();
}

function getSelectionText() {
  var text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  return text;
}

function add_text_array(text) {
  if ((text_array[text_array.length - 1] != text) && text.length != 0) {
    text_array.push(text)
  }
  if (text_array.length == 6) {
    text_array = []
  }
}

function mouseOver() {
  cnv.mouseOver();
  yes_loop();
}

function mouseOut() {
  cnv.mouseOut();
  noLoop();
}
