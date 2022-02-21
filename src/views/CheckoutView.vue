<template>
    <div class="row">
        <template v-for="product in products" :key="product">
            <ProductBox v-bind="product" :hasBorder="true">
                <h3>選購數量: {{ product.number }}</h3>
            </ProductBox>
        </template>
    </div>
</template>

<script>
import ProductBox from '@/components/ProductBox.vue'

export default {
    components: {
        ProductBox
    },
    data() {
        return {
            products: this.$store.state.cart,
        }
    },
}
</script>