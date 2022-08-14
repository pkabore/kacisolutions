<script setup>
    import Heading from "@/components/Heading.vue";
    import EmailIcon from "@/components/Icons/EmailIcon.vue";
    import PhoneIcon from "@/components/Icons/PhoneIcon.vue";
    import MapIcon from "@/components/Icons/MapIcon.vue";
    import WhatsappIcon from "@/components/Icons/WhatsappIcon.vue";
    import FacebookIcon from "@/components/Icons/FacebookIcon.vue";
    import LinkedinIcon from "@/components/Icons/LinkedinIcon.vue";
</script>

<template>
    <section>
        <Heading> Nous contacter </Heading>

        <div
            class="mx-auto mt-10 max-w-md gap-2 font-display font-medium text-neutral-600 sm:gap-4 sm:text-2xl"
        >
            <div class="mx-auto flex w-10/12 items-center">
                <EmailIcon
                    class="mr-2 h-6 w-6 text-neutral-400 sm:mr-4 sm:h-10 sm:w-10"
                />
                <p>kacisolutions@gmail.com</p>
            </div>
            <div class="mx-auto mt-2 flex w-10/12 items-center sm:mt-4">
                <PhoneIcon
                    class="mr-2 h-6 w-6 text-neutral-400 sm:mr-4 sm:h-10 sm:w-10"
                />
                <p>+226 77 54 69 73</p>
            </div>
            <div class="mx-auto mt-2 flex w-10/12 items-center sm:mt-4">
                <MapIcon
                    class="mr-2 h-6 w-6 text-neutral-400 sm:mr-4 sm:h-10 sm:w-10"
                />
                <p>Ouagadougou, Burkina Faso</p>
            </div>
        </div>
        <div
            class="my-10 flex items-center justify-center gap-8 border-t pt-10"
        >
            <a href="https://wa.me/22677546973" target="_blank">
                <WhatsappIcon class="h-16 w-16" />
            </a>
            <a href="https://fb.com/kacisolutions.net" target="_blank">
                <FacebookIcon class="h-16 w-16" />
            </a>
            <a
                href="https://bf.linkedin.com/in/amadou-kientega-00a238150"
                target="_blank"
            >
                <LinkedinIcon class="h-16 w-16" />
            </a>
        </div>
        <div class="my-10 border-t p-4 pt-10">
            <form method="post" class="mx-auto w-full max-w-lg md:w-1/2">
                <input type="email" class="input" placeholder="Votre e-mail" />
                <input
                    type="Sujet"
                    class="input"
                    placeholder="Sujet de votre message"
                />
                <textarea
                    class="textarea"
                    placeholder="Message ..."
                    rows="5"
                ></textarea>
                <p class="text-right">
                    <button
                        to="/contact"
                        class="mt-4 inline-flex h-16 w-full items-center justify-center rounded-full bg-primary-600 px-8 font-display text-lg font-bold text-white ring-primary-600 transition duration-150 ease-in-out hover:ring"
                    >
                        Envoyer
                    </button>
                </p>
            </form>
        </div>
    </section>
</template>
