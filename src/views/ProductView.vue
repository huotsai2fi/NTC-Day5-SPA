<template>
    <div class="product">
        <ProductBox v-bind="product"> 
            <!-- v-bind="product"就是展開 :name="product.name" :price="product.price" .... -->
            <input type="number" v-model="number">
            <button @click="addCart(product)">加入購物車</button>
        </ProductBox>
    </div>
    <hr>
    <h3>商品描述</h3>
    <p>{{ product.desc }}</p>
</template>

<script>
import axios from 'axios';
import ProductBox from '@/components/ProductBox.vue';

export default {
    components:{
        ProductBox,
    },
    data() {
        return{
            product: '',
            number: 0,
            serverPath: this.$store.state.serverPath,
        }
    },    
    mounted() {
        axios.get(`${this.serverPath}/products/${this.$route.params.productId}`)
             .then((response) => this.product = response.data);
    },
    methods: {
        addCart(product) {
            if (product.quantity - this.number < 0) alert('存貨不足')
            else {
            this.$store.commit('addCart', {
                product: product,
                number: this.number,
            });
            alert('已加入購物車');
            }
        },
    },
};
</script>
