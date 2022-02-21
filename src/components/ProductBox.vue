<template>
    <div class="product-box" :class="{ border: hasBorder}" @click="redirectProduct(id)">
        <div class="image-box">
            <img :src="parseImgPath(img_path)">
        </div>
        <h4>{{ brand }} <small>{{ category }}</small></h4>
        <h3>{{ name }}</h3>
        <p>售價: {{ price }}</p>
        <slot>請塞我</slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            serverPath: this.$store.state.serverPath,
        }
    },
    props:{
        id: Number,
        img_path: String,
        brand: String,
        category: String,
        name: String,
        price: Number,
        hasBorder: {
            type: Boolean,
            default: false,
        },
    },
    methods:{
        parseImgPath(path) {
            return this.serverPath + path;
        },
        redirectProduct(id) {
            this.$router.push(`/products/${id}`);
        }
    },
};
</script>


<style scoped>
    .border {
        border: 1px solid #888888;
    }
    div.product-box{
        min-width: 350px;
        width: 24%;
        text-align: center;
        margin: 1px;
        cursor: pointer;
        display: block;
    }
    div.image-box{
        width: 100%;
        height: 250px;
        display: flex;
    }
    img{
        display: block;
        width: 50%;
        margin: auto;
    }
</style>