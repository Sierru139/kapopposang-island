<script>
import { RouterLink} from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Packets from '../data/PacketData'

export default {
    data() {
        return {
            packets: Packets,
        }
    },
    methods: {
    }
}
</script>

<template>
    <div class="max-w-[1280px] mx-auto mb-10">
        <h2 class="font-bold md:text-3xl text-xl mb-6">Tempat-Tempat Wisata</h2>
        
        <div class="py-4">
            <div class="flex lg:flex-wrap">
                <div v-for="(packet, index) in packets" :key="index" class="h-[450px] lg:flex-[0_0_25%] px-2 py-2">
                    <div class="relative h-full flex flex-col justify-between p-4 rounded-3xl overflow-hidden">
                        <div class="absolute w-full h-full inset-0 -z-10">
                            <img src="@/assets/images/gallery/img_3895 (1).jpg" alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="flex justify-between items-center">
                            <h3 class="text-white text-xl">{{ packet.price }}</h3>
                            <h3 class="rounded-full bg-white px-4 py-2"><font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" /> {{ packet.rating[0] }} <span class="opacity-65">{{ packet.rating[1] }}</span></h3>
                        </div>
                        <div class="text-white">
                            <h3 class="font-semibold text-2xl">{{ packet.title }}</h3>
                            <RouterLink to="/" class="border px-4 py-2 backdrop-blur-md rounded-full flex w-full mt-1 relative justify-between items-center">
                                Selengkapnya
                                <font-awesome-icon :icon="['fas', 'arrow-up']" class="rotate-45"/>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>