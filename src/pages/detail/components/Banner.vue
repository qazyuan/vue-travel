<template>
    <div>
        <div class="banner-wrapper">
            <div class="img-wrapper" @click="handleGallaryShow">
                <img class="swiper-img" :src="bannerImg">
                <div class="text-wrapper">
                    <span><i class="iconfont  icon-tupian"></i>{{gallaryImgs.length || 0}}</span>
                    <p>{{sightName}}</p>
                </div>
            </div>
        </div>
        <fade-animation>
            <common-gallary @close="handleGallaryClose" v-show="showGallary" :imgList="gallaryImgs"></common-gallary>
        </fade-animation>
    </div>
</template>
<script type="text/javascript">
import CommonGallary from '../../common/gallary/Gallary'
import FadeAnimation from '../../common/FadeAnimation'

export default {
    name: 'DetailBanner',
    data () {
        return {
            showGallary: false
        }
    },
    props: {
        gallaryImgs: {
            type: Array
        },
        bannerImg: {
            type: String
        },
        sightName: {
            type: String
        }
    },
    methods: {
        handleGallaryShow () {
            this.showGallary = true;
        },
        handleGallaryClose () {
            this.showGallary = false;
        }
    },
    components: {
        CommonGallary,
        FadeAnimation
    }
}
</script>
<style type="text/css" scoped>
    @import '../../../assets/styles/iconfont.css';
    .banner-wrapper {
        position: relative;
        overflow: hidden;
    }
    .img-wrapper {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 54.9%;
        background: #eee;
        color: #fff;
        overflow: hidden;
    }
    .swiper-img {
        width: 100%;
    }
    .text-wrapper {
        position: absolute;
        left: 0.2rem;
        bottom: 0.2rem;
        font-size: 0.28rem;
        line-height: 0.4rem;
        span {
            padding-left: 0.4rem;
        }
        i {
            display: inline-block;
            padding-right: 0.1rem;
            width: 0.4rem;
            height: 0.4rem;
        }
        p {
            line-height: 0.48rem;
            font-size: 0.36rem;
        }
    }
</style>