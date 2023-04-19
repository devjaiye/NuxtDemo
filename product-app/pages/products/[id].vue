<template>
    <div>
        <p>{{ product.id }}</p>
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
       
    </div>
</template>

<script setup>
    const {id} = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id

    //..fetch product from api 
    const {data: product} = await useFetch(uri, {key: id})

    definePageMeta({
        layout: 'products'
    })
</script>

<style lang="scss" scoped>

</style>