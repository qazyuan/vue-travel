<template>
    <div class="wrapper" @click="closeGallary">
        <swiper  :options="swiperOption" class="img-wrapper">
            <swiper-slide v-for="(slide, index) in imgList" :key="index">
                <img class="swiper-img" :src="slide">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'CommonGallary',
    props: {
        imgList: {
            type: Array
        }
    },
    data () {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    paginationType : 'fraction'
                },
                observer: true,
                observeParents: true
            }
        }
    },
    computed: {
        showSwiper: function () {
            return this.swiperList.length;
        }
    },
    methods: {
        closeGallary () {
            this.$emit('close');
        }
    }
}
</script>
<style type="text/css" scoped>
    .wrapper {
        position: absolute;
        z-index: 33;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #000;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .img-wrapper {
        width: 100%;
        height: 0;
        padding-bottom: 54.9%;
        overflow: hidden;
    }
</style>