<script setup>
    import ComputerIcon from "./Icons/ComputerIcon.vue";
    const props = defineProps({ item: Object });
</script>

<template>
    <div
        class="mx-auto min-h-[50%] w-full max-w-md rounded-3xl bg-white p-8 shadow-lg"
    >
        <div class="flex items-center justify-center">
            <button
                class="mx-auto inline-block rounded-full border bg-white p-3"
            >
                <ComputerIcon class="h-10 w-10 text-gray-400" />
            </button>
        </div>
        <h3
            class="mb-6 text-center font-display text-2xl font-bold text-primary-600"
        >
            {{ item.title }}
        </h3>
        <p class="font-medium text-gray-600">
            {{ item.desc }}
        </p>
    </div>
</template>
