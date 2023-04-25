<template>
    <div>
        <h2>About</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
             nisi ut aliquip ex ea commodo consequat. 
        </p>
        <P>
            Duis aute irure dolor fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </P>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const {data} = await useFetch('/api/app?name=lorem', {
        method: 'post',
        body: {age: 40}
    })
</script>

<style scoped>
    h2{
        margin-bottom: 20px ;
        font-size: 20px;
    }

    p{
        margin:  20px 0;
    }

</style>