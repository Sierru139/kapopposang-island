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
    <div class="max-w-[660px] mx-auto">
        <h1 class="lg:text-3xl max-lg:mx-8 text-2xl text-center font-bold">Kesan Mendalam Pengunjung</h1>
        <p class="text-center mt-2">
            Setiap pengalaman di Kapopposang adalah kisah keindahan dan ketenangan yang akan selalu dikenang
        </p>
    </div>
    <div class="max-w-[1280px] px-4 lg:flex mx-auto mt-12">
        <div class="flex-[0_0_60%] ">
            <img src="@/assets/images/sect-rate/testimonial.png" alt="" class="w-full h-full">
        </div>
        <div class="flex-[0_0_40%]">
            <div class="lg:pl-3 max-lg:mt-4">
                <div class="bg-[#739072] p-4 rounded-3xl text-white mb-2">
                    <p class="mb-8">
                        <font-awesome-icon :icon="['fas', 'star']" class="mr-2 text-sm" />
                        <font-awesome-icon :icon="['fas', 'star']" class="mr-2 text-sm" />
                        <font-awesome-icon :icon="['fas', 'star']" class="mr-2 text-sm" />
                        <font-awesome-icon :icon="['fas', 'star']" class="mr-2 text-sm" />
                        <font-awesome-icon :icon="['fas', 'star']" class="mr-2 text-sm" />
                    </p>
                    <p class="mb-8">i had the mast amazing time at Kapoposang. The tranquility, the untouched beouty of the island. and the incredible marine life made it a perfect getaway. I can't wait to come back."</p>
                    <p class="">- James Anderson, Australia</p>
                </div>
                <div class="bg-[#f5f5f5] p-4 rounded-3xl mb-2">
                    <p class="mb-8">
                        <font-awesome-icon :icon="['fas', 'star']" class="mr-2 text-sm" />
                        <font-awesome-icon :icon="['fas', 'star']" class="mr-2 text-sm" />
                        <font-awesome-icon :icon="['fas', 'star']" class="mr-2 text-sm" />
                        <font-awesome-icon :icon="['fas', 'star']" class="mr-2 text-sm" />
                        <font-awesome-icon :icon="['fas', 'star']" class="mr-2 text-sm" />
                    </p>
                    <p class="mb-8">i had the mast amazing time at Kapoposang. The tranquility, the untouched beouty of the island. and the incredible marine life made it a perfect getaway. I can't wait to come back."</p>
                    <p class="">- James Anderson, Australia</p>
                </div>
                <div class="bg-[#f5f5f5] p-4 rounded-3xl mb-2">
                    <p class="mb-8">
                        <font-awesome-icon :icon="['fas', 'star']" class="mr-2 text-sm" />
                        <font-awesome-icon :icon="['fas', 'star']" class="mr-2 text-sm" />
                        <font-awesome-icon :icon="['fas', 'star']" class="mr-2 text-sm" />
                        <font-awesome-icon :icon="['fas', 'star']" class="mr-2 text-sm" />
                        <font-awesome-icon :icon="['fas', 'star']" class="mr-2 text-sm" />
                    </p>
                    <p class="mb-8">i had the mast amazing time at Kapoposang. The tranquility, the untouched beouty of the island. and the incredible marine life made it a perfect getaway. I can't wait to come back."</p>
                    <p class="">- James Anderson, Australia</p>
                </div>
            </div>
        </div>
    </div>
</template>