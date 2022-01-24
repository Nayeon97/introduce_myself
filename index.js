// a태그 누르면 열림. 닫힘
function open_interest() 
{
    let open = document.getElementById("introduce__text_interest");
    let icon = document.getElementById("icon-text-a");
   if (open.style.display == 'none')
    {
      open.style.display = 'block';
      icon.innerText = '🔎';
   }
    else{
      open.style.display = 'none';
      icon.innerText  = '📄';
   }
}


function open_goal() 
{  
    let open = document.getElementById("introduce__text_goal");
    let icon = document.getElementById("icon-text-b");
    if (open.style.display == 'none')
    {
      open.style.display = 'block';
      icon.innerText = '🔎';
   }
    else{
      open.style.display = 'none';
      icon.innerText  = '📄';
   }
}

function open_hobby() 
{
    let open = document.getElementById("introduce__text_hobby");
    let icon = document.getElementById("icon-text-c");
   if (open.style.display == 'none')
    {
      open.style.display = 'block';
      icon.innerText = '🔎';
   }
    else{
      open.style.display = 'none';
      icon.innerText  = '📄';
   }
}

function open_elice() 
{
    let open = document.getElementById("elice__text_AI");
    let icon = document.getElementById("icon-text-d");
   if (open.style.display == 'none')
    {
      open.style.display = 'block';
      icon.innerText = '🔎';
   }
    else{
      open.style.display = 'none';
      icon.innerText  = '📄';
   }
}

function open_racer() 
{
    let open = document.getElementById("elice__text_racer");
    let icon = document.getElementById("icon-text-e");
   if (open.style.display == 'none')
    {
      open.style.display = 'block';
      icon.innerText = '🔎';
   }
    else{
      open.style.display = 'none';
      icon.innerText  = '📄';
   }
}

//dark, light
const target = document.querySelector("body");
const as = document.querySelector("ul");
const a = document.querySelector("a");
const title = document.querySelector("h1");
const input_btn = document.querySelector("input");
const nayeon = document.querySelector("img");
const text = document.querySelector("div");

function dark_light(self){
   // 만약 self.value 가 dark라면 
   if(self.value === 'dark') {
     target.style.backgroundColor='black';
     //target.style.color='white';
     a.style.color='white';
     as.style.color = 'white';
     title.style.color ='black';
     input_btn.style.color='orange';
     text.style.color= 'black';
     self.value = 'day';
   } 
   else 
   {
     target.style.backgroundColor='white';
     target.style.color='black';
     a.style.color='black';
     as.style.color='black';
     title.style.color = 'black';
     text.style.color= 'black';
     input_btn.style.color='black';
     self.value = 'dark';
   }
 }


// 해당영역으로 scroll , 배경색상 바뀜 
const element1 = document.getElementById('home');
const element2 = document.getElementById('whoami');
const element3 = document.getElementById('withelice');

const section1 = document.getElementById('introduce');
const section2 = document.getElementById('elice');
const firstTop = section1.offsetTop;
const secondTop = section2.offsetTop;

function whiteColor() {
   section1.style.background = 'white';
   section2.style.background = 'white'; 	
 }

function colorChange1() {
   section1.style.backgroundColor = '#C9B6E4';
   section2.style.background = 'white'; 
   window.scroll({top:firstTop, behavior: 'smooth'})
 }

function colorChange2() {
   section2.style.backgroundColor = '#C9B6E4';
   section1.style.background = 'white';
   window.scroll({top:secondTop, behavior: 'smooth'})
 }

// 버튼 
const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");


toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});


