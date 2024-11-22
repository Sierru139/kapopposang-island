<script setup>
</script>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            wheather: null,
        }
    },
    methods: {

    },
    mounted () {
        axios
        .get('http://api.weatherapi.com/v1/current.json?key=2411d6734b5d4bd5802132739242111&q=Makassar&aqi=no')
        .then(response => (this.wheather = response))
        .catch(error => console.error(error));
    }
}
</script>

<template>
    <div class="sm:m-6 m-3 h-[90vh] rounded-[3rem] overflow-hidden relative">
        <div class="w-full h-full brightness-75 absolute left-0 right-0 -z-10">
            <img src="@/assets/images/Background-home.jpg" alt="" class="w-full h-full object-cover">
        </div>
        <div>
            <img src="@/assets/images/logo/kapoposang-logo.jpg" alt="" class="absolute m-4">
        </div>
        <div class="max-w-[800px] mx-auto h-full">
            <div class="flex items-center justify-center flex-col h-full text-white text-center p-6">
                <span class="max-sm:text-xs backdrop-blur-lg border-t border-b border-[#ffffff9a] rounded-full px-2 py-1">Kapopposang Island</span>
                <h1 class="sm:text-[4.25rem] text-4xl leading-none mt-6">Hidden <span class="text-[#F6FB7A]">Tropical</span> <br> Paradise</h1>
                <p class="sm:text-lg text-xs mt-6">Rencanakan liburan impian Anda dan rasakan pesona alam yang masih asli di Pulau Kapopposang</p>
                <div class="sm:text-[4.25rem] text-5xl">
                    <h1 v-if="wheather" class="leading-none mt-6 font-extralight">
                        <span class="mr-6">{{ wheather.data.current.temp_c }}°</span> 
                        <span class="font-thin">|</span> 
                        <span class="ml-6">{{ wheather.data.location.localtime.substring(11) }}</span>
                    </h1>
                    <h1 v-else class="text-5xl leading-none mt-6 font-light">
                        <span class="mr-6 tracking-[.5em] loading-text">...</span> 
                        <span class="font-thin animate-pulse">|</span> 
                        <span class="ml-6 tracking-[.5em] loading-text">...</span>
                    </h1>
                </div>
            </div>
        </div>
    </div>
</template>

<style>


.loading-text {
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-size: 600%;
    animation: loadGradientAnim 2s infinite linear;
}

@keyframes loadGradientAnim {
    from {
        background-position: 0%;
    }
    to {
        background-position: 100%;
    }
}

</style>