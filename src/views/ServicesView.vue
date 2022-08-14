<script setup>
    import Card from "@/components/Card.vue";
    import Heading from "@/components/Heading.vue";

    const props = defineProps({
        items: {
            type: Array,
            default: [
                {
                    id: 1,
                    title: "Design",
                    desc: "Kaci-solutions utilise les dernières normes et bonnes pratiques du domaine du design et du CMS pour assurer que votre produit réponde à vos besoins divers.",
                },

                {
                    id: 2,
                    title: "Conception",
                    desc: "La conception est une étape importante du processus de réalisation de votre projet. Nous mettons l'accent sur un design intuitif permettant aux utilisateurs une navigation aisée de votre site web.",
                },
                {
                    id: 3,
                    title: "Programmation",
                    desc: "Le code est un art pour nous. Kacisolutions ne se limite pas seulement à la partie visuelle de votre produit mais aussi aux détails de sécurité, de performance et de maintenance dans le futur.",
                },
                {
                    id: 4,
                    title: "Infogérance",
                    desc: "Kaci-solutions utilise les dernières normes et bonnes pratiques du domaine du design et du CMS pour assurer que votre produit réponde à vos besoins divers.",
                },

                {
                    id: 5,
                    title: "Infographie",
                    desc: "Kaci-solutions utilise les dernières normes et bonnes pratiques du domaine du design et du CMS pour assurer que votre produit réponde à vos besoins divers.",
                },
                {
                    id: 6,
                    title: "Infogérance",
                    desc: "Kaci-solutions utilise les dernières normes et bonnes pratiques du domaine du design et du CMS pour assurer que votre produit réponde à vos besoins divers.",
                },
            ],
        },
    });
</script>
<template>
    <article>
        <Heading> Services </Heading>
        <transition
            appear
            enter-from-class="opacity-0 translate-y-10"
            enter-to-class="opacity-100 translate-y-0"
            enter-active-class="transition duration-300 ease-in-out"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-10"
        >
            <div
                class="grid-flow-row justify-center gap-4 p-4 pt-0 md:grid md:grid-cols-2 md:p-10 lg:grid-cols-3 lg:gap-8"
            >
                <Card v-for="item in items" :key="item.id" :item="item" />
            </div>
        </transition>
    </article>
</template>
