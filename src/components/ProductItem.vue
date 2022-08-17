<script setup>
    import CodeIcon from "./Icons/CodeIcon.vue";
    const props = defineProps({ item: Object });
</script>

<template>
    <div
        class="duration-50 mx-auto min-h-[50%] w-full max-w-md rounded-3xl bg-white shadow transition ease-in-out hover:shadow-2xl"
    >
        <div class="flex items-center justify-center text-primary-500">
            <!-- <CodeIcon class="h-12 w-12 stroke-[3px]" /> -->
            <img
                :src="`/media/${item.img}`"
                :alt="`Image de ${item.title}`"
                class="h-64 w-full rounded-t-3xl object-cover"
            />
        </div>
        <div class="p-4">
            <h3
                class="my-3 text-center font-display text-2xl font-black text-primary-600"
            >
                {{ item.title }}
            </h3>
            <p class="font-medium text-gray-600">
                {{ item.desc }}
            </p>
        </div>
        <div class="m-2 flex items-center justify-between border-t p-2">
            <p>
                <span class="font-mono font-bold">
                    {{ item.price.toLocaleString() }} fcfa
                </span>
            </p>

            <a
                target="_blank"
                :href="item.link"
                class="inline-flex h-12 flex-shrink-0 items-center rounded-full bg-primary-700 px-8 font-medium text-white ring-primary-500 ring-offset-2 transition duration-300 ease-in-out hover:ring"
            >
                Acheter</a
            >
        </div>
    </div>
</template>
