<script setup>
    import Heading from "@/components/Heading.vue";
    import TransitionComponent from "@/components/TransitionComponent.vue";
    import EmailIcon from "@/components/Icons/EmailIcon.vue";
    import PhoneIcon from "@/components/Icons/PhoneIcon.vue";
    import MapIcon from "@/components/Icons/MapIcon.vue";
    import WhatsappIcon from "@/components/Icons/WhatsappIcon.vue";
    import FacebookIcon from "@/components/Icons/FacebookIcon.vue";
    import LinkedinIcon from "@/components/Icons/LinkedinIcon.vue";
</script>

<template>
    <TransitionComponent>
        <section
            class="m-2 my-8 mx-auto max-w-3xl rounded-3xl bg-white p-2 shadow md:p-10"
        >
            <Heading> Nous contacter </Heading>
            <div
                class="mx-auto mt-10 max-w-md gap-2 font-display font-bold sm:gap-4 sm:text-2xl"
            >
                <div class="mx-auto flex w-10/12 items-center">
                    <EmailIcon
                        class="mr-2 h-6 w-6 text-neutral-400 sm:mr-4 sm:h-8 sm:w-8"
                    />
                    <p>kacisolutions@gmail.com</p>
                </div>
                <div class="mx-auto mt-2 flex w-10/12 items-center sm:mt-4">
                    <PhoneIcon
                        class="mr-2 h-6 w-6 text-neutral-400 sm:mr-4 sm:h-8 sm:w-8"
                    />
                    <p>+226 77 54 69 73</p>
                </div>
                <div class="mx-auto mt-2 flex w-10/12 items-center sm:mt-4">
                    <MapIcon
                        class="mr-2 h-6 w-6 text-neutral-400 sm:mr-4 sm:h-8 sm:w-8"
                    />
                    <p>Ouagadougou, Burkina Faso</p>
                </div>
            </div>

            <div class="my-10 border-t p-4 pt-10">
                <div class="mx-auto max-w-md font-display text-lg font-bold">
                    <a
                        target="_blank"
                        href="https://wa.me/22677546973"
                        class="mx-auto flex w-10/12 items-center text-[#40C351] decoration-2 underline-offset-2 hover:underline"
                    >
                        <WhatsappIcon
                            class="mr-2 h-6 w-6 text-neutral-400 sm:mr-4 sm:h-8 sm:w-8"
                        />
                        <span>WhatsApp</span>
                    </a>
                    <a
                        target="_blank"
                        href="https://fb.com/kacisolutions.net"
                        class="mx-auto mt-2 flex w-10/12 items-center text-[#039BE5] decoration-2 underline-offset-2 hover:underline sm:mt-4"
                    >
                        <FacebookIcon
                            class="mr-2 h-6 w-6 text-neutral-400 sm:mr-4 sm:h-8 sm:w-8"
                        />
                        <span>Facebook</span>
                    </a>
                    <a
                        target="_blank"
                        href="https://bf.linkedin.com/in/amadou-kientega-00a238150"
                        class="mx-auto mt-2 flex w-10/12 items-center text-[#0288D1] decoration-2 underline-offset-2 hover:underline sm:mt-4"
                    >
                        <LinkedinIcon
                            class="mr-2 h-6 w-6 text-neutral-400 sm:mr-4 sm:h-8 sm:w-8"
                        />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>

            <div class="my-10 border-t p-4 pt-10">
                <form
                    id="contact"
                    netlify
                    data-netlify="true"
                    name="contact"
                    method="POST"
                    class="mx-auto w-full max-w-md"
                    data-netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="contact" value="contact" />
                    <div class="items-center justify-between md:flex">
                        <input
                            type="text"
                            class="input md:mr-4"
                            maxlength="255"
                            required
                            name="nom"
                            placeholder="Votre nom"
                        />
                        <input
                            type="text"
                            required
                            maxlength="255"
                            class="input md:mt-0"
                            name="prenom"
                            placeholder="Votre pr??nom"
                        />
                    </div>
                    <input
                        type="email"
                        class="input"
                        maxlength="255"
                        required
                        name="email"
                        placeholder="Votre e-mail"
                    />
                    <input
                        type="text"
                        required
                        maxlength="255"
                        class="input"
                        name="sujet"
                        placeholder="Sujet de votre message"
                    />
                    <textarea
                        required
                        name="message"
                        maxlength="511"
                        class="textarea"
                        placeholder="Message ..."
                        rows="5"
                    ></textarea>
                    <p class="text-right">
                        <button
                            type="submit"
                            class="mt-4 inline-flex h-12 items-center justify-center rounded-full bg-primary-700 px-8 font-display text-lg font-bold text-white ring-primary-600 transition duration-150 ease-in-out hover:ring"
                        >
                            Envoyer
                        </button>
                    </p>
                </form>
            </div>
        </section>
    </TransitionComponent>
</template>
