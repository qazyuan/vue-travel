
<template>
    <div class="detail-wrapper">
        <detail-header :sightName="sightName"></detail-header>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs = "gallaryImgs"></detail-banner>
        <div class="content">
            <h3 class="title"><span>门票</span></h3>
            <detail-list class="ticket-list" :list="list"></detail-list>
            <h3 class="title"><span>评论</span></h3>
            <detail-ratings :ratingList="ratings"></detail-ratings>
            <!-- <detail-list class="ticket-list" :list="list"></detail-list> -->
        </div>
    </div>

</template>
<script type="text/javascript">
import DetailBanner from './components/Banner';
import DetailHeader from './components/Header';
import DetailList from './components/List';
import DetailRatings from './components/Ratings';
import axios from 'axios';

export default {
    name: 'Detail',
    components: {
    	DetailBanner,
    	DetailHeader,
        DetailList,
        DetailRatings
    },
    data () {
        return {
            list: [],
            sightName: '',
            gallaryImgs: [],
            bannerImg: '',
            ratings: []

        }
    },
    methods: {
        getTicketList () {
            axios.get('/api/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then(
                res => {
                    if (res.data.data) {
                        var data = res.data.data;
                        this.list = data.categoryList;
                        this.sightName = data.sightName;
                        this.bannerImg = data.bannerImg;
                        this.gallaryImgs = data.gallaryImgs;
                        this.ratings = data.ratings;
                    }
                }
            )
        }
    },
    mounted () {
        this.getTicketList ();
    }
}
</script>

<style type="text/css" scoped>
    .detail-wrapper {
        overflow: hidden;
    }
    .title {
        position: relative;
        margin: 0.1rem 0.3rem;
        line-height: 0.88rem;
        border-bottom: 1px solid #eee;
        font-weight: 800;
        span {
            padding-left: 0.2rem;
            border-left: 2px solid #00bcd4;
        }
    }
    .ticket-list {
        margin: 0 0.4rem;
    }
</style>