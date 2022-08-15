<script setup>
    import ComputerIcon from "./Icons/ComputerIcon.vue";
    const props = defineProps({ item: Object });
</script>

<template>
    <div
        class="duration-50 group mx-auto min-h-[50%] w-full max-w-md rounded-3xl bg-white p-8 shadow transition ease-in-out hover:shadow-2xl"
    >
        <h3
            class="mb-6 text-center font-display text-2xl font-black text-secondary-700"
        >
            {{ item.title }}
        </h3>
        <p class="font-medium text-gray-600">
            {{ item.desc }}
        </p>
    </div>
</template>
