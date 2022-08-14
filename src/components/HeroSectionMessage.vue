<script setup>
    import Carret from "./Carret.vue";
    import { ref, onMounted, onUnmounted } from "vue";

    const input = ref(
        "Votre partenaire en matière de conception de solutions informatiques.".split(
            ""
        )
    );

    const phrase = ref("");
    const id = ref(0);

    onMounted(() => {
        id.value = setTimeout(() => {
            const charactersLen = input.value.length;
            for (let i = 0; i < charactersLen; ++i) {
                setTimeout(() => {
                    phrase.value = phrase.value + input.value[i];
                }, i * 30);
            }
        }, 300);
    });

    onUnmounted(() => clearTimeout(id.value));
</script>

<template>
    <div class="lg:-mt-8">
        <h1
            class="min-h-[180px] p-4 font-display text-4xl font-black tracking-tight sm:text-5xl"
        >
            {{ phrase }} <Carret />
        </h1>

        <div class="mt-8 flex items-center justify-center">
            <router-link
                to="/contact"
                class="mr-4 inline-flex h-14 items-center justify-center rounded-full bg-primary-600 px-10 font-display text-lg font-semibold text-white ring-primary-600 transition duration-150 ease-in-out hover:ring"
            >
                Contactez nous</router-link
            >
            <router-link
                to="/contact"
                class="inline-flex h-14 items-center justify-center rounded-full bg-sky-600 px-10 font-display text-lg font-semibold text-white ring-sky-600 transition duration-150 ease-in-out hover:ring"
            >
                En savoir plus</router-link
            >
        </div>
    </div>
</template>
