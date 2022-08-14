<script setup>
    import TransitionComponent from "@/components/TransitionComponent.vue";
</script>

<template>
    <article>
        <TransitionComponent
            appear
            enter-from-class="opacity-0 translate-y-10"
            enter-to-class="opacity-100 translate-y-0"
            enter-active-class="transition duration-300 ease-in-out"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-10"
        >
            <div class="mx-auto max-w-2xl p-4">
                <h1 class="py-10 text-center font-display text-3xl font-black">
                    A propos
                </h1>
                <p class="text-lg font-[550] text-gray-600">
                    KACI-SOLUTIONS est une Agence d’expertise informatique, de
                    communication, de conception / intégration de solutions
                    digitales, et de prestations de services. Le siège se trouve
                    à Ouagadougou au Burkina Faso. ​
                </p>

                <p class="mt-10 text-lg font-[550] text-gray-600">
                    Notre équipe est constituée de professionnels spécialisés
                    dans les domaines divers allant de l'infogérance, le design
                    graphique, la programmation web, mobile, l'électronique
                    industrielle et commerce divers.
                </p>
            </div>
        </TransitionComponent>
    </article>
</template>
