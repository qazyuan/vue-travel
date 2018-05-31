<template>
    <div >
        <div class="list-wrapper" v-for="item in list">
            <h3><span class="iconfont"></span>{{item.title}}</h3>
            <detail-list class="children-item" v-if="item.children" :list="item.children"></detail-list>
        </div>
    </div>
</template>
<script type="text/javascript">
import axios from 'axios'

export default {
    name: 'DetailList',
    props: {
        list: {
            type: Array
        }
    }
}
</script>
<style type="text/css" scoped>
/*@import '../../../assets/styles/iconfont.css';*/
.list-wrapper {
    position: relative;
    background: #fff;
    margin: 0 0.2rem;
    background: #fff;
    color: #333;
    font-size: .24rem;
    line-height: .8rem;
    text-indent: .4rem;
}
.children-item {
    margin: 0 0.2rem;
    background: #fff;
    color: #333;
    font-size: .24rem;
    line-height: .8rem;
}
.iconfont {
    display: inline-block;
    position: absolute;
    width: 0.32rem;
    height: 0.32rem;
    top: 0.30rem;
    left: 0.05rem;
    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png)  no-repeat;
    background-size: 0.32rem;
}
</style>