//JavaScript code for convert and clear

function Convert(){
var txtbox,leftcode,rightcode;
   txtbox = document.getElementById('textarea');  
      leftcode=document.getElementById('opt4');
      rightcode=document.getElementById('opt5');
       if(txtbox.value===""){
     alert('Text box is empty.');
     }
     else if(leftcode.checked ===false || rightcode.checked ===false){
      alert('Checkbox is not selected.');
      }
      else {
          var newtxtbox = txtbox.value,
      newtxtbox=newtxtbox.replace(/\t/g,"");
      newtxtbox=newtxtbox.replace(/</g,"&lt;");
      newtxtbox=newtxtbox.replace(/>/g,"&gt;");
      txtbox.value=newtxtbox,
      txtbox.focus(),
      txtbox.select();

      //create copy button
     const button = document.createElement('span');
     button.className = "copy copyblock";
     const buttonTxt = document.createTextNode('Copy');
     button.appendChild(buttonTxt);
     document.querySelector('.text-box').appendChild(button);
     
     //declare button
     const copyMe = document.querySelector('.copy');
     copyMe.onclick = function(){
         const txtarea = document.querySelector('#textarea');
         txtarea.value;
         txtarea.focus();
         txtarea.select();
         document.execCommand('copy');
         alert('Text has been copied');
      }  
       document.querySelector(".clearconvert").style.display= 'block';
         document.querySelector(".button-box").classList.add('add');
         
       }
       
     }
         
    
window.onload = function(){
var btn = document.getElementById("clearconvert");
btn.addEventListener("click", function (event){
var a = document.getElementById('textarea');
a.value="",a.focus(),document.getElementById('convert').disabled=!1;
document.querySelector('.copy').remove();
event.target.style.display = 'none';
document.querySelector(".button-box").classList.remove('add')
})
		}
