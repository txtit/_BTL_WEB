var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 1,
    loop: false,
    // loopFillGroupWithBlank: true,
    grabCursor: 'true',
    fade: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  function ftsubmit(){
    var arr=document.getElementsByTagName('input');
   
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var name = arr[0].value;
    var email = arr[1].value;
    var subject = arr[2].value;
    var message = document.getElementById('Message').value;
    // var check =check
    if( email == "" || name == "" || subject == ""  ){
        alert("Please fill all fields");
        alert("email");
    }
   
    if(message.length <=20 ){
        alert("please fill message more 20 chars");
    }
    
        // checkEmail(email);
        // alert('ok');
    if(filter.test(email)==true){
        alert("ok");
    }else {
        alert("wrong email");
    }
   
    
}
