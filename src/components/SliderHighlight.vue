<script setup>
</script>


<template>
    <div class="h-screen max-w-[1280px] mx-auto">
        <div class="max-w-[800px] mx-auto">
            <h1 class="md:text-4xl max-md:mx-8 text-2xl text-center gradientHighlight">Tempat wisata yang memiliki <b>Keindahan Bawah Laut</b> yang mengagumkan, selain itu pulau ini juga <b>Memiliki Pasir Putih yang Bersih</b></h1>
            <p class="text-center mt-6">
                <RouterLink to="/about" class="text-white bg-[#739072] hover:opacity-75 duration-150 rounded-md px-3 py-2">
                    Lebih Detail
                </RouterLink>
            </p>
        </div>
        <div class="mt-16 max-md:m-6">
            <h2 class="font-bold md:text-3xl text-xl mb-6">Pesona Pulau Kapopposang</h2>
            <div class="">
                <div class="flex max-md:flex-col md:h-[500px] h-[60vh] w-full text-white md:gap-x-6 max-md:gap-y-5">
                    <div v-for="(slider, index) in sliders" :key="index" 
                        class="parent group hover:brightness-100 rounded-xl overflow-hidden relative flex items-end md:p-8 p-4 md:duration-1000 duration-[2s] linear h-full min-h-[70px]"
                        :class="{
                                'flex-shrink-0': index == hovered,
                                'brightness-50': index != hovered,
                            }"
                                @mouseover="indexAnu(index)"
                                @mouseleave="resetHover()"
                                >
                        <div class="absolute inset-0 -z-10 flex items-center justify-center">
                            <img :src="slider.img" alt="" class="object-cover h-full min-w-[900px]">
                        </div>
                        <div class="md:min-w-[700px] children group-hover:opacity-100 transition-opacity duration-[1s]"
                            :class="{'opacity-0' : index != hovered}">
                            <h4 class="md:text-4xl text-xl font-semibold mb-4">{{ slider.title }}</h4>
                            <p class="md:w-[700px] max-md:text-sm">{{ slider.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.gradientHighlight {
        background: rgb(255,255,255);
        background: linear-gradient(140deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 30%, rgb(0, 0, 0.6) 70%, rgba(0, 0, 0, 0.3) 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
}

</style>


<script>
import sliderData from '../data/sliderData';
import { RouterLink} from 'vue-router'

export default {
    data() {
        return {
            wheather: null,
            sliders: sliderData,
            hovered: 0,
        }
    },
    methods: {
        indexAnu (i) {
            this.hovered = i;
        },
        resetHover () {
            this.hovered = 0;
        }
    }
}
</script>