<template>
    <transition
        appear
        enter-from-class="opacity-0 translate-y-10"
        enter-to-class="opacity-100 translate-y-0"
        enter-active-class="transition duration-300 ease-in-out"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-10"
    >
        <slot />
    </transition>
</template>
