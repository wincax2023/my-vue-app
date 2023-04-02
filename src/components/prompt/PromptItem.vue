<template>
    <div class="prompt-item-container">
        <div class="prompt-item">
            <span class="tile">⛵ {{prompt.type[0]}}</span>

            <div class="image-wrapper">
                <img class="thumbnail" :src="prompt.thumbnail" >
            </div>
            <div class="info">
                <span>{{prompt.title}}</span>
                <span class="prompt-price">{{prompt.price}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    components: {  },
    props: {
        prompt: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {

        };
    },
    computed: {
        ...mapState("app", ["userInfo"]),
    },
    watch: {
        
    },
    created() {},
    destroyed() {},
    mounted() {
        
    },
    methods: {
        ...mapActions('app', ['setMenuIndex']),

    },
};
</script>

<style lang="less" scoped>
.prompt-item-container {
    width: 240px;
    height: 160px;
    min-width: 240px;
    margin-right: 8px;

    .prompt-item {
        width: 240px;
        min-width: 240px;
        height: 160px;
        border: #ccc 1px solid;
        border-radius: 5px;
        background-color: #454566;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        position: absolute;
        

        .tile {
            width: fit-content;
            height: 30px;
            background-color: #222236cc;
            color: #fff;
            font-size: 12px;
            text-align: center;
            line-height: 30px;
            border-radius: 5px 5px 0 0;
            display: inline-block;
            text-align: left;
            padding: 0 8px;
            position: absolute;
        }

        .image-wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .thumbnail {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .info {
            width: 100%;
            height: 30px;
            background-color: #000;
            color: #fff;
            font-size: 12px;
            text-align: center;
            line-height: 30px;
            border-radius: 0 0 5px 5px;
            display: inline-block;
            text-align: left;
            padding-left: 8px;
            position: absolute;
            bottom: 0;

            .prompt-price {
                float: right;
                padding-right: 8px;
            }
        }
    }

}

</style>


