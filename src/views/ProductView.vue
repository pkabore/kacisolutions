<script setup>
    import ProductItem from "@/components/ProductItem.vue";
    import Heading from "@/components/Heading.vue";

    const props = defineProps({
        items: {
            type: Array,
            default: [
                {
                    id: 1,
                    title: "Imprimante",
                    price: 12000,
                    img: "printer.jpg",
                    link: "https://wa.me/22677546973",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illo molestiae, mollitia laborum, natus amet quam quibusdam architecto ratione sed corporis! Illo quisquam sapiente dolores laboriosam exercitationem blanditiis sed repellat.",
                },

                {
                    id: 2,
                    title: "Tablette graphique",
                    price: 12000,
                    img: "design.jpg",
                    link: "https://wa.me/22677546973",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam delectus nemo, quo officiis culpa labore doloribus fuga, voluptas dolore et dicta rerum perspiciatis blanditiis. Alias deserunt quae tempora ipsam!",
                },
                {
                    id: 3,
                    title: "Ordinateur Macbook",
                    price: 12000,
                    img: "mac.jpg",
                    link: "https://wa.me/22677546973",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos officiis ea quos itaque, ratione minima, dignissimos consectetur, quae hic recusandae at est? Dolore rerum tempore itaque, nesciunt libero debitis incidunt.",
                },
            ],
        },
    });
</script>
<template>
    <article>
        <Heading> Produits </Heading>
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
                class="grid grid-flow-row grid-cols-1 justify-center gap-4 p-4 pt-0 md:grid-cols-2 md:p-10 lg:grid-cols-3 lg:gap-8"
            >
                <ProductItem
                    v-for="item in items"
                    :key="item.id"
                    :item="item"
                />
            </div>
        </transition>
    </article>
</template>
