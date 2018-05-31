<template>
    <div>
        <div class="rating-wrapper" v-for="item in ratingList">
            <div class="rating-top">
                <Star class="rating-star" :score="item.rate"></Star>
                <div class="rating-info">
                    <span>{{item.username}}</span>
                    <span>{{item.rateTime}}</span>
                </div>
            </div>
            <div class="rating-text">{{item.text}}</div>
            <div class="rating-img">
                <div class="img-wrapper" v-for="img in item.imgLists">
                    <span :style="{backgroundImage: 'url(' + img.url + ')'}"></span>
                </div>
            </div>
        </div>

    </div>
</template>
<script type="text/javascript">
import Star from '../../common/Star'
export default {
    name: 'detailRatings',
    components: {
        Star
    },
    props: {
        ratingList: {
            type: Array
        }
    }
}
</script>
<style type="text/css" scoped>
.rating-wrapper {
    margin: 0.1rem 0.4rem;
    border-bottom: 1px solid #e0e0e0;
}
.rating-top {
    line-height: 0.8rem;
    position: relative;
    overflow: hidden;
}
.rating-star {
    float: left;
}
.rating-info {
    float: right;
}
.rating-img {
    overflow: hidden;
    margin-bottom: 0.2rem;
}
.rating-text {
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    line-height: .42rem;
    font-size: .26rem;
    color: #616161;
}

.img-wrapper {
    float: left;
    width: 32%;
    margin: 4% 2% 0 0;
    span {
        overflow: hidden;
        float: left;
        display: inline-block;
        width: 100%;
        height: 0;
        padding-bottom: 73%;
        /*background-image: url('https://imgs.qunarzz.com/p/tts6/1712/23/65e232d238e0f602.jpg_228x168_395bf690.jpg')*/
    }

}

.img-wrapper:nth-child(3n+0){
    margin-right: 0;
}
</style>