<script setup>
    import TransitionComponent from "@/components/TransitionComponent.vue";
    import HeroMessage from "@/components/HeroMessage.vue";
    import HeroIllustration from "@/components/HeroIllustration.vue";
    import AboutIllustration from "@/components/AboutIllustration.vue";
    import Heading from "@/components/Heading.vue";
</script>

<template>
    <article>
        <TransitionComponent>
            <div class="h-full items-center justify-around p-4 md:flex">
                <div class="mt-1O mx-auto md:w-1/2">
                    <HeroMessage />
                </div>
                <HeroIllustration />
            </div>
        </TransitionComponent>
        <TransitionComponent>
            <div
                class="items-center justify-around bg-gradient-to-r from-primary-200 to-primary-700 md:flex"
            >
                <AboutIllustration class="mx-auto max-w-md" />
                <div
                    class="mx-auto p-4 font-display text-lg font-semibold sm:p-6 md:w-3/5 md:text-xl lg:text-2xl"
                >
                    <h2
                        class="my-10 text-center font-display text-3xl font-black md:text-5xl"
                    >
                        Qui sommes-nous ?
                    </h2>
                    <p class="leading-snug">
                        <strong class="font-bold">KACI </strong>
                        est une agence d’expertise informatique, de
                        communication, de conception d'intégration de solutions
                        digitales, et de prestations de services. Le siège se
                        trouve à Ouagadougou au Burkina Faso. ​
                    </p>

                    <p class="mt-4 leading-snug">
                        Notre équipe est constituée de professionnels
                        spécialisés dans les domaines divers allant de
                        l'infogérance, le design graphique, la programmation
                        web, mobile, l'électronique industrielle et commerce
                        divers.
                    </p>
                </div>
            </div>
        </TransitionComponent>
    </article>
</template>
