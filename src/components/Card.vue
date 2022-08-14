<script setup>
    import ComputerIcon from "./Icons/ComputerIcon.vue";
    const props = defineProps({ item: Object });
</script>

<template>
    <div
        class="duration-50 group mx-auto min-h-[50%] w-full max-w-md rounded-3xl bg-white p-8 shadow transition ease-in-out hover:shadow-2xl"
    >
        <h3
            class="mb-6 text-center font-display text-2xl font-bold text-gray-600"
        >
            {{ item.title }}
        </h3>
        <p class="font-[550] text-gray-600">
            {{ item.desc }}
        </p>
    </div>
</template>
