<template>
    <div class="footer w-100">
        <div class="container  ">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3">
              <div class="col-md-4 d-flex align-items-center">
                <a @click="$router.push('/')" class=" logo d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <img style="width: 120px; margin-right: 12px;" src="https://static.vecteezy.com/system/resources/thumbnails/001/203/837/small/eagle-logo.png" alt="logo">
                </a>
                <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Iskandar</span>
              </div>
          
              <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a class="text-body-secondary" href="#"><i class="fab fa-instagram"></i></a></li>
                <li class="ms-3"><a class="text-body-secondary" href="#"><i class="fab fa-telegram"></i></a></li>
                <li class="ms-3"><a class="text-body-secondary" href="#"><i class="fab fa-facebook"></i></a></li>
              </ul>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>