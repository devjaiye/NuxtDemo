<template>
    <div>
        <h3>Product details for {{ id }}</h3>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ad excepturi nihil 
            nemo sapiente dolor exercitationem deserunt molestiae! Consectetur, ullam.
        </p>
    </div>
</template>

<script setup>
    const {id} = useRoute().params

    definePageMeta({
        layout: 'products'
    })
</script>

<style lang="scss" scoped>

</style>