<script setup lang="ts">
import { ref } from "vue";
import { Link } from "@inertiajs/vue3";

const servicesOpen = ref(false);
const mobileMenu = ref(false);
const mobileServicesOpen = ref(false);

const faqOpen = ref<number | null>(null);

const toggleFaq = (index: number) => {
  faqOpen.value = faqOpen.value === index ? null : index;
};

const faqs = [
  {
    question: "Can I use my current domain name?",
    answer:
      "Yes, we can help you connect your current domain to the new website if needed.",
  },
  {
    question: "Do you have SEO tools?",
    answer:
      "Yes, we give you the option to handle your onsite SEO.",
  },
  {
    question:
      "I have no technical skills. Will I be able to use the website builder?",
    answer:
      "Yes, we've designed an editing tool that's user-friendly and simple to use.",
  },
];
const steps = [
  {
    image: "https://static.swiftbuilder.co.uk/img/hiw-1.jpg",
    title: "Select a template",
    description:
      "Create an account and select one of our mobile-friendly templates.",
  },
  {
    image: "https://static.swiftbuilder.co.uk/img/hiw-2.jpg",
    title: "Add your content",
    description:
      "Add your logo, wording and images to get the website you want.",
  },
  {
    image: "https://static.swiftbuilder.co.uk/img/hiw-3.jpg",
    title: "Publish your website",
    description:
      "Set up your subscription and publish your website to your domain.",
  },
];
</script>

<template>
  <div>

    <!-- HEADER -->
      <header class="w-full bg-white border-b border-gray-200 sticky top-0 z-50">

    <!-- TOP BAR -->
    <div class="hidden lg:block bg-[#08245C] text-white text-sm">
      <div class="max-w-[1400px] mx-auto px-6 py-2 flex justify-end gap-8">
        <p>Call us today: 01772 393080</p>
        <p>support@swiftbuilder.co.uk</p>
      </div>
    </div>

    <!-- MAIN NAV -->
    <div class="max-w-[1400px] mx-auto px-6">

      <div class="flex justify-between items-center h-[90px]">

        <!-- LOGO -->
        <a href="/" class="shrink-0">
          <img
            src="https://static.swiftbuilder.co.uk/img/logo-big.png"
            class="w-[130px]"
            alt="logo"
          />
        </a>

        <!-- DESKTOP MENU -->
        <div class="hidden lg:flex items-center gap-10">

          <!-- NAV LINKS -->
          <nav class="flex items-center gap-8">

            <a
              href="/"
              class="text-[#08245C] font-medium hover:text-[#11C786] transition"
            >
              Home
            </a>

            <!-- DROPDOWN -->
            <div
              class="relative"
              @mouseenter="servicesOpen = true"
              @mouseleave="servicesOpen = false"
            >

              <button
                class="flex items-center gap-1 text-[#08245C] font-medium hover:text-[#11C786] transition"
              >
                Services

                <svg
                  class="w-4 h-4 transition duration-300"
                  :class="servicesOpen ? 'rotate-180' : ''"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <!-- DROPDOWN -->
              <transition name="fade">
                <div
                  v-if="servicesOpen"
                  class="absolute top-full left-0 mt-4 w-[260px] bg-white rounded-2xl shadow-2xl border border-gray-200 py-4"
                >

                  <a
                    href="/build-your-website"
                    class="block px-6 py-3 hover:bg-gray-100 text-[#08245C]"
                  >
                    Build your own website
                  </a>

                  <a
                    href="/free-website-design"
                    class="block px-6 py-3 hover:bg-gray-100 text-[#08245C]"
                  >
                    Free website design
                  </a>

                  <a
                    href="/free-website-transfer"
                    class="block px-6 py-3 hover:bg-gray-100 text-[#08245C]"
                  >
                    Free website transfer
                  </a>

                  <a
                    href="/free-website-redesign"
                    class="block px-6 py-3 hover:bg-gray-100 text-[#08245C]"
                  >
                    Free website redesign
                  </a>

                  <a
                    href="/design-for-clients"
                    class="block px-6 py-3 hover:bg-gray-100 text-[#08245C]"
                  >
                    Design for clients
                  </a>

                </div>
              </transition>

            </div>

            <a
              href="/features"
              class="text-[#08245C] font-medium hover:text-[#11C786] transition"
            >
              Features
            </a>

            <a
              href="/templates"
              class="text-[#08245C] font-medium hover:text-[#11C786] transition"
            >
              Templates
            </a>

            <a
              href="/pricing"
              class="text-[#08245C] font-medium hover:text-[#11C786] transition"
            >
              Pricing
            </a>

            <a
              href="/blog"
              class="text-[#08245C] font-medium hover:text-[#11C786] transition"
            >
              Blog
            </a>

          </nav>

          <!-- BUTTONS -->
          <div class="flex items-center gap-4">

            <a
              href="/login"
              class="bg-[#3367C4] hover:bg-[#2857ab] transition text-white font-semibold px-6 h-[48px] rounded-xl flex items-center"
            >
              Login
            </a>

        <Link
  href="/register"
  class="bg-[#11C786] hover:bg-[#0fa775] transition text-white font-semibold px-6 h-[48px] rounded-xl flex items-center"
>
  Create a free account
</Link>
          </div>

        </div>

        <!-- MOBILE MENU BUTTON -->
        <button
          @click="mobileMenu = !mobileMenu"
          class="lg:hidden flex flex-col gap-1"
        >
          <span class="w-7 h-[3px] bg-[#08245C] rounded"></span>
          <span class="w-7 h-[3px] bg-[#08245C] rounded"></span>
          <span class="w-7 h-[3px] bg-[#08245C] rounded"></span>
        </button>

      </div>

    </div>

    <!-- MOBILE MENU -->
    <transition name="slide">
      <div
        v-if="mobileMenu"
        class="lg:hidden bg-white border-t border-gray-200"
      >

        <div class="px-6 py-6 flex flex-col gap-5">

          <a href="/" class="text-[#08245C] font-medium">
            Home
          </a>

          <!-- MOBILE DROPDOWN -->
          <div>

            <button
              @click="mobileServicesOpen = !mobileServicesOpen"
              class="flex items-center justify-between w-full text-[#08245C] font-medium"
            >
              Services

              <svg
                class="w-4 h-4 transition duration-300"
                :class="mobileServicesOpen ? 'rotate-180' : ''"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <transition name="fade">
              <div
                v-if="mobileServicesOpen"
                class="pl-4 mt-4 flex flex-col gap-4"
              >

                <a href="/build-your-website">
                  Build your own website
                </a>

                <a href="/free-website-design">
                  Free website design
                </a>

                <a href="/free-website-transfer">
                  Free website transfer
                </a>

                <a href="/free-website-redesign">
                  Free website redesign
                </a>

                <a href="/design-for-clients">
                  Design for clients
                </a>

              </div>
            </transition>

          </div>

          <a href="/features" class="text-[#08245C] font-medium">
            Features
          </a>

          <a href="/templates" class="text-[#08245C] font-medium">
            Templates
          </a>

          <a href="/pricing" class="text-[#08245C] font-medium">
            Pricing
          </a>

          <a href="/blog" class="text-[#08245C] font-medium">
            Blog
          </a>

          <!-- MOBILE BUTTONS -->
          <div class="flex flex-col gap-4 pt-4">

            <a
              href="/login"
              class="bg-[#3367C4] text-white h-[50px] rounded-xl flex items-center justify-center font-semibold"
            >
              Login
            </a>

            <Link
              href="/register"
              class="bg-[#11C786] text-white h-[50px] rounded-xl flex items-center justify-center font-semibold"
            >
              Create a free account
            </Link>

          </div>

        </div>

      </div>
    </transition>

  </header>

    <!-- HERO -->
    <section class="bg-[#3064B8] py-20">

      <div class="max-w-[1400px] mx-auto px-6">

        <div class="grid md:grid-cols-2 gap-10 items-center">

          <div>

            <h1 class="text-white text-5xl font-bold leading-tight">
              Easily create a website with the UK's best website builder
            </h1>

            <p class="text-white mt-6 text-lg">
              Use our drag-and-drop website builder to create a professional website.
            </p>

            <div class="flex gap-4 mt-8">

              <a
                href="#"
                class="bg-[#11C786] text-white px-8 py-4 rounded-xl font-semibold"
              >
                Enquire now
              </a>

              <a
                href="/register"
                class="bg-white text-[#08245C] px-8 py-4 rounded-xl font-semibold"
              >
                Get started
              </a>

            </div>

          </div>

          <div>
            <img
              src="https://static.swiftbuilder.co.uk/img/website-buildown-header.webp"
              class="w-full"
            />
          </div>

        </div>

      </div>

    </section>

    <!-- FAQ -->
    <section class="py-20 bg-[#f5f7fb]">

      <div class="max-w-[1000px] mx-auto px-6">

        <h2 class="text-4xl font-bold text-center mb-10">
          Frequently asked questions
        </h2>

        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-white rounded-2xl p-6 mb-5 cursor-pointer"
          @click="toggleFaq(index)"
        >

          <div class="flex justify-between items-center">

            <h3 class="font-semibold text-xl">
              {{ faq.question }}
            </h3>

            <span>
              {{ faqOpen === index ? '-' : '+' }}
            </span>

          </div>

          <transition
            enter-active-class="transition duration-300"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-[300px]"
          >

            <p
              v-if="faqOpen === index"
              class="mt-4 text-gray-600"
            >
              {{ faq.answer }}
            </p>

          </transition>

        </div>

      </div>

    </section>
    <section>
     <div class="container mx-auto pb-10 md:pb-20 px-5">

    <h2
      class="pt-10 md:pt-20 pb-10 text-2xl md:text-3xl text-center font-bold"
    >
      How it works
    </h2>

    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-10 pt-5"
    >

      <div
        v-for="(step, index) in steps"
        :key="index"
        class="text-center md:text-left"
      >

        <img
          :src="step.image"
          :alt="step.title"
          class="w-full rounded-xl"
          style="image-rendering: -webkit-optimize-contrast;"
        />

        <h3 class="text-2xl font-bold mt-5">
          {{ step.title }}
        </h3>

        <p class="text-lg mt-3 text-gray-600">
          {{ step.description }}
        </p>

      </div>

    </div>

  </div>
    </section>
    

  </div>
   <footer class="bg-[#1e305e] pt-0 overflow-hidden">

    <div class="max-w-[1400px] mx-auto px-6 lg:px-10">


      <!-- FOOTER CONTENT -->
      <div
        class="grid grid-cols-2 lg:grid-cols-4 gap-10 pt-24 pb-14"
      >

        <!-- COLUMN -->
        <div>

          <h3
            class="text-white text-[24px] font-bold mb-6"
          >
            Navigation
          </h3>

          <div class="space-y-4">

            <a
              href="/"
              class="block text-white/80 hover:text-white transition"
            >
              Home
            </a>

            <a
              href="/examples"
              class="block text-white/80 hover:text-white transition"
            >
              Examples
            </a>

            <a
              href="/features"
              class="block text-white/80 hover:text-white transition"
            >
              Features
            </a>

            <a
              href="/pricing"
              class="block text-white/80 hover:text-white transition"
            >
              Pricing
            </a>

          </div>

        </div>

        <!-- COLUMN -->
       <!-- SERVICES DROPDOWN -->
<div
  class="relative"
  @mouseenter="servicesOpen = true"
  @mouseleave="servicesOpen = false"
>
  
  <!-- BUTTON -->
  <button
    class="flex items-center gap-1 text-[#08245C] text-[18px] font-medium hover:text-[#11C786] transition-all duration-300"
  >
    Services

    <svg
      class="w-4 h-4 transition-all duration-300"
      :class="servicesOpen ? 'rotate-180' : ''"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  <!-- DROPDOWN -->
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-3"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-3"
  >
    <div
      v-if="servicesOpen"
      class="absolute top-full left-0 mt-4 w-[270px] bg-white border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.12)] z-50 overflow-hidden"
    >

      <a
        href="/build-your-website"
        class="block px-8 py-5 text-[17px] text-[#08245C] hover:bg-[#f8fafc] hover:text-[#11C786] transition-all duration-200"
      >
        Build your own website
      </a>

      <a
        href="/free-website-design"
        class="block px-8 py-5 text-[17px] text-[#08245C] hover:bg-[#f8fafc] hover:text-[#11C786] transition-all duration-200"
      >
        Free website design
      </a>

      <a
        href="/free-website-transfer"
        class="block px-8 py-5 text-[17px] text-[#08245C] hover:bg-[#f8fafc] hover:text-[#11C786] transition-all duration-200"
      >
        Free website transfer
      </a>

      <a
        href="/free-website-redesign"
        class="block px-8 py-5 text-[17px] text-[#08245C] hover:bg-[#f8fafc] hover:text-[#11C786] transition-all duration-200"
      >
        Free website redesign
      </a>

      <a
        href="/design-for-clients"
        class="block px-8 py-5 text-[17px] text-[#08245C] hover:bg-[#f8fafc] hover:text-[#11C786] transition-all duration-200"
      >
        Design for clients
      </a>

    </div>
  </transition>

</div>

        <!-- COLUMN -->
        <div>

          <h3
            class="text-white text-[24px] font-bold mb-6"
          >
            Resources
          </h3>

          <div class="space-y-4">

            <a
              href="/templates"
              class="block text-white/80 hover:text-white transition"
            >
              Templates
            </a>

            <a
              href="/design-for-clients"
              class="block text-white/80 hover:text-white transition"
            >
              Design for clients
            </a>

            <a
              href="/compare"
              class="block text-white/80 hover:text-white transition"
            >
              Compare
            </a>

            <a
              href="/blog"
              class="block text-white/80 hover:text-white transition"
            >
              Blog
            </a>

          </div>

        </div>

        <!-- COLUMN -->
        <div>

          <h3
            class="text-white text-[24px] font-bold mb-6"
          >
            Company
          </h3>

          <div class="space-y-4">

            <a
              href="/contact"
              class="block text-white/80 hover:text-white transition"
            >
              Contact us
            </a>

            <a
              href="/affiliates"
              class="block text-white/80 hover:text-white transition"
            >
              Affiliates
            </a>

          </div>

          <!-- SOCIAL -->
          <div class="flex items-center gap-4 mt-8">

            <!-- FACEBOOK -->
            <a
              href="#"
              class="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
            >

              <svg
                class="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 12a10 10 0 10-11.56 9.88v-6.99h-2.1V12h2.1V9.8c0-2.07 1.23-3.22 3.11-3.22.9 0 1.84.16 1.84.16v2.03h-1.04c-1.03 0-1.35.64-1.35 1.29V12h2.3l-.37 2.89h-1.93v6.99A10 10 0 0022 12z"
                />
              </svg>

            </a>

            <!-- INSTAGRAM -->
            <a
              href="#"
              class="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
            >

              <svg
                class="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2zm8.7 2a1.05 1.05 0 110 2.1 1.05 1.05 0 010-2.1zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"
                />
              </svg>

            </a>

            <!-- YOUTUBE -->
            <a
              href="#"
              class="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
            >

              <svg
                class="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21.58 7.19a2.73 2.73 0 00-1.92-1.93C17.88 4.8 12 4.8 12 4.8s-5.88 0-7.66.46A2.73 2.73 0 002.42 7.2 28.52 28.52 0 002 12a28.52 28.52 0 00.42 4.81 2.73 2.73 0 001.92 1.93c1.78.46 7.66.46 7.66.46s5.88 0 7.66-.46a2.73 2.73 0 001.92-1.93A28.52 28.52 0 0022 12a28.52 28.52 0 00-.42-4.81zM10 15.5v-7l6 3.5z"
                />
              </svg>

            </a>

          </div>

        </div>

      </div>

      <!-- COPYRIGHT -->
      <div
        class="border-t border-white/10 py-8 flex flex-col lg:flex-row items-center justify-between gap-5"
      >

        <p class="text-white/70 text-center lg:text-left">
          © 2026 Pagio Website Builder. All rights reserved.
        </p>

        <div
          class="flex items-center gap-6 text-white/70"
        >

          <a href="#" class="hover:text-white transition">
            Privacy Policy
          </a>

          <a href="#" class="hover:text-white transition">
            Terms & Conditions
          </a>

        </div>

      </div>

    </div>

  </footer>
</template>