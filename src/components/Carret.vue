<template>
    <span class="blink ml-2 -mb-1 inline-flex h-3 w-6 bg-primary-500"></span>
</template>

<style scoped>
    .blink {
        animation: fade 1s ease-in-out infinite;
    }
    @keyframes fade {
        0% {
            opacity: 0%;
        }

        50% {
            opacity: 0%;
        }

        100% {
            opacity: 100%;
        }
    }
</style>
