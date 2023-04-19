<template>
  <!--banner image-->

  <div class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
    <div  class="images">
      <div class="profile">
      <img src="../assets/WIDYA.jpg" class="rounded-circle"
           height="300px" width="250px">
    </div>
    <div class="content text-center">
      <h1>Widya Guswanti</h1>
      <h3>12150120069</h3>
      <h4>Mahasiswa Aktif Teknik Informatika</h4>
      <h5>Universitas Islam Negeri Sultan Syarif Kasim Riau</h5>
      <h2>Selamat Datang</h2>
    </div>
    <div class="background">
    </div>
    </div>
  </div>
 

</template>

<script>
export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
.text-center{
margin-top: -10px;
color: #181818;

}

.images {
margin-top: -90px;
}

.profile {
padding-top: 20px;
}

#app{
  background: linear-gradient(rgba(68, 116, 13, 0.877), rgba(142, 187, 57, 0.9), rgba(101, 131, 44, 0.96)),center/cover no-repeat;
}


</style>
