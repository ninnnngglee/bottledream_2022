const show = () => {
  
  document.querySelector(".container_1 .popup-img").style.display='block';
  
  document.querySelector(".container_1 .popup-img span ").onclick=()=>{
    document.querySelector(".container_1 .popup-img").style.display='none'
  }
  
  
  var bg = new Image(); 
  bg.src = "https://i.imgur.com/dfQS3h3.jpg";
  
  var img1 = new Image(); //場景 
  //寫法就是用if判斷圖片的ID是不是被設成block
  //是的話就代表這是要被放上去的
  if(document.getElementById("認得").style.display=="block")
    img1.src = "https://i.imgur.com/bOvVkaZ.jpg";
  else if(document.getElementById("不認得").style.display=="block")
    img1.src = "https://i.imgur.com/0r6tSZW.png";
  else if(document.getElementById("自然").style.display=="block")
    img1.src = "https://i.imgur.com/0r6tSZW.png";
  else if(document.getElementById("黑白").style.display=="block")
    img1.src = "https://i.imgur.com/0r6tSZW.png";
  
  var img2 = new Image(); //人物
  if(document.getElementById("重要他人").style.display=="block")
    img2.src = "https://i.imgur.com/0r6tSZW.png";
  else if(document.getElementById("認識、認得、非重要他人").style.display=="block")
    img2.src = "https://i.imgur.com/0r6tSZW.png";
  else if(document.getElementById("不認識也不認得").style.display=="block")
    img2.src = "https://i.imgur.com/Zgm2Cwa.png";
  else if(document.getElementById("當事人").style.display=="block")
    img2.src = "https://i.imgur.com/0r6tSZW.png";
  else if(document.getElementById("旁觀者").style.display=="block")
    img2.src = "https://i.imgur.com/0r6tSZW.png";
  else if(document.getElementById("無人").style.display=="block")
    img2.src = "https://i.imgur.com/0r6tSZW.png";
  
  var img3 = new Image(); //情緒
   if(document.getElementById("悲傷").style.display=="block")
    img3.src = "https://i.imgur.com/mCrEfTf.jpg";
  else if(document.getElementById("快樂").style.display=="block")
    img3.src = "https://i.imgur.com/xiAqXif.jpg";
  else if(document.getElementById("恐怖").style.display=="block")
    img3.src = "https://i.imgur.com/LBZAhk1.jpg";
  else if(document.getElementById("荒謬").style.display=="block")
    img3.src = "https://i.imgur.com/q2Nuu3m.png";
  else if(document.getElementById("憤怒").style.display=="block")
    img3.src = "https://i.imgur.com/BtInK11.png";
  else if(document.getElementById("興奮").style.display=="block")
    img3.src = "https://i.imgur.com/E0SEedG.png";
  
  var img4 = new Image(); //情緒2
   if(document.getElementById("孤單").style.display=="block")
    img4.src = "https://i.imgur.com/BtpO3vw.jpg";
  else if(document.getElementById("幸福").style.display=="block")
    img4.src = "https://i.imgur.com/jxqEjiZ.jpg";
  else if(document.getElementById("無").style.display=="block")
    img4.src = "https://i.imgur.com/rP4IaSz.jpg";
  else if(document.getElementById("淒慘").style.display=="block")
    img4.src = "https://i.imgur.com/0r6tSZW.png";
  else if(document.getElementById("憂鬱").style.display=="block")
    img4.src = "https://i.imgur.com/waRdYhO.jpg";
  else if(document.getElementById("焦急").style.display=="block")
    img4.src = "https://i.imgur.com/74lqBIz.jpg";
  else if(document.getElementById("厭惡").style.display=="block")
    img4.src = "https://i.imgur.com/pbnazQ3.png";
  
  var img5 = new Image(); //段落
   if(document.getElementById("因果關係").style.display=="block")
    img5.src = "https://i.imgur.com/MIDPSVk.jpg";
  else if(document.getElementById("元素過多").style.display=="block")
    img5.src = "https://i.imgur.com/nVfIw05.jpg";
  else if(document.getElementById("長篇劇情").style.display=="block")
    img5.src = "https://i.imgur.com/8wP5QWY.jpg";
  else if(document.getElementById("分段落").style.display=="block")
    img5.src = "https://i.imgur.com/kZyjqt2.jpg";
  else if(document.getElementById("不同晚上同個夢境").style.display=="block")
    img5.src = "https://i.imgur.com/b4ucyR8.jpg";
  else if(document.getElementById("同個晚上多個夢境").style.display=="block")
    img5.src = "https://i.imgur.com/XCUI9Ik.jpg";
  else if(document.getElementById("夢中夢").style.display=="block")
    img5.src = "https://i.imgur.com/kaQroGn.jpg";
  
  var canvas = document.getElementById('canvas2');
  var context = canvas.getContext('2d');
  canvas.width = 840;
  canvas.height = 600;
  context.globalAlpha = 1.0;
  context.drawImage(bg, 0, 0,840,600); //這行是背景
  context.drawImage(img1, 164, 311,130,190); //這行是場景
  context.drawImage(img2, 239, 96,130,190); //這行是人物
  context.drawImage(img3, 323, 311,130,190); //這行是情緒1
  context.drawImage(img4, 484, 311,130,190); //這行是情緒2
  context.drawImage(img5, 401, 96,130,190); //這行是段落


}


const myFunction = () => {
  document.getElementById("認得").style.display ='block';
  document.getElementById("不認得").style.display ='none'
  document.getElementById("自然").style.display ='none'
  document.getElementById("黑白").style.display ='none'
}

const myFunction2 = () => {
  document.getElementById("不認得").style.display ='block';
  document.getElementById("認得").style.display ='none'
  document.getElementById("自然").style.display ='none'
 document.getElementById("黑白").style.display ='none'
}

const myFunction3 = () => {
  document.getElementById("自然").style.display ='block';
  document.getElementById("認得").style.display ='none'
  document.getElementById("不認得").style.display ='none'
  document.getElementById("黑白").style.display ='none'
}

const myFunction4 = () => {
  document.getElementById("黑白").style.display ='block';
  document.getElementById("認得").style.display ='none'
  document.getElementById("不認得").style.display ='none'
  document.getElementById("自然").style.display ='none'
}



const cFunction = () => {
  document.getElementById("重要他人").style.display ='block';
  document.getElementById("認識、認得、非重要他人").style.display ='none'
  document.getElementById("不認識也不認得").style.display ='none'
  document.getElementById("當事人").style.display ='none'
  document.getElementById("旁觀者").style.display ='none'
  document.getElementById("無人").style.display ='none'
}

const cFunction2 = () => {
  document.getElementById("認識、認得、非重要他人").style.display ='block';
  document.getElementById("重要他人").style.display ='none'
  document.getElementById("不認識也不認得").style.display ='none'
  document.getElementById("當事人").style.display ='none'
  document.getElementById("旁觀者").style.display ='none'
  document.getElementById("無人").style.display ='none'
}

const cFunction3 = () => {
  document.getElementById("不認識也不認得").style.display ='block';
  document.getElementById("重要他人").style.display ='none'
  document.getElementById("認識、認得、非重要他人").style.display ='none'
  document.getElementById("當事人").style.display ='none'
  document.getElementById("旁觀者").style.display ='none'
  document.getElementById("無人").style.display ='none'
}

const cFunction4 = () => {
  document.getElementById("當事人").style.display ='block';
  document.getElementById("重要他人").style.display ='none'
  document.getElementById("認識、認得、非重要他人").style.display ='none'
  document.getElementById("不認識也不認得").style.display ='none'
  document.getElementById("旁觀者").style.display ='none'
  document.getElementById("無人").style.display ='none'
}

const cFunction5 = () => {
  document.getElementById("旁觀者").style.display ='block';
  document.getElementById("重要他人").style.display ='none'
  document.getElementById("認識、認得、非重要他人").style.display ='none'
  document.getElementById("不認識也不認得").style.display ='none'
  document.getElementById("當事者").style.display ='none'
  document.getElementById("無人").style.display ='none'
}

const cFunction6 = () => {
  document.getElementById("無人").style.display ='block';
  document.getElementById("重要他人").style.display ='none'
  document.getElementById("認識、認得、非重要他人").style.display ='none'
  document.getElementById("不認識也不認得").style.display ='none'
  document.getElementById("當事者").style.display ='none'
  document.getElementById("旁觀者").style.display ='none'
}


const pFunction = () => {
  document.getElementById("因果關係").style.display ='block';
  document.getElementById("元素過多").style.display ='none'
  document.getElementById("長篇劇情").style.display ='none'
  document.getElementById("分段落").style.display ='none'
  document.getElementById("不同晚上同個夢境").style.display ='none'
  document.getElementById("同個晚上多個夢境").style.display ='none'
  document.getElementById("夢中夢").style.display ='none'
}

const pFunction1 = () => {
  document.getElementById("元素過多").style.display ='block';
  document.getElementById("因果關係").style.display ='none'
  document.getElementById("長篇劇情").style.display ='none'
  document.getElementById("分段落").style.display ='none'
  document.getElementById("不同晚上同個夢境").style.display ='none'
  document.getElementById("同個晚上多個夢境").style.display ='none'
  document.getElementById("夢中夢").style.display ='none'
}

const pFunction2 = () => {
  document.getElementById("長篇劇情").style.display ='block';
  document.getElementById("元素過多").style.display ='none'
  document.getElementById("因果關係").style.display ='none'
  document.getElementById("分段落").style.display ='none'
  document.getElementById("不同晚上同個夢境").style.display ='none'
  document.getElementById("同個晚上多個夢境").style.display ='none'
  document.getElementById("夢中夢").style.display ='none'
}


const pFunction3 = () => {
  document.getElementById("分段落").style.display ='block';
  document.getElementById("元素過多").style.display ='none'
  document.getElementById("長篇劇情").style.display ='none'
  document.getElementById("因果關係").style.display ='none'
  document.getElementById("不同晚上同個夢境").style.display ='none'
  document.getElementById("同個晚上多個夢境").style.display ='none'
  document.getElementById("夢中夢").style.display ='none'
}


const pFunction4 = () => {
  document.getElementById("不同晚上同個夢境").style.display ='block';
  document.getElementById("元素過多").style.display ='none'
  document.getElementById("長篇劇情").style.display ='none'
  document.getElementById("分段落").style.display ='none'
  document.getElementById("因果關係").style.display ='none'
  document.getElementById("同個晚上多個夢境").style.display ='none'
  document.getElementById("夢中夢").style.display ='none'
}


const pFunction5 = () => {
  document.getElementById("同個晚上多個夢境").style.display ='block';
  document.getElementById("元素過多").style.display ='none'
  document.getElementById("長篇劇情").style.display ='none'
  document.getElementById("分段落").style.display ='none'
  document.getElementById("不同晚上同個夢境").style.display ='none'
  document.getElementById("因果關係").style.display ='none'
  document.getElementById("夢中夢").style.display ='none'
}

const pFunction6 = () => {
  document.getElementById("夢中夢").style.display ='block';
  document.getElementById("元素過多").style.display ='none'
  document.getElementById("長篇劇情").style.display ='none'
  document.getElementById("分段落").style.display ='none'
  document.getElementById("不同晚上同個夢境").style.display ='none'
  document.getElementById("同個晚上多個夢境").style.display ='none'
  document.getElementById("因果關係").style.display ='none'
}


const eFunction = () => {
  document.getElementById("悲傷").style.display ='block';
  document.getElementById("快樂").style.display ='none'
  document.getElementById("恐怖").style.display ='none'
  document.getElementById("荒謬").style.display ='none'
  document.getElementById("憤怒").style.display ='none'
  document.getElementById("興奮").style.display ='none'
  // document.getElementById("孤單").style.display ='none'
  // document.getElementById("幸福").style.display ='none'
  // document.getElementById("無").style.display ='none'
  // document.getElementById("淒慘").style.display ='none'
  // document.getElementById("憂鬱").style.display ='none'
  // document.getElementById("焦急").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}
const eFunction1 = () => {
  document.getElementById("快樂").style.display ='block';
  document.getElementById("悲傷").style.display ='none'
  document.getElementById("恐怖").style.display ='none'
  document.getElementById("荒謬").style.display ='none'
  document.getElementById("憤怒").style.display ='none'
  document.getElementById("興奮").style.display ='none'
  // document.getElementById("孤單").style.display ='none'
  // document.getElementById("幸福").style.display ='none'
  // document.getElementById("無").style.display ='none'
  // document.getElementById("淒慘").style.display ='none'
  // document.getElementById("憂鬱").style.display ='none'
  // document.getElementById("焦急").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}

const eFunction2 = () => {
  document.getElementById("恐怖").style.display ='block';
  document.getElementById("快樂").style.display ='none'
  document.getElementById("悲傷").style.display ='none'
  document.getElementById("荒謬").style.display ='none'
  document.getElementById("憤怒").style.display ='none'
  document.getElementById("興奮").style.display ='none'
  // document.getElementById("孤單").style.display ='none'
  // document.getElementById("幸福").style.display ='none'
  // document.getElementById("無").style.display ='none'
  // document.getElementById("淒慘").style.display ='none'
  // document.getElementById("憂鬱").style.display ='none'
  // document.getElementById("焦急").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}


const eFunction3 = () => {
  document.getElementById("荒謬").style.display ='block';
  document.getElementById("快樂").style.display ='none'
  document.getElementById("恐怖").style.display ='none'
  document.getElementById("悲傷").style.display ='none'
  document.getElementById("憤怒").style.display ='none'
  document.getElementById("興奮").style.display ='none'
  // document.getElementById("孤單").style.display ='none'
  // document.getElementById("幸福").style.display ='none'
  // document.getElementById("無").style.display ='none'
  // document.getElementById("淒慘").style.display ='none'
  // document.getElementById("憂鬱").style.display ='none'
  // document.getElementById("焦急").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}
  
const eFunction4 = () => {
  document.getElementById("憤怒").style.display ='block';
  document.getElementById("快樂").style.display ='none'
  document.getElementById("恐怖").style.display ='none'
  document.getElementById("荒謬").style.display ='none'
  document.getElementById("悲傷").style.display ='none'
  document.getElementById("興奮").style.display ='none'
  // document.getElementById("孤單").style.display ='none'
  // document.getElementById("幸福").style.display ='none'
  // document.getElementById("無").style.display ='none'
  // document.getElementById("淒慘").style.display ='none'
  // document.getElementById("憂鬱").style.display ='none'
  // document.getElementById("焦急").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}

    
  
const eFunction5 = () => {
  document.getElementById("興奮").style.display ='block';
  document.getElementById("快樂").style.display ='none'
  document.getElementById("恐怖").style.display ='none'
  document.getElementById("荒謬").style.display ='none'
  document.getElementById("憤怒").style.display ='none'
  document.getElementById("悲傷").style.display ='none'
  document.getElementById("孤單").style.display ='none'
  // document.getElementById("幸福").style.display ='none'
  // document.getElementById("無").style.display ='none'
  // document.getElementById("淒慘").style.display ='none'
  // document.getElementById("憂鬱").style.display ='none'
  // document.getElementById("焦急").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}
  
  
const e1Function6 = () => {
  document.getElementById("孤單").style.display ='block';
  // document.getElementById("快樂").style.display ='none'
  // document.getElementById("恐怖").style.display ='none'
  // document.getElementById("荒謬").style.display ='none'
  // document.getElementById("憤怒").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  // document.getElementById("悲傷").style.display ='none'
  document.getElementById("幸福").style.display ='none'
  document.getElementById("無").style.display ='none'
  document.getElementById("淒慘").style.display ='none'
  document.getElementById("憂鬱").style.display ='none'
  document.getElementById("焦急").style.display ='none'
  document.getElementById("厭惡").style.display ='none'
}
  
const e1Function7 = () => {
  document.getElementById("幸福").style.display ='block';
  // document.getElementById("快樂").style.display ='none'
  // document.getElementById("恐怖").style.display ='none'
  // document.getElementById("荒謬").style.display ='none'
  // document.getElementById("憤怒").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  // document.getElementById("孤單").style.display ='none'
  // document.getElementById("悲傷").style.display ='none'
  document.getElementById("無").style.display ='none'
  document.getElementById("淒慘").style.display ='none'
  document.getElementById("憂鬱").style.display ='none'
  document.getElementById("焦急").style.display ='none'
  document.getElementById("厭惡").style.display ='none'
}


const e1Function8 = () => {
  document.getElementById("無").style.display ='block';
  // document.getElementById("快樂").style.display ='none'
  // document.getElementById("恐怖").style.display ='none'
  // document.getElementById("荒謬").style.display ='none'
  // document.getElementById("憤怒").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  // document.getElementById("孤單").style.display ='none'
  document.getElementById("幸福").style.display ='none'
  // document.getElementById("悲傷").style.display ='none'
  document.getElementById("淒慘").style.display ='none'
  document.getElementById("憂鬱").style.display ='none'
  document.getElementById("焦急").style.display ='none'
  document.getElementById("厭惡").style.display ='none'
}
  
const e1Function9 = () => {
  document.getElementById("淒慘").style.display ='block';
  // document.getElementById("快樂").style.display ='none'
  // document.getElementById("恐怖").style.display ='none'
  // document.getElementById("荒謬").style.display ='none'
  // document.getElementById("憤怒").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單").style.display ='none'
  document.getElementById("幸福").style.display ='none'
  // document.getElementById("悲傷").style.display ='none'
  document.getElementById("無").style.display ='none'
  document.getElementById("憂鬱").style.display ='none'
  document.getElementById("焦急").style.display ='none'
  document.getElementById("厭惡").style.display ='none'
}
  
const e1Function10 = () => {
  document.getElementById("憂鬱").style.display ='block';
  // document.getElementById("快樂").style.display ='none'
  // document.getElementById("恐怖").style.display ='none'
  // document.getElementById("荒謬").style.display ='none'
  // document.getElementById("憤怒").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單").style.display ='none'
  document.getElementById("幸福").style.display ='none'
  document.getElementById("無").style.display ='none'
  document.getElementById("淒慘").style.display ='none'
  // document.getElementById("悲傷").style.display ='none'
  document.getElementById("焦急").style.display ='none'
  document.getElementById("厭惡").style.display ='none'
}

const e1Function11 = () => {
  document.getElementById("焦急").style.display ='block';
  // document.getElementById("快樂").style.display ='none'
  // document.getElementById("恐怖").style.display ='none'
  // document.getElementById("荒謬").style.display ='none'
  // document.getElementById("憤怒").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單").style.display ='none'
  document.getElementById("幸福").style.display ='none'
  document.getElementById("無").style.display ='none'
  document.getElementById("淒慘").style.display ='none'
  document.getElementById("憂鬱").style.display ='none'
  // document.getElementById("悲傷").style.display ='none'
  document.getElementById("厭惡").style.display ='none'
}

const e1Function12 = () => {
  document.getElementById("厭惡").style.display ='block';
  // document.getElementById("快樂").style.display ='none'
  // document.getElementById("恐怖").style.display ='none'
  // document.getElementById("荒謬").style.display ='none'
  // document.getElementById("憤怒").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單").style.display ='none'
  document.getElementById("幸福").style.display ='none'
  document.getElementById("無").style.display ='none'
  document.getElementById("淒慘").style.display ='none'
  document.getElementById("憂鬱").style.display ='none'
  document.getElementById("焦急").style.display ='none'
  // document.getElementById("悲傷").style.display ='none'
}