<script setup>
</script>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            info: null,
        }
    },
    methods: {

    },
    mounted () {
        axios
        .get('http://api.weatherapi.com/v1/current.json?key=2411d6734b5d4bd5802132739242111&q=Makassar&aqi=no')
        .then(response => (this.info = response))
        .catch(error => console.error(error));
    }
}
</script>

<template>
    <div class="m-6 h-[600px] rounded-[3rem] overflow-hidden relative">
        <div class="w-full h-full brightness-75 absolute -z-10">
            <img src="@/assets/dugi-otok.jpg" alt="">
        </div>
        <div class="max-w-[800px] mx-auto h-full">
            <div class="flex items-center justify-center flex-col h-full text-white text-center">
                <span class="backdrop-blur-lg border-t border-b border-[#ffffff9a] rounded-full px-2 py-1">Kapopposang Island</span>
                <h1 class="text-[4.25rem] leading-none mt-6">Hidden <span class="text-[#F6FB7A]">Tropical</span> <br> Paradise</h1>
                <p class="text-lg mt-6">Rencanakan liburan impian Anda dan rasakan pesona alam yang masih asli di Pulau Kapopposang</p>
                <h1 v-if="info" class="text-[4.25rem] leading-none mt-6 font-extralight">
                    <span class="mr-6">{{ info.data.current.temp_c }}</span> 
                    <span class="font-thin">|</span> 
                    <span class="ml-6">{{ info.data.location.localtime.substring(11) }}</span>
                </h1>
                <h1 v-else class="text-[4.25rem] leading-none mt-6 font-extralight">
                Loading...
                </h1>
            </div>
        </div>
    </div>
</template>