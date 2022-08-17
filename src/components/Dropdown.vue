<script setup>
    import MenuIcon from "./Icons/MenuIcon";
    import { ref } from "vue";

    const open = ref(false);
</script>

<template>
    <div class="relative">
        <button
            @click="open = !open"
            class="rounded-xl p-1 text-2xl text-white ring-primary-600 transition duration-150 ease-in-out hover:text-primary-600 hover:ring focus:text-primary-600 focus:ring"
        >
            <MenuIcon class="h-7 w-7 stroke-[3px]" />
        </button>

        <transition
            enter-from-class="opacity-0 scale-90"
            enter-to-class="opacity-100 scale-100"
            enter-active-class="transition duration-300 ease-in-out"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-90"
        >
            <div
                v-show="open"
                class="absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-3xl bg-white shadow-2xl"
            >
                <div
                    class="my-4 text-center font-display font-bold text-neutral-600"
                >
                    <router-link
                        @click="open = false"
                        class="block py-2 transition duration-150 ease-in-out hover:bg-neutral-200 hover:text-primary-700"
                        to="/"
                        >Accueil</router-link
                    >
                    <router-link
                        @click="open = false"
                        class="block py-2 transition duration-150 ease-in-out hover:bg-neutral-200 hover:text-primary-700"
                        to="/services"
                        >Services</router-link
                    >
                    <router-link
                        @click="open = false"
                        class="block py-2 transition duration-150 ease-in-out hover:bg-neutral-200 hover:text-primary-700"
                        to="/produits"
                        >Produits</router-link
                    >
                    <router-link
                        @click="open = false"
                        class="block py-2 transition duration-150 ease-in-out hover:bg-neutral-200 hover:text-primary-700"
                        to="/contact"
                        >Contact</router-link
                    >
                    <router-link
                        @click="open = false"
                        class="block py-2 transition duration-150 ease-in-out hover:bg-neutral-200 hover:text-primary-700"
                        to="/formations"
                        >Formations</router-link
                    >

                    <router-link
                        @click="open = false"
                        class="block py-2 transition duration-150 ease-in-out hover:bg-neutral-200 hover:text-primary-700"
                        to="/marketing"
                        >Marketing</router-link
                    >
                </div>
            </div>
        </transition>
    </div>
</template>
