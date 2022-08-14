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
    <transition>
        <div>
            <h1
                class="font-display text-4xl font-black tracking-tight text-neutral-800 md:text-5xl"
            >
                {{ phrase }} <Carret />
            </h1>

            <p class="mt-8">
                <router-link
                    to="/contact"
                    class="inline-flex h-12 items-center justify-center rounded-full bg-primary-600 px-8 font-display text-lg font-bold text-white ring-primary-600 transition duration-150 ease-in-out hover:ring"
                >
                    Contactez-nous</router-link
                >
            </p>
        </div>
    </transition>
</template>
