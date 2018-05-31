<template>
    <div >
        <router-link class="pic-back" to="/" v-show="showHeader">
            <span class="iconfont icon-jiantou1"></span>
        </router-link>
        <div class="header-wrapper" :style="showStyle" v-show="!showHeader">
            <router-link class="header-back" to="/">
                <span class="iconfont icon-jiantou1"></span>
            </router-link>
            <div class="header-center">
                {{sightName}}
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'CommonGallary',
    data () {
        return {
            showHeader: true,
            showStyle: {
                opacity: 0
            }
        }
    },
    props: {
        sightName: {
            type: String
        }
    },
    methods: {
        handleScroll () {
            var top = document.documentElement.scrollTop;
            if (top > 60) {
                let opacity = top / 140;
                opacity = opacity > 1 ? 1 : opacity;
                this.showStyle = { opacity };
                this.showHeader = false;
            } else {
                this.showHeader = true;
            }
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll); //事件绑定在了全局的组件上
    },
    deactivated () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>
<style type="text/css" scoped>
@import '../../../assets/styles/iconfont.css';
.pic-back {
    position: fixed;
    display: block;
    width: 0.7rem;
    height: 0.7rem;
    left: 0.2rem;
    top: 0.1rem;
    z-index: 2;
    border-radius: 0.7rem;
    color: #fff;
    background: #000;
    opacity: 0.5;
    .iconfont {
        display: inline-block;
        width: 100%;
        text-align: center;
        margin-left: -0.05rem;
        line-height: 0.7rem;
        font-size: 0.4rem;
    }

}
.header-wrapper {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 0.8rem;
    line-height: 0.8rem;
    background: #00bcd4;
    color: #fff;
    z-index: 2;
    .header-back {
        position: absolute;
        height: 0.8rem;
        left: 0.3rem;
        top: 0;
        bottom: 0;
        color: #fff;
        span {
            line-height: 0.8rem;
        }
    }

    .header-center {
        text-align: center;
    }
}
</style>