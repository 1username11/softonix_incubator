<template>
    <div class="pl-[135px] pt-[33px] pr-[135px] ">
        <div class="flex justify-between">
            <div class="flex justify-between space-x-[72px]">
                <div class="flex items-center">
                    <img class="w-10 h-9" src="./static/Union.png" alt="">
                    <p class="pl-[6px] font-sen text-[20px]">Salty</p>
                </div>
                <nav>
                    <ul class="flex items-center h-full space-x-9 font-poppins text-[16px]">
                        <li><a class="active:border-b-2 border-[#f66f4d]" href="#">Home</a> </li>
                        <li><a class="active:border-b-2 border-[#f66f4d]" href="#">About Us</a> </li>
                        <li><a class="active:border-b-2 border-[#f66f4d]" href="#">Destination</a> </li>
                        <li><a class="active:border-b-2 border-[#f66f4d]" href="#">Tours</a> </li>
                        <li><a class="active:border-b-2 border-[#f66f4d]" href="#">Blog</a> </li>
                    </ul>
                </nav>
            </div>

            <div class="">
                <button class=" flex items-center justify-center w-[170px] h-[54px] border border-solid border-[#f66f4d] rounded-[27px] text-[#f66f4d] font-poppins font-medium">
                    Book Now
                    <svg class="ml-2.5" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 8.45744L4.04598 10.2128L13.4253 2.87235L6.06897 11.1702V15L8.82758 11.9681L13.4253 13.5638L16 0L0 8.45744Z" fill="#F66F4D"/>
                    </svg>
                </button>
            </div>
        </div>
        <div>
            <div class="flex">
                <div>
                    <h1 class="">Discover the Best Lovely Places</h1>
                    <h2>Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us</h2>
                </div>
                <div>
                    <img src="./static/young-man-holding-passport-with-plane-tickets-smartphone_ccexpress%201.png"/>
                </div>
            </div>
        </div>
        <div>Categories</div>
        <div>Features 02</div>
        <div>Features 03</div>
        <div>Features 04</div>
        <div>Testimonial</div>
        <div>Newsletter</div>
        <div>Footer</div>
    </div>
</template>

<script setup lang="ts">
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@400;500&family=Sen:wght@700&display=swap');
.font-poppins{
    font-family: 'poppins', Poppins;
}
.font-sen{
    font-family: 'sen', Sen;
}
.active-underline{
    border-bottom-color: #f66f4d;
    border-bottom-width: 12px;
    border-bottom: 2px solid ;
}
</style>