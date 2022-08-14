<script setup>
    import ComputerIcon from "./Icons/ComputerIcon.vue";
    const props = defineProps({ item: Object });
</script>

<template>
    <div
        class="duration-50 group mx-auto min-h-[50%] w-full max-w-md rounded-3xl bg-white bg-slate-800 p-8 shadow-lg ring-primary-500 ring-offset-4 transition ease-in-out"
    >
        <h3
            class="mb-6 text-center font-display text-2xl font-bold text-primary-500"
        >
            {{ item.title }}
        </h3>
        <p class="font-[550] text-gray-600 text-white">
            {{ item.desc }}
        </p>
    </div>
</template>
