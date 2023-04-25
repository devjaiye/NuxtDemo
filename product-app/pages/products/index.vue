<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for='p in products'>
                <ProductCard :product="p" />
            </div>
        </div>
        
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    const {data: products} = await useFetch(
        'https://fakestoreapi.com/products'
        )
   
   //..Meta data 
   useHead({
    title: 'App Buy | Products',
    meta: [
        {name: 'description', content: 'Product items'}
    ]
   })
</script>

<style scoped>

</style>