<template>
    <div
        class="animate inline-block h-3 w-8 bg-primary-500 transition ease-in-out"
    ></div>
</template>

<style scoped>
    .animate {
        animation: 1.2s ease-in-out infinite blink;
    }

    @keyframes blink {
        60% {
            opacity: 0%;
        }
    }
</style>
