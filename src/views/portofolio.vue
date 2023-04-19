<template>
    <div class="main-container">
     <div class="container-one">
       <div class="profile">
         <img src="../assets/WIDYA.jpg" alt="">
         <h3>Widya Guswanti</h3>
         <p>Mahasiswa Teknik Informatika</p>
       </div>
       <div class="sosial-links">
         
           <div class="link">
             <a href="https://github.com/WidyaGuswanti"><img src="../assets/github.png" alt="" style="width:30px;height:30px;" >
               <h2>GitHub</h2></a>
           </div>
           <div class="link">
             <a href="http://wa.me/6285271568279"><img src="../assets/wa.png" alt="" style="width:30px;height:30px;">
               <h2>WhatsApp</h2></a>
           </div>
            <div class="link">
             <a href="https://www.facebook.com/widiya.guswantii?mibextid=ZbWKwL"><img src="../assets/fb.png" alt="" style="width:30px;height:30px;">
               <h2>facebook</h2></a>
           </div>
           <div class="link">
             <a href="https://www.instagram.com/widyagswnt/"><img src="../assets/ig.png" alt="" style="width:30px;height:30px;">
               <h2>Instagram</h2></a>
           </div>
         
       </div>
     </div>
     <div class="container-two">
        <div class="about-me">
         <h1>Data Pribadi</h1>
           <p> Nama             : Widya Guswanti</p>
           <p> Tempat/Tgl Lahir : Bagan Batu, 19 Agustus 2002</p>
           <p> Alamat           : Bagan Batu, Rokan Hilir</p>
           <p> No HP            : 085271568279</p>
           <p> Agama            : Islam</p>
           <p> Status           : Mahasiswa</p>
           <p> Email            : gswntiwidya@gmail.com</p>
          <h1>Pendidikan</h1>
          <p> SDN 006 Pelita            (2009-2015)</p>
          <p> SMPN 2 Bagan Sinembah     (2015-2018)</p>
          <p> SMAN 2 Bagan Sinembah     (2018-2021)</p>
          <P> UIN Suska Riau            (2021)</P>
          </div> 
        <div class="button-container">
           <div class="project-button">
             <a href="">My Project</a>
            </div>
            <div>
            <div class="project-button">
             <a href="">My Resume</a>
            </div>
            </div>
          </div>
      </div>
    </div>
   </template>
     
   <script>
   
   </script>
     
   <style scoped>
     img{
       height: 35px;
     }
     .main-container{
       display: flex;
       flex-direction: row;
       background-color: rgb(170, 192, 187);
       border-radius: 25px;
       
     }
     .container-one{
       background: linear-gradient(rgba(68, 116, 13, 0.877), rgba(142, 187, 57, 0.9), rgba(101, 131, 44, 0.96)),center/cover no-repeat;
       padding: 2.5%;
       margin: 2%;
       color: antiquewhite;
       width: 30%;
       border-radius: 25px;
     }
   
     .profile img{
       background-color: rgb(195, 214, 208) ;
       height: 13rem;
       border-radius: 30%;
     }
     .link a{  
       text-decoration: none;
       color: rgb(67, 67, 67);
       font-size: 10px;
     }
     .link img{
       height: 13rem;
     }
     .container-two{
       background: linear-gradient(rgba(68, 116, 13, 0.877), rgba(142, 187, 57, 0.9), rgba(101, 131, 44, 0.96)),center/cover no-repeat;
       margin: 2.5%;
       margin-left: 2%;
       border-radius: 2%;
       color: antiquewhite;
       width: 70%;
     }
     .about-me{
       text-align: left;
     }
     .logo img{
       height: 4rem;
     }
   
     .button-container{
       margin-top: 5px;
       display: flex;
       flex-direction: row;
       justify-content: center;
       align-items: center;
   
       
     }
   
     .project-button{
       background-color: rgb(0, 0, 0) ;
       border-radius: 25%;
       padding: 5px;
       margin: 6px;
     }
     .project-button a{
       text-decoration: none;
       color: rgb(255, 255, 255);
     }
   
   </style>
     