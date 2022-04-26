const show = () => {
  
  document.querySelector(".container_1 .popup-img").style.display='block';
  document.querySelector(".container_1 .popup-img span ").onclick=()=>{
    document.querySelector(".container_1 .popup-img").style.display='none'
  }
  
  
  var bg = new Image(); 
  bg.src = "https://user-images.githubusercontent.com/57130197/165151313-238e0b30-510a-41af-b037-8fb4e3ab9e33.jpg";
  
  
  
  var img1 = new Image(); //場景 
  // img.setAttribute("crossOrigin",'Anonymous');
  //寫法就是用if判斷圖片的ID是不是被設成block
  //是的話就代表這是要被放上去的
  if(document.getElementById("認得").style.display=="block")
    img1.src = "https://user-images.githubusercontent.com/57130197/165149838-351a06a4-1a94-44bc-8f92-e658b2d55cfb.jpg";
  else if(document.getElementById("不認得").style.display=="block")
    img1.src = "https://user-images.githubusercontent.com/57130197/165149622-262bca85-7807-48f6-b3cb-abfd1d40a89b.jpg";
  else if(document.getElementById("自然").style.display=="block")
    img1.src = "https://user-images.githubusercontent.com/57130197/165149832-b7849dca-219d-4cdb-8cc7-eca6488ce531.jpg";
  else if(document.getElementById("沒有特別").style.display=="block")
    img1.src = "https://user-images.githubusercontent.com/57130197/165150960-219fd058-f157-4e62-bbeb-b678c5749e14.png";
  
  var img2 = new Image(); //人物
  if(document.getElementById("重要他人").style.display=="block")
    img2.src = "https://i.imgur.com/LeJ0qn5.jpg";
  else if(document.getElementById("認識、認得、非重要他人").style.display=="block")
    img2.src = "https://i.imgur.com/keeKHzp.jpg";
  else if(document.getElementById("不認識也不認得").style.display=="block")
    img2.src = "https://i.imgur.com/mhYWZfx.jpg";
  else if(document.getElementById("當事人").style.display=="block")
    img2.src = "https://i.imgur.com/2NANyrL.jpg";
  else if(document.getElementById("旁觀者").style.display=="block")
    img2.src = "https://i.imgur.com/itAm6X1.jpg";
  else if(document.getElementById("無人").style.display=="block")
    img2.src = "https://i.imgur.com/khsgYip.jpg";
  
  var img3 = new Image(); //情緒一
   if(document.getElementById("悲傷").style.display=="block")
    img3.src = "https://user-images.githubusercontent.com/57130197/165151265-82ac247f-5dea-4e50-868c-1df543fb4ee8.jpg";
  else if(document.getElementById("快樂").style.display=="block")
    img3.src = "https://user-images.githubusercontent.com/57130197/165151175-d568ca51-88a0-42dd-a673-478fe423e383.jpg";
  else if(document.getElementById("恐怖").style.display=="block")
    img3.src = "https://user-images.githubusercontent.com/57130197/165151221-123dbe60-425d-43d3-b465-4c3b742acff8.jpg";
  else if(document.getElementById("荒謬").style.display=="block")
    img3.src = "https://user-images.githubusercontent.com/57130197/165151226-253df6ee-c9e3-4504-82cb-ca68ad367dfb.jpg";
  else if(document.getElementById("憤怒").style.display=="block")
    img3.src = "https://user-images.githubusercontent.com/57130197/165151302-e92b1aa4-6f83-4adf-90a8-9a3657bf2598.jpg";
  else if(document.getElementById("孤單").style.display=="block")
    img3.src = "https://user-images.githubusercontent.com/57130197/165151211-9a05f58d-0e3a-4647-b6d8-2fe122a003da.jpg";
  else if(document.getElementById("幸福").style.display=="block")
    img3.src = "https://user-images.githubusercontent.com/57130197/165151258-fa9362c5-3067-4a92-afbc-a4798c515c60.jpg";
  else if(document.getElementById("無").style.display=="block")
    img3.src = "https://user-images.githubusercontent.com/57130197/165151278-e80f645d-b6b9-4a7f-a23e-074e4907efb2.jpg";
  else if(document.getElementById("淒慘").style.display=="block")
    img3.src = "https://user-images.githubusercontent.com/57130197/165151250-1d53fcd3-e820-4eac-80c9-651878e163e6.jpg";
  else if(document.getElementById("憂鬱").style.display=="block")
    img3.src = "https://user-images.githubusercontent.com/57130197/165151295-d52cbd1a-55ee-4e4b-8693-cf7d5b0248f4.jpg";
  else if(document.getElementById("焦急").style.display=="block")
    img3.src = "https://user-images.githubusercontent.com/57130197/165151284-cc59b04a-b756-45f6-b69e-4d2ccffb1cf6.jpg";
  
  
  var img4 = new Image(); //情緒二
  if(document.getElementById("悲傷2").style.display=="block")
    img4.src = "https://user-images.githubusercontent.com/57130197/165151265-82ac247f-5dea-4e50-868c-1df543fb4ee8.jpg";
  else if(document.getElementById("快樂2").style.display=="block")
    img4.src = "https://user-images.githubusercontent.com/57130197/165151175-d568ca51-88a0-42dd-a673-478fe423e383.jpg";
  else if(document.getElementById("恐怖2").style.display=="block")
    img4.src = "https://user-images.githubusercontent.com/57130197/165151221-123dbe60-425d-43d3-b465-4c3b742acff8.jpg";
  else if(document.getElementById("荒謬2").style.display=="block")
    img4.src = "https://user-images.githubusercontent.com/57130197/165151226-253df6ee-c9e3-4504-82cb-ca68ad367dfb.jpg";
  else if(document.getElementById("憤怒2").style.display=="block")
    img4.src = "https://user-images.githubusercontent.com/57130197/165151302-e92b1aa4-6f83-4adf-90a8-9a3657bf2598.jpg";
  else if(document.getElementById("孤單2").style.display=="block")
    img4.src = "https://user-images.githubusercontent.com/57130197/165151211-9a05f58d-0e3a-4647-b6d8-2fe122a003da.jpg";
  else if(document.getElementById("幸福2").style.display=="block")
    img4.src = "https://user-images.githubusercontent.com/57130197/165151258-fa9362c5-3067-4a92-afbc-a4798c515c60.jpg";
  else if(document.getElementById("無2").style.display=="block")
    img4.src = "https://user-images.githubusercontent.com/57130197/165151278-e80f645d-b6b9-4a7f-a23e-074e4907efb2.jpg";
  else if(document.getElementById("淒慘2").style.display=="block")
    img4.src = "https://user-images.githubusercontent.com/57130197/165151250-1d53fcd3-e820-4eac-80c9-651878e163e6.jpg";
  else if(document.getElementById("憂鬱2").style.display=="block")
    img4.src = "https://user-images.githubusercontent.com/57130197/165151295-d52cbd1a-55ee-4e4b-8693-cf7d5b0248f4.jpg";
  else if(document.getElementById("焦急2").style.display=="block")
    img4.src = "https://user-images.githubusercontent.com/57130197/165151284-cc59b04a-b756-45f6-b69e-4d2ccffb1cf6.jpg";
 
  var img5 = new Image(); //段落
   if(document.getElementById("因果關係").style.display=="block")
    img5.src = "https://user-images.githubusercontent.com/57130197/165150361-1a3ac6fb-156d-4fc3-83d8-851315e14640.jpg";
  else if(document.getElementById("元素過多").style.display=="block")
    img5.src = "https://user-images.githubusercontent.com/57130197/165150421-5c706efb-c756-48c0-9694-d1ab17551566.jpg";
  else if(document.getElementById("長篇劇情").style.display=="block")
    img5.src = "https://user-images.githubusercontent.com/57130197/165150433-e2ea6300-6292-4c79-817f-384175d769dc.jpg";
  else if(document.getElementById("分段落").style.display=="block")
    img5.src = "https://user-images.githubusercontent.com/57130197/165150429-248df136-7d29-4adb-9597-274069862bb6.jpg";
  else if(document.getElementById("不同晚上同個夢境").style.display=="block")
    img5.src = "https://user-images.githubusercontent.com/57130197/165150411-0619545c-d92e-4ab6-b2cc-e2d4a14722af.jpg";
  else if(document.getElementById("同個晚上多個夢境").style.display=="block")
    img5.src = "https://user-images.githubusercontent.com/57130197/165150407-23f2c0d1-2d5d-4b69-b501-ccc76ca8fec4.jpg";
  else if(document.getElementById("夢中夢").style.display=="block")
    img5.src = "https://user-images.githubusercontent.com/57130197/165150437-98cf3a17-69f1-46e5-b91d-cbda5536e72b.jpg";
  
  var canvas = document.getElementById('canvas2');
  var context = canvas.getContext('2d');
  canvas.width = 830;
  canvas.height = 600;
  context.globalAlpha = 1.0;
  context.drawImage(bg,50,50,830,600); //這行是背景
  context.drawImage(img1,207.5,358,130,190); //這行是場景
  context.drawImage(img2,284.5,143,130,190); //這行是人物
  context.drawImage(img3,366.5,358,130,190); //這行是情緒1
  context.drawImage(img4,527.5,358,130,190); //這行是情緒2
  context.drawImage(img5,444.5,143,130,190); //這行是段落
//這行是段落


}


const myFunction = () => {
  document.getElementById("認得").style.display ='block';
  document.getElementById("不認得").style.display ='none'
  document.getElementById("自然").style.display ='none'
  document.getElementById("沒有特別").style.display ='none'
}

const myFunction2 = () => {
  document.getElementById("不認得").style.display ='block';
  document.getElementById("認得").style.display ='none'
  document.getElementById("自然").style.display ='none'
 document.getElementById("沒有特別").style.display ='none'
}

const myFunction3 = () => {
  document.getElementById("自然").style.display ='block';
  document.getElementById("認得").style.display ='none'
  document.getElementById("不認得").style.display ='none'
  document.getElementById("沒有特別").style.display ='none'
}

const myFunction4 = () => {
  document.getElementById("沒有特別").style.display ='block';
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
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單").style.display ='none'
  document.getElementById("幸福").style.display ='none'
  document.getElementById("無").style.display ='none'
  document.getElementById("淒慘").style.display ='none'
  document.getElementById("憂鬱").style.display ='none'
  document.getElementById("焦急").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}
const eFunction1 = () => {
  document.getElementById("快樂").style.display ='block';
  document.getElementById("悲傷").style.display ='none'
  document.getElementById("恐怖").style.display ='none'
  document.getElementById("荒謬").style.display ='none'
  document.getElementById("憤怒").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單").style.display ='none'
  document.getElementById("幸福").style.display ='none'
  document.getElementById("無").style.display ='none'
  document.getElementById("淒慘").style.display ='none'
  document.getElementById("憂鬱").style.display ='none'
  document.getElementById("焦急").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}

const eFunction2 = () => {
  document.getElementById("恐怖").style.display ='block';
  document.getElementById("快樂").style.display ='none'
  document.getElementById("悲傷").style.display ='none'
  document.getElementById("荒謬").style.display ='none'
  document.getElementById("憤怒").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單").style.display ='none'
  document.getElementById("幸福").style.display ='none'
  document.getElementById("無").style.display ='none'
  document.getElementById("淒慘").style.display ='none'
  document.getElementById("憂鬱").style.display ='none'
  document.getElementById("焦急").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}


const eFunction3 = () => {
  document.getElementById("荒謬").style.display ='block';
  document.getElementById("快樂").style.display ='none'
  document.getElementById("恐怖").style.display ='none'
  document.getElementById("悲傷").style.display ='none'
  document.getElementById("憤怒").style.display ='none'
  document.getElementById("孤單").style.display ='none'
  document.getElementById("幸福").style.display ='none'
  document.getElementById("無").style.display ='none'
  document.getElementById("淒慘").style.display ='none'
  document.getElementById("憂鬱").style.display ='none'
  document.getElementById("焦急").style.display ='none'
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
  document.getElementById("幸福").style.display ='none'
  document.getElementById("無").style.display ='none'
  document.getElementById("淒慘").style.display ='none'
  document.getElementById("憂鬱").style.display ='none'
  document.getElementById("焦急").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}

    
  
const eFunction5 = () => {
  // document.getElementById("興奮").style.display ='block';
  document.getElementById("快樂").style.display ='block'
  document.getElementById("恐怖").style.display ='none'
  document.getElementById("荒謬").style.display ='none'
  document.getElementById("憤怒").style.display ='none'
  document.getElementById("悲傷").style.display ='none'
  document.getElementById("孤單").style.display ='none'
  document.getElementById("幸福").style.display ='none'
  document.getElementById("無").style.display ='none'
  document.getElementById("淒慘").style.display ='none'
  document.getElementById("憂鬱").style.display ='none'
  document.getElementById("焦急").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}
  
  
const eFunction6 = () => {
  document.getElementById("孤單").style.display ='block';
  document.getElementById("快樂").style.display ='none'
  document.getElementById("恐怖").style.display ='none'
  document.getElementById("荒謬").style.display ='none'
  document.getElementById("憤怒").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("悲傷").style.display ='none'
  document.getElementById("幸福").style.display ='none'
  document.getElementById("無").style.display ='none'
  document.getElementById("淒慘").style.display ='none'
  document.getElementById("憂鬱").style.display ='none'
  document.getElementById("焦急").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}
  
const eFunction7 = () => {
  document.getElementById("幸福").style.display ='block';
  document.getElementById("快樂").style.display ='none'
  document.getElementById("恐怖").style.display ='none'
  document.getElementById("荒謬").style.display ='none'
  document.getElementById("憤怒").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單").style.display ='none'
  document.getElementById("悲傷").style.display ='none'
  document.getElementById("無").style.display ='none'
  document.getElementById("淒慘").style.display ='none'
  document.getElementById("憂鬱").style.display ='none'
  document.getElementById("焦急").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}


const eFunction8 = () => {
  document.getElementById("無").style.display ='block';
  document.getElementById("快樂").style.display ='none'
  document.getElementById("恐怖").style.display ='none'
  document.getElementById("荒謬").style.display ='none'
  document.getElementById("憤怒").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單").style.display ='none'
  document.getElementById("幸福").style.display ='none'
  document.getElementById("悲傷").style.display ='none'
  document.getElementById("淒慘").style.display ='none'
  document.getElementById("憂鬱").style.display ='none'
  document.getElementById("焦急").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}
  
const eFunction9 = () => {
  document.getElementById("淒慘").style.display ='block';
  document.getElementById("快樂").style.display ='none'
  document.getElementById("恐怖").style.display ='none'
  document.getElementById("荒謬").style.display ='none'
  document.getElementById("憤怒").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單").style.display ='none'
  document.getElementById("幸福").style.display ='none'
  document.getElementById("悲傷").style.display ='none'
  document.getElementById("無").style.display ='none'
  document.getElementById("憂鬱").style.display ='none'
  document.getElementById("焦急").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}
  
const eFunction10 = () => {
  document.getElementById("憂鬱").style.display ='block';
  document.getElementById("快樂").style.display ='none'
  document.getElementById("恐怖").style.display ='none'
  document.getElementById("荒謬").style.display ='none'
  document.getElementById("憤怒").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單").style.display ='none'
  document.getElementById("幸福").style.display ='none'
  document.getElementById("無").style.display ='none'
  document.getElementById("淒慘").style.display ='none'
  document.getElementById("悲傷").style.display ='none'
  document.getElementById("焦急").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}

const eFunction11 = () => {
  document.getElementById("焦急").style.display ='block';
  document.getElementById("快樂").style.display ='none'
  document.getElementById("恐怖").style.display ='none'
  document.getElementById("荒謬").style.display ='none'
  document.getElementById("憤怒").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單").style.display ='none'
  document.getElementById("幸福").style.display ='none'
  document.getElementById("無").style.display ='none'
  document.getElementById("淒慘").style.display ='none'
  document.getElementById("憂鬱").style.display ='none'
  document.getElementById("悲傷").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}

const eFunction12 = () => {
  // document.getElementById("厭惡").style.display ='block';
  document.getElementById("快樂").style.display ='block'
  document.getElementById("恐怖").style.display ='none'
  document.getElementById("荒謬").style.display ='none'
  document.getElementById("憤怒").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單").style.display ='none'
  document.getElementById("幸福").style.display ='none'
  document.getElementById("無").style.display ='none'
  document.getElementById("淒慘").style.display ='none'
  document.getElementById("憂鬱").style.display ='none'
  document.getElementById("焦急").style.display ='none'
  document.getElementById("悲傷").style.display ='none'
}

// 情緒二
const e2Function = () => {
  document.getElementById("悲傷2").style.display ='block';
  document.getElementById("快樂2").style.display ='none'
  document.getElementById("恐怖2").style.display ='none'
  document.getElementById("荒謬2").style.display ='none'
  document.getElementById("憤怒2").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單2").style.display ='none'
  document.getElementById("幸福2").style.display ='none'
  document.getElementById("無2").style.display ='none'
  document.getElementById("淒慘2").style.display ='none'
  document.getElementById("憂鬱2").style.display ='none'
  document.getElementById("焦急2").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}
const e2Function1 = () => {
  document.getElementById("快樂2").style.display ='block';
  document.getElementById("悲傷2").style.display ='none'
  document.getElementById("恐怖2").style.display ='none'
  document.getElementById("荒謬2").style.display ='none'
  document.getElementById("憤怒2").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單2").style.display ='none'
  document.getElementById("幸福2").style.display ='none'
  document.getElementById("無2").style.display ='none'
  document.getElementById("淒慘2").style.display ='none'
  document.getElementById("憂鬱2").style.display ='none'
  document.getElementById("焦急2").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}

const e2Function2 = () => {
  document.getElementById("恐怖2").style.display ='block';
  document.getElementById("快樂2").style.display ='none'
  document.getElementById("悲傷2").style.display ='none'
  document.getElementById("荒謬2").style.display ='none'
  document.getElementById("憤怒2").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單2").style.display ='none'
  document.getElementById("幸福2").style.display ='none'
  document.getElementById("無2").style.display ='none'
  document.getElementById("淒慘2").style.display ='none'
  document.getElementById("憂鬱2").style.display ='none'
  document.getElementById("焦急2").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}


const e2Function3 = () => {
  document.getElementById("荒謬2").style.display ='block';
  document.getElementById("快樂2").style.display ='none'
  document.getElementById("恐怖2").style.display ='none'
  document.getElementById("悲傷2").style.display ='none'
  document.getElementById("憤怒2").style.display ='none'
  document.getElementById("孤單2").style.display ='none'
  document.getElementById("幸福2").style.display ='none'
  document.getElementById("無2").style.display ='none'
  document.getElementById("淒慘2").style.display ='none'
  document.getElementById("憂鬱2").style.display ='none'
  document.getElementById("焦急2").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}
  
const e2Function4 = () => {
  document.getElementById("憤怒2").style.display ='block';
  document.getElementById("快樂2").style.display ='none'
  document.getElementById("恐怖2").style.display ='none'
  document.getElementById("荒謬2").style.display ='none'
  document.getElementById("悲傷2").style.display ='none'
  document.getElementById("興奮2").style.display ='none'
  // document.getElementById("孤單").style.display ='none'
  document.getElementById("幸福2").style.display ='none'
  document.getElementById("無2").style.display ='none'
  document.getElementById("淒慘2").style.display ='none'
  document.getElementById("憂鬱2").style.display ='none'
  document.getElementById("焦急2").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}

    
  
const e2Function5 = () => {
  // document.getElementById("興奮").style.display ='block';
  document.getElementById("快樂2").style.display ='block'
  document.getElementById("恐怖2").style.display ='none'
  document.getElementById("荒謬2").style.display ='none'
  document.getElementById("憤怒2").style.display ='none'
  document.getElementById("悲傷2").style.display ='none'
  document.getElementById("孤單2").style.display ='none'
  document.getElementById("幸福2").style.display ='none'
  document.getElementById("無2").style.display ='none'
  document.getElementById("淒慘2").style.display ='none'
  document.getElementById("憂鬱2").style.display ='none'
  document.getElementById("焦急2").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}
  
  
const e2Function6 = () => {
  document.getElementById("孤單2").style.display ='block';
  document.getElementById("快樂2").style.display ='none'
  document.getElementById("恐怖2").style.display ='none'
  document.getElementById("荒謬2").style.display ='none'
  document.getElementById("憤怒2").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("悲傷2").style.display ='none'
  document.getElementById("幸福2").style.display ='none'
  document.getElementById("無2").style.display ='none'
  document.getElementById("淒慘2").style.display ='none'
  document.getElementById("憂鬱2").style.display ='none'
  document.getElementById("焦急2").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}
  
const e2Function7 = () => {
  document.getElementById("幸福2").style.display ='block';
  document.getElementById("快樂2").style.display ='none'
  document.getElementById("恐怖2").style.display ='none'
  document.getElementById("荒謬2").style.display ='none'
  document.getElementById("憤怒2").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單2").style.display ='none'
  document.getElementById("悲傷2").style.display ='none'
  document.getElementById("無2").style.display ='none'
  document.getElementById("淒慘2").style.display ='none'
  document.getElementById("憂鬱2").style.display ='none'
  document.getElementById("焦急2").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}


const e2Function8 = () => {
  document.getElementById("無2").style.display ='block';
  document.getElementById("快樂2").style.display ='none'
  document.getElementById("恐怖2").style.display ='none'
  document.getElementById("荒謬2").style.display ='none'
  document.getElementById("憤怒2").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單2").style.display ='none'
  document.getElementById("幸福2").style.display ='none'
  document.getElementById("悲傷2").style.display ='none'
  document.getElementById("淒慘2").style.display ='none'
  document.getElementById("憂鬱2").style.display ='none'
  document.getElementById("焦急2").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}
  
const e2Function9 = () => {
  document.getElementById("淒慘2").style.display ='block';
  document.getElementById("快樂2").style.display ='none'
  document.getElementById("恐怖2").style.display ='none'
  document.getElementById("荒謬2").style.display ='none'
  document.getElementById("憤怒2").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單2").style.display ='none'
  document.getElementById("幸福2").style.display ='none'
  document.getElementById("悲傷2").style.display ='none'
  document.getElementById("無2").style.display ='none'
  document.getElementById("憂鬱2").style.display ='none'
  document.getElementById("焦急2").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}
  
const e2Function10 = () => {
  document.getElementById("憂鬱2").style.display ='block';
  document.getElementById("快樂2").style.display ='none'
  document.getElementById("恐怖2").style.display ='none'
  document.getElementById("荒謬2").style.display ='none'
  document.getElementById("憤怒2").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單2").style.display ='none'
  document.getElementById("幸福2").style.display ='none'
  document.getElementById("無2").style.display ='none'
  document.getElementById("淒慘2").style.display ='none'
  document.getElementById("悲傷2").style.display ='none'
  document.getElementById("焦急2").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}

const e2Function11 = () => {
  document.getElementById("焦急2").style.display ='block';
  document.getElementById("快樂2").style.display ='none'
  document.getElementById("恐怖2").style.display ='none'
  document.getElementById("荒謬2").style.display ='none'
  document.getElementById("憤怒2").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單2").style.display ='none'
  document.getElementById("幸福2").style.display ='none'
  document.getElementById("無2").style.display ='none'
  document.getElementById("淒慘2").style.display ='none'
  document.getElementById("憂鬱2").style.display ='none'
  document.getElementById("悲傷2").style.display ='none'
  // document.getElementById("厭惡").style.display ='none'
}

const e2Function12 = () => {
  // document.getElementById("厭惡").style.display ='block';
  document.getElementById("快樂2").style.display ='block'
  document.getElementById("恐怖2").style.display ='none'
  document.getElementById("荒謬2").style.display ='none'
  document.getElementById("憤怒2").style.display ='none'
  // document.getElementById("興奮").style.display ='none'
  document.getElementById("孤單2").style.display ='none'
  document.getElementById("幸福2").style.display ='none'
  document.getElementById("無2").style.display ='none'
  document.getElementById("淒慘2").style.display ='none'
  document.getElementById("憂鬱2").style.display ='none'
  document.getElementById("焦急2").style.display ='none'
  document.getElementById("悲傷2").style.display ='none'
}

// document.querySelector('.b_download').addEventListener('click', function() {
//         html2canvas(document.querySelector('.container_1 .popup_img #canvas2'), {
//             onrendered: function(canvas) {
//                 // document.body.appendChild(canvas);
//               return Canvas2Image.saveAsPNG(canvas);
//             }
//         });
//  });
  

// const download = () => {
//   function download(){
//     const imageLink = document.creataElement('a');
//     const canvas = document.getElementById('canvas2');
//     imageLink.download = 'mydream.png';
//     imageLink.href = canvas.toDataURL('image/png',1);
//     //window.open(imageLink)
//     // document.write('<img src=" '+imageLink+' "/>');
//     // console.log(imageLink.href);   
//     imageLink.click();
//   }
//   var canvas = etElementById("無2")
//   this.canvas.toBlob(blob => {
//   const a = document.createElement('a');
//   a.download = 'image.png';
//   a.style.display = 'none';
//   a.href = URL.createObjectURL(blob);
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
// });
// }
  
  
  
// }
//