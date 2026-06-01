<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navigation, Autoplay } from "swiper/modules";
const servicesOpen = ref(false);
const mobileMenu = ref(false);
const mobileServicesOpen = ref(false);

const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});

const templates = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
];

</script>

<template>
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
    <section class="bg-[#3064B8] overflow-hidden">

    <div
      class="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 lg:py-24"
    >

      <div
        class="flex flex-col-reverse lg:flex-row items-center justify-between gap-16"
      >

        <!-- LEFT CONTENT -->
        <div class="w-full lg:w-1/2">

          <!-- HEADING -->
          <h1
            class="text-white text-[38px] leading-[48px] lg:text-[58px] lg:leading-[72px] font-bold"
          >
            Get Your Website for Free,
            Only Pay for Hosting
          </h1>

          <!-- MOBILE IMAGE -->
          <img
            class="block lg:hidden w-full max-w-[550px] mx-auto my-10"
            src="https://static.swiftbuilder.co.uk/img/homepage-screen.png"
            alt="hero"
          />

          <!-- DESCRIPTION -->
          <p
            class="mt-6 text-white/90 text-[18px] leading-[34px] max-w-[650px]"
          >
            We are a UK-based website platform that builds
            websites for our customers for free, or you can
            build it yourself.
          </p>

          <!-- FEATURES -->
          <div class="mt-8 space-y-4">

            <!-- ITEM -->
            <div class="flex items-center gap-4">

              <div
                class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <span class="text-white text-[18px]">
                No hidden fees
              </span>

            </div>

            <!-- ITEM -->
            <div class="flex items-center gap-4">

              <div
                class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <span class="text-white text-[18px]">
                No long-term contracts
              </span>

            </div>

          </div>

          <!-- BUTTONS -->
          <div
            class="mt-10 flex flex-col sm:flex-row gap-5"
          >

            <!-- BUTTON -->
            <button
              class="bg-[#08245C] hover:bg-[#051537] transition text-white font-semibold h-[58px] px-10 rounded-xl text-[17px]"
            >
              Enquire now
            </button>

            <!-- BUTTON -->
            <button
              class="bg-[#11C786] hover:bg-[#0ea774] transition text-white font-semibold h-[58px] px-10 rounded-xl text-[17px]"
            >
              Get started for free
            </button>

          </div>

        </div>

        <!-- RIGHT IMAGE -->
        <div class="w-full lg:w-1/2">

          <img
            class="hidden lg:block w-full"
            src="https://static.swiftbuilder.co.uk/img/homepage-screen.webp"
            alt="hero"
          />

        </div>

      </div>

    </div>

  </section>
   <section class="bg-[#F5F7FB] py-20 overflow-hidden">

    <div class="max-w-[1400px] mx-auto px-6 lg:px-10">

      <!-- HEADING -->
      <div class="text-center">

        <h2
          class="text-[34px] lg:text-[52px] leading-[45px] lg:leading-[65px] font-bold text-[#08245C]"
        >
          4 Ways to Get Your Free Website with Pagio
        </h2>

        <p
          class="mt-5 text-[18px] lg:text-[22px] text-gray-600 max-w-[900px] mx-auto leading-[34px]"
        >
          All options let you easily edit and manage your site
          with our drag-and-drop builder.
        </p>

      </div>

      <!-- CARDS -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16"
      >

        <!-- CARD -->
        <div
          class="bg-white rounded-[28px] p-8 border border-gray-200 shadow-lg hover:-translate-y-3 transition duration-500"
        >

          <!-- NUMBER -->
          <div
            class="w-[75px] h-[75px] rounded-full bg-[#EAF1FF] flex items-center justify-center mx-auto"
          >
            <span
              class="text-[#2F66D0] text-[28px] font-bold"
            >
              1
            </span>
          </div>

          <!-- TITLE -->
          <h3
            class="text-[26px] font-bold text-[#08245C] mt-8 text-center"
          >
            Free Website Design
          </h3>

          <!-- DESCRIPTION -->
          <p
            class="text-gray-600 text-[17px] leading-[32px] text-center mt-5 min-h-[110px]"
          >
            Send us your content and we’ll create your new
            website for free.
          </p>

          <!-- BUTTONS -->
          <div class="mt-8 space-y-4">

            <button
              class="w-full h-[54px] rounded-xl bg-[#3367C4] hover:bg-[#2857ab] transition text-white font-semibold"
            >
              Enquire now
            </button>

            <button
              class="w-full h-[54px] rounded-xl bg-[#11C786] hover:bg-[#0ea774] transition text-white font-semibold"
            >
              Find out more
            </button>

          </div>

        </div>

        <!-- CARD -->
        <div
          class="relative bg-white rounded-[28px] p-8 border border-gray-200 shadow-lg hover:-translate-y-3 transition duration-500 overflow-hidden"
        >

          <!-- TOP TAG -->
          <img
            src="https://static.swiftbuilder.co.uk/img/top-tag.png"
            class="absolute top-0 left-0 w-[110px]"
            alt=""
          />

          <!-- NUMBER -->
          <div
            class="w-[75px] h-[75px] rounded-full bg-[#EAF1FF] flex items-center justify-center mx-auto"
          >
            <span
              class="text-[#2F66D0] text-[28px] font-bold"
            >
              2
            </span>
          </div>

          <!-- TITLE -->
          <h3
            class="text-[26px] font-bold text-[#08245C] mt-8 text-center"
          >
            Free Website Redesign
          </h3>

          <!-- DESCRIPTION -->
          <p
            class="text-gray-600 text-[17px] leading-[32px] text-center mt-5 min-h-[110px]"
          >
            We’ll redesign and move your site to Pagio for
            free, only pay for hosting.
          </p>

          <!-- BUTTONS -->
          <div class="mt-8 space-y-4">

            <button
              class="w-full h-[54px] rounded-xl bg-[#3367C4] hover:bg-[#2857ab] transition text-white font-semibold"
            >
              Enquire now
            </button>

            <button
              class="w-full h-[54px] rounded-xl bg-[#11C786] hover:bg-[#0ea774] transition text-white font-semibold"
            >
              Find out more
            </button>

          </div>

        </div>

        <!-- CARD -->
        <div
          class="bg-white rounded-[28px] p-8 border border-gray-200 shadow-lg hover:-translate-y-3 transition duration-500"
        >

          <!-- NUMBER -->
          <div
            class="w-[75px] h-[75px] rounded-full bg-[#EAF1FF] flex items-center justify-center mx-auto"
          >
            <span
              class="text-[#2F66D0] text-[28px] font-bold"
            >
              3
            </span>
          </div>

          <!-- TITLE -->
          <h3
            class="text-[26px] font-bold text-[#08245C] mt-8 text-center"
          >
            Free Website Transfer
          </h3>

          <!-- DESCRIPTION -->
          <p
            class="text-gray-600 text-[17px] leading-[32px] text-center mt-5 min-h-[110px]"
          >
            We’ll transfer your existing site to Pagio for
            free, only pay for hosting.
          </p>

          <!-- BUTTONS -->
          <div class="mt-8 space-y-4">

            <button
              class="w-full h-[54px] rounded-xl bg-[#3367C4] hover:bg-[#2857ab] transition text-white font-semibold"
            >
              Enquire now
            </button>

            <button
              class="w-full h-[54px] rounded-xl bg-[#11C786] hover:bg-[#0ea774] transition text-white font-semibold"
            >
              Find out more
            </button>

          </div>

        </div>

        <!-- CARD -->
        <div
          class="bg-white rounded-[28px] p-8 border border-gray-200 shadow-lg hover:-translate-y-3 transition duration-500"
        >

          <!-- NUMBER -->
          <div
            class="w-[75px] h-[75px] rounded-full bg-[#EAF1FF] flex items-center justify-center mx-auto"
          >
            <span
              class="text-[#2F66D0] text-[28px] font-bold"
            >
              4
            </span>
          </div>

          <!-- TITLE -->
          <h3
            class="text-[26px] font-bold text-[#08245C] mt-8 text-center"
          >
            Build Your Own
          </h3>

          <!-- DESCRIPTION -->
          <p
            class="text-gray-600 text-[17px] leading-[32px] text-center mt-5 min-h-[110px]"
          >
            Easily build your website using our drag-and-drop
            website builder.
          </p>

          <!-- BUTTONS -->
          <div class="mt-8 space-y-4">

            <button
              class="w-full h-[54px] rounded-xl bg-[#3367C4] hover:bg-[#2857ab] transition text-white font-semibold"
            >
              Enquire now
            </button>

            <button
              class="w-full h-[54px] rounded-xl bg-[#11C786] hover:bg-[#0ea774] transition text-white font-semibold"
            >
              Find out more
            </button>

          </div>

        </div>

      </div>

    </div>

  </section>
  <section class="py-20 bg-white overflow-hidden">

    <div class="max-w-[1400px] mx-auto px-6 lg:px-10">

      <!-- HEADING -->
      <div class="text-center">

        <h2
          class="text-[34px] lg:text-[54px] leading-[45px] lg:leading-[65px] font-bold text-[#08245C]"
        >
          What do you get?
        </h2>

      </div>

      <!-- CARDS -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16"
      >

        <!-- CARD -->
        <div
          class="bg-white border border-[#E7EDF7] rounded-[30px] p-10 shadow-xl hover:-translate-y-3 transition duration-500"
        >

          <!-- ICON -->
          <div
            class="w-[85px] h-[85px] rounded-full bg-orange-100 flex items-center justify-center"
          >

            <svg
              class="w-10 h-10 text-orange-500"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"
              />
            </svg>

          </div>

          <!-- TITLE -->
          <h3
            class="text-[30px] font-bold text-[#08245C] mt-8"
          >
            A UK-based support team
          </h3>

          <!-- DESCRIPTION -->
          <p
            class="text-gray-600 text-[18px] leading-[34px] mt-6"
          >
            Our support team is UK-based which means you can
            call, email or live chat with real people in
            real-time. No need to wait days for a response
            from a support ticket.
          </p>

        </div>

        <!-- CARD -->
        <div
          class="bg-white border border-[#E7EDF7] rounded-[30px] p-10 shadow-xl hover:-translate-y-3 transition duration-500"
        >

          <!-- ICON -->
          <div
            class="w-[85px] h-[85px] rounded-full bg-green-100 flex items-center justify-center"
          >

            <svg
              class="w-10 h-10 text-green-500"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M480 48H32a16 16 0 00-16 16v320a16 16 0 0016 16h168v32h-72v32h256v-32h-72v-32h168a16 16 0 0016-16V64a16 16 0 00-16-16zm-20 36v216H52V84z"
              />
            </svg>

          </div>

          <!-- TITLE -->
          <h3
            class="text-[30px] font-bold text-[#08245C] mt-8"
          >
            Easy-to-use platform
          </h3>

          <!-- DESCRIPTION -->
          <p
            class="text-gray-600 text-[18px] leading-[34px] mt-6"
          >
            Easily make changes to your website using the
            easy-to-use editor. Everything you need to build
            a top-performing website is in one place with no
            coding skills needed.
          </p>

        </div>

        <!-- CARD -->
        <div
          class="bg-white border border-[#E7EDF7] rounded-[30px] p-10 shadow-xl hover:-translate-y-3 transition duration-500"
        >

          <!-- ICON -->
          <div
            class="w-[85px] h-[85px] rounded-full bg-blue-100 flex items-center justify-center"
          >

            <svg
              class="w-10 h-10 text-blue-500"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M32 416a16 16 0 0016 16h416a16 16 0 0016-16V222H32zm66-138a8 8 0 018-8h92a8 8 0 018 8v64a8 8 0 01-8 8h-92a8 8 0 01-8-8z"
              />
            </svg>

          </div>

          <!-- TITLE -->
          <h3
            class="text-[30px] font-bold text-[#08245C] mt-8"
          >
            No hidden fees
          </h3>

          <!-- DESCRIPTION -->
          <p
            class="text-gray-600 text-[18px] leading-[34px] mt-6"
          >
            There are no hidden fees. You simply pay for
            hosting and we build your website for you. We
            design up to 5 pages for free and you can add
            more whenever you want.
          </p>

        </div>

      </div>

    </div>

  </section>
    <!-- FEATURES IMAGE SECTION -->
  <section class="py-20 overflow-hidden bg-white">

    <div class="max-w-[1400px] mx-auto px-6 lg:px-10">

      <!-- ROW 1 -->
      <div
        class="flex flex-col lg:flex-row items-center gap-16 mb-24"
      >

        <!-- IMAGE -->
        <div class="w-full lg:w-1/2">

          <img
            class="w-full rounded-[30px] shadow-2xl"
            src="https://s3.eu-west-2.amazonaws.com/swiftbuilder/portal/adventages/1402-67b70bbccea93.jpeg"
            alt="Mobile Friendly"
          />

        </div>

        <!-- CONTENT -->
        <div class="w-full lg:w-1/2 text-center lg:text-left">

          <!-- SMALL TAG -->
          <div
            class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#EAF1FF] text-[#2F66D0] font-semibold text-sm"
          >
            Responsive Design
          </div>

          <!-- TITLE -->
          <h2
            class="mt-6 text-[38px] lg:text-[56px] leading-[48px] lg:leading-[68px] font-bold text-[#08245C]"
          >
            Mobile Friendly
          </h2>

          <!-- DESCRIPTION -->
          <p
            class="mt-8 text-[18px] lg:text-[21px] leading-[38px] text-gray-600"
          >
            Nobody wants to waste time editing the website in
            both desktop and mobile views. Pagio is built in
            flexible blocks that automatically adapt to every
            screen size so your website always looks perfect.
          </p>

          <!-- BUTTON -->
          <button
            class="mt-10 bg-[#11C786] hover:bg-[#0ea774] transition text-white font-semibold px-10 h-[58px] rounded-xl"
          >
            Learn More
          </button>

        </div>

      </div>

      <!-- ROW 2 -->
      <div
        class="flex flex-col lg:flex-row-reverse items-center gap-16"
      >

        <!-- IMAGE -->
        <div class="w-full lg:w-1/2">

          <img
            class="w-full rounded-[30px] shadow-2xl"
            src="https://s3.eu-west-2.amazonaws.com/swiftbuilder/portal/adventages/1482-67b70b9764828.jpeg"
            alt="Hosting"
          />

        </div>

        <!-- CONTENT -->
        <div class="w-full lg:w-1/2 text-center lg:text-left">

          <!-- SMALL TAG -->
          <div
            class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#EAFBF6] text-[#11C786] font-semibold text-sm"
          >
            Premium Hosting
          </div>

          <!-- TITLE -->
          <h2
            class="mt-6 text-[38px] lg:text-[56px] leading-[48px] lg:leading-[68px] font-bold text-[#08245C]"
          >
            Fast & Reliable Hosting
          </h2>

          <!-- DESCRIPTION -->
          <p
            class="mt-8 text-[18px] lg:text-[21px] leading-[38px] text-gray-600"
          >
            Our platform uses enterprise-level hosting
            technology similar to Netflix, Airbnb and Amazon.
            Your website stays fast, secure and reliable even
            during heavy traffic.
          </p>

          <!-- BUTTON -->
          <button
            class="mt-10 bg-[#3367C4] hover:bg-[#2857ab] transition text-white font-semibold px-10 h-[58px] rounded-xl"
          >
            Explore Hosting
          </button>

        </div>

      </div>

    </div>

  </section>
   <section class="bg-[#F5F7FB] py-24 overflow-hidden">

    <div class="max-w-[1500px] mx-auto px-6 lg:px-10">

      <!-- CTA BOX -->
      <div
        class="bg-white rounded-[30px] shadow-xl border border-[#E7EDF7] px-8 lg:px-14 py-8 flex flex-col lg:flex-row items-center justify-between gap-8"
      >

        <!-- TEXT -->
        <h3
          class="text-[30px] lg:text-[42px] leading-[42px] lg:leading-[56px] font-light text-center lg:text-left text-[#08245C]"
        >
          Need a new website?
          <span class="font-bold text-[#2F66D0]">
            Let’s get started for free
          </span>
        </h3>

        <!-- BUTTONS -->
        <div
          class="flex flex-col sm:flex-row gap-5 w-full lg:w-auto"
        >

          <button
            class="bg-[#11C786] hover:bg-[#0ea774] transition text-white font-semibold h-[58px] px-10 rounded-xl whitespace-nowrap"
          >
            Create a free account
          </button>

          <button
            class="bg-[#3367C4] hover:bg-[#2857ab] transition text-white font-semibold h-[58px] px-10 rounded-xl whitespace-nowrap"
          >
            Request a demo
          </button>

        </div>

      </div>

      <!-- HEADING -->
      <div class="text-center mt-24">

        <h2
          class="text-[38px] lg:text-[60px] leading-[50px] lg:leading-[72px] font-bold text-[#08245C]"
        >
          Adaptable templates built by
          professional web designers
        </h2>

        <p
          class="mt-8 max-w-[1100px] mx-auto text-[18px] lg:text-[24px] leading-[36px] lg:leading-[46px] text-gray-600"
        >
          We have many professional, mobile-friendly
          templates to choose from. You can easily customise
          each one to match your business using our
          easy-to-use drag-and-drop editor.
        </p>

      </div>

      <!-- SLIDER -->
      <div class="mt-20 relative">

        <Swiper
          :modules="[Navigation, Autoplay]"
          :slides-per-view="1"
          :space-between="20"
          :centered-slides="true"
          :loop="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false
          }"
          :navigation="{
            nextEl: '.template-next',
            prevEl: '.template-prev'
          }"
          :breakpoints="{
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }"
          class="template-swiper"
        >

          <!-- SLIDE -->
          <SwiperSlide
            v-for="(image, index) in templates"
            :key="index"
          >

            <div
              class="rounded-[30px] overflow-hidden transition duration-500 hover:-translate-y-3"
            >

              <img
                :src="image"
                class="w-full rounded-[30px] shadow-2xl"
                alt=""
              />

            </div>

          </SwiperSlide>

        </Swiper>

        <!-- BUTTONS -->
        <div
          class="flex justify-center items-center gap-6 mt-16"
        >

          <!-- PREV -->
          <button
            class="template-prev w-[70px] h-[70px] rounded-full bg-[#11C786] hover:bg-[#0ea774] transition flex items-center justify-center shadow-xl"
          >

            <svg
              class="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>

          </button>

          <!-- NEXT -->
          <button
            class="template-next w-[70px] h-[70px] rounded-full bg-[#11C786] hover:bg-[#0ea774] transition flex items-center justify-center shadow-xl"
          >

            <svg
              class="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>

          </button>

        </div>

      </div>

    </div>

  </section>
    <section class="bg-[#F8FAFD] py-24 overflow-hidden">

    <div class="max-w-[1400px] mx-auto px-6 lg:px-10">

      <!-- HEADING -->
      <div class="text-center">

        <div
          class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#EAF1FF] text-[#2F66D0] font-semibold text-sm"
        >
          Why Choose Pagio
        </div>

        <h2
          class="mt-6 text-[38px] lg:text-[60px] leading-[50px] lg:leading-[72px] font-bold text-[#08245C]"
        >
          Benefits of choosing
          Pagio Website Builder
        </h2>

      </div>

      <!-- BENEFITS GRID -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20"
      >

        <!-- ITEM -->
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="bg-white rounded-[24px] p-6 lg:p-8 shadow-lg border border-[#E7EDF7] hover:-translate-y-2 transition duration-500"
        >

          <div class="flex items-start gap-5">

            <!-- ICON -->
            <div
              class="min-w-[70px] min-h-[70px] rounded-full bg-[#EAFBF6] flex items-center justify-center"
            >

              <svg
                class="w-8 h-8 text-[#11C786]"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>

            </div>

            <!-- TEXT -->
            <div>

              <p
                class="text-[18px] lg:text-[22px] leading-[34px] text-[#08245C] font-medium"
              >
                {{ benefit }}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
   <!-- VIDEO SECTION -->
  <section class="py-24 overflow-hidden bg-white">

    <div class="max-w-[1400px] mx-auto px-6 lg:px-10">

      <div
        class="flex flex-col lg:flex-row items-center gap-16"
      >

        <!-- VIDEO -->
        <div class="w-full lg:w-1/2">

          <div
            class="relative rounded-[30px] overflow-hidden shadow-2xl group"
          >

            <!-- VIDEO -->
            <iframe
              class="w-full h-[260px] md:h-[420px]"
              src="https://www.youtube.com/embed/eluA2yVmwhI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>

            <!-- PLAY OVERLAY -->
            <div
              class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition pointer-events-none"
            ></div>

          </div>

        </div>

        <!-- CONTENT -->
        <div class="w-full lg:w-1/2">

          <!-- SMALL TAG -->
          <div
            class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#EAF1FF] text-[#2F66D0] font-semibold text-sm"
          >
            Easy Website Builder
          </div>

          <!-- TITLE -->
          <h2
            class="mt-6 text-[38px] lg:text-[58px] leading-[50px] lg:leading-[72px] font-bold text-[#08245C]"
          >
            The easiest way to get a website
            you are proud of
          </h2>

          <!-- DESCRIPTION -->
          <p
            class="mt-8 text-[18px] lg:text-[22px] leading-[38px] text-gray-600"
          >
            We’ve made Pagio Website Builder simple for
            everyone to understand. You can create a modern,
            professional website in just minutes using our
            easy drag-and-drop editor.

            <br /><br />

            Don’t believe us? Watch the video and see how
            quickly you can get started.
          </p>

          <!-- BUTTONS -->
          <div
            class="mt-10 flex flex-col sm:flex-row gap-5"
          >

            <!-- BUTTON -->
            <a
              href="https://pagio.co.uk/register"
              class="bg-[#11C786] hover:bg-[#0ea774] transition text-white font-semibold h-[58px] px-10 rounded-xl flex items-center justify-center"
            >
              Create a free account
            </a>

            <!-- BUTTON -->
            <a
              href="https://calendly.com/danieljamesfisher/pagio-demo"
              target="_blank"
              class="bg-[#3367C4] hover:bg-[#2857ab] transition text-white font-semibold h-[58px] px-10 rounded-xl flex items-center justify-center"
            >
              Request a demo
            </a>

          </div>

        </div>

      </div>

    </div>

  </section>
    <section class="py-24 bg-white overflow-hidden">

    <div class="max-w-[1500px] mx-auto px-6 lg:px-10">

      <!-- HEADING -->
      <div class="text-center">

        <div
          class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#EAF1FF] text-[#2F66D0] font-semibold text-sm"
        >
          Customer Reviews
        </div>

        <h2
          class="mt-6 text-[38px] lg:text-[60px] leading-[50px] lg:leading-[72px] font-bold text-[#08245C]"
        >
          Pagio Website Builder
          <br class="block lg:hidden" />
          success stories
        </h2>

        <p
          class="mt-5 text-[18px] lg:text-[22px] text-gray-600"
        >
          See what our customers say
        </p>

      </div>

      <!-- TESTIMONIAL SLIDER -->
      <div class="mt-20 relative">

        <Swiper
          :modules="[Navigation, Autoplay]"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false
          }"
          :navigation="{
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev'
          }"
          class="testimonial-swiper"
        >

          <!-- SLIDE 1 -->
          <SwiperSlide>

            <div
              class="bg-[#F8FAFD] border border-[#E7EDF7] rounded-[35px] p-6 lg:p-12 shadow-xl"
            >

              <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >

                <div>
                  <img
                    src="https://s3.eu-west-2.amazonaws.com/swiftbuilder/portal/testimonials/1522-6413378e951a6.jpeg"
                    class="w-full rounded-[25px] shadow-lg"
                    alt=""
                  />
                </div>

                <div class="text-center lg:text-left">

                  <div
                    class="text-[#11C786] text-[70px] leading-none font-bold"
                  >
                    "
                  </div>

                  <p
                    class="text-[20px] lg:text-[26px] leading-[38px] lg:leading-[46px] text-[#08245C] italic -mt-4"
                  >
                    We are so pleased with our new website.
                    Working with the team at Pagio was easy
                    and stress free.
                  </p>

                  <div class="mt-10">

                    <h4
                      class="text-[28px] font-bold text-[#08245C]"
                    >
                      Akorn Finance
                    </h4>

                    <p
                      class="mt-2 text-[18px] text-gray-500"
                    >
                      Angelo Kornecki FPFS
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </SwiperSlide>

          <!-- SLIDE 2 -->
          <SwiperSlide>

            <div
              class="bg-[#F8FAFD] border border-[#E7EDF7] rounded-[35px] p-6 lg:p-12 shadow-xl"
            >

              <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >

                <div>
                  <img
                    src="https://s3.eu-west-2.amazonaws.com/swiftbuilder/portal/testimonials/1524-64133864a9cb1.jpeg"
                    class="w-full rounded-[25px] shadow-lg"
                    alt=""
                  />
                </div>

                <div class="text-center lg:text-left">

                  <div
                    class="text-[#11C786] text-[70px] leading-none font-bold"
                  >
                    "
                  </div>

                  <p
                    class="text-[20px] lg:text-[26px] leading-[38px] lg:leading-[46px] text-[#08245C] italic -mt-4"
                  >
                    They quickly created an easy-to-use site
                    which looks professional and achieved
                    exactly what I envisioned.
                  </p>

                  <div class="mt-10">

                    <h4
                      class="text-[28px] font-bold text-[#08245C]"
                    >
                      The Eyewear Stylist
                    </h4>

                    <p
                      class="mt-2 text-[18px] text-gray-500"
                    >
                      Dan Scott
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </SwiperSlide>

        </Swiper>

        <!-- BUTTONS -->
        <div
          class="flex justify-center items-center gap-6 mt-14"
        >

          <!-- PREV -->
          <button
            class="testimonial-prev w-[70px] h-[70px] rounded-full bg-[#11C786] hover:bg-[#0ea774] transition flex items-center justify-center shadow-xl"
          >

            <svg
              class="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>

          </button>

          <!-- NEXT -->
          <button
            class="testimonial-next w-[70px] h-[70px] rounded-full bg-[#11C786] hover:bg-[#0ea774] transition flex items-center justify-center shadow-xl"
          >

            <svg
              class="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>

          </button>

        </div>

      </div>

    </div>

  </section>
   <section class="bg-[#F5F7FB] py-24 overflow-hidden">

    <div class="max-w-[1400px] mx-auto px-6 lg:px-10">

      <!-- HEADING -->
      <div class="text-center">

        <div
          class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#EAFBF6] text-[#11C786] font-semibold text-sm"
        >
          Quick Setup
        </div>

        <h2
          class="mt-6 text-[38px] lg:text-[58px] leading-[50px] lg:leading-[72px] font-bold text-[#08245C]"
        >
          How to get started for free
          in six simple steps
        </h2>

      </div>

      <!-- STEPS GRID -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20"
      >

        <!-- STEP -->
        <div
          class="bg-white rounded-[28px] p-6 shadow-xl border border-[#E7EDF7] hover:-translate-y-2 transition duration-500 flex items-start gap-5"
        >

          <!-- NUMBER -->
          <div
            class="min-w-[75px] h-[75px] rounded-full bg-[#EAFBF6] flex items-center justify-center"
          >
            <span
              class="text-[#11C786] text-[28px] font-bold"
            >
              1
            </span>
          </div>

          <!-- TEXT -->
          <p
            class="text-[18px] leading-[32px] text-gray-700 mt-2"
          >
            Sign up for a free trial or request a demo from
            one of our account managers.
          </p>

        </div>

        <!-- STEP -->
        <div
          class="bg-white rounded-[28px] p-6 shadow-xl border border-[#E7EDF7] hover:-translate-y-2 transition duration-500 flex items-start gap-5"
        >

          <div
            class="min-w-[75px] h-[75px] rounded-full bg-[#EAFBF6] flex items-center justify-center"
          >
            <span
              class="text-[#11C786] text-[28px] font-bold"
            >
              2
            </span>
          </div>

          <p
            class="text-[18px] leading-[32px] text-gray-700 mt-2"
          >
            Choose from one of our many templates to begin
            customising your website.
          </p>

        </div>

        <!-- STEP -->
        <div
          class="bg-white rounded-[28px] p-6 shadow-xl border border-[#E7EDF7] hover:-translate-y-2 transition duration-500 flex items-start gap-5"
        >

          <div
            class="min-w-[75px] h-[75px] rounded-full bg-[#EAFBF6] flex items-center justify-center"
          >
            <span
              class="text-[#11C786] text-[28px] font-bold"
            >
              3
            </span>
          </div>

          <p
            class="text-[18px] leading-[32px] text-gray-700 mt-2"
          >
            Customise your site by changing colours, fonts,
            images and text.
          </p>

        </div>

        <!-- STEP -->
        <div
          class="bg-white rounded-[28px] p-6 shadow-xl border border-[#E7EDF7] hover:-translate-y-2 transition duration-500 flex items-start gap-5"
        >

          <div
            class="min-w-[75px] h-[75px] rounded-full bg-[#EAFBF6] flex items-center justify-center"
          >
            <span
              class="text-[#11C786] text-[28px] font-bold"
            >
              4
            </span>
          </div>

          <p
            class="text-[18px] leading-[32px] text-gray-700 mt-2"
          >
            Preview your designs on desktop, tablet and
            mobile devices.
          </p>

        </div>

        <!-- STEP -->
        <div
          class="bg-white rounded-[28px] p-6 shadow-xl border border-[#E7EDF7] hover:-translate-y-2 transition duration-500 flex items-start gap-5"
        >

          <div
            class="min-w-[75px] h-[75px] rounded-full bg-[#EAFBF6] flex items-center justify-center"
          >
            <span
              class="text-[#11C786] text-[28px] font-bold"
            >
              5
            </span>
          </div>

          <p
            class="text-[18px] leading-[32px] text-gray-700 mt-2"
          >
            Add your domain and publish your website when
            you’re ready.
          </p>

        </div>

        <!-- STEP -->
        <div
          class="bg-white rounded-[28px] p-6 shadow-xl border border-[#E7EDF7] hover:-translate-y-2 transition duration-500 flex items-start gap-5"
        >

          <div
            class="min-w-[75px] h-[75px] rounded-full bg-[#EAFBF6] flex items-center justify-center"
          >
            <span
              class="text-[#11C786] text-[28px] font-bold"
            >
              6
            </span>
          </div>

          <p
            class="text-[18px] leading-[32px] text-gray-700 mt-2"
          >
            Start promoting your new website and grow your
            online presence.
          </p>

        </div>

      </div>

      <!-- CTA BOX -->
      <div
        class="mt-20 bg-white rounded-[30px] shadow-2xl border border-[#E7EDF7] px-8 lg:px-14 py-8 flex flex-col lg:flex-row items-center justify-between gap-8"
      >

        <!-- TEXT -->
        <h3
          class="text-[30px] lg:text-[42px] leading-[42px] lg:leading-[56px] font-light text-center lg:text-left text-[#08245C]"
        >
          Need a new website?
          <span class="font-bold text-[#2F66D0]">
            Let’s get started for free
          </span>
        </h3>

        <!-- BUTTONS -->
        <div
          class="flex flex-col sm:flex-row gap-5 w-full lg:w-auto"
        >

          <a
            href="https://pagio.co.uk/register"
            class="bg-[#11C786] hover:bg-[#0ea774] transition text-white font-semibold h-[58px] px-10 rounded-xl flex items-center justify-center whitespace-nowrap"
          >
            Create a free account
          </a>

          <a
            href="https://calendly.com/danieljamesfisher/pagio-demo"
            target="_blank"
            class="bg-[#3367C4] hover:bg-[#2857ab] transition text-white font-semibold h-[58px] px-10 rounded-xl flex items-center justify-center whitespace-nowrap"
          >
            Request a demo
          </a>

        </div>

      </div>

    </div>

  </section>
   <!-- DESIGN PACKAGE SECTION -->
  <section
    class="relative bg-[#2F66D0] overflow-hidden py-20 lg:py-0"
  >

    <!-- RIGHT IMAGE DESKTOP -->
    <div
      class="hidden lg:block absolute top-0 right-0 w-1/2 h-full"
    >

      <img
        src="https://static.swiftbuilder.co.uk/img/design-packages.jpg"
        class="w-full h-full object-cover"
        alt="Design Packages"
      />

      <!-- OVERLAY -->
      <div
        class="absolute inset-0 bg-black/10"
      ></div>

    </div>

    <!-- CONTENT -->
    <div
      class="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10"
    >

      <div
        class="flex flex-col lg:flex-row items-center"
      >

        <!-- LEFT CONTENT -->
        <div
          class="w-full lg:w-[42%] py-0 lg:py-24"
        >

          <!-- MOBILE IMAGE -->
          <img
            src="https://static.swiftbuilder.co.uk/img/design-packages.jpg"
            class="w-full rounded-[25px] mb-10 block lg:hidden shadow-2xl"
            alt="Design Packages"
          />

          <!-- SMALL TAG -->
          <div
            class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white font-semibold text-sm border border-white/20"
          >
            Professional Design Team
          </div>

          <!-- TITLE -->
          <h2
            class="mt-6 text-[38px] lg:text-[58px] leading-[50px] lg:leading-[72px] font-bold text-white"
          >
            Free Website
            Design Packages
          </h2>

          <!-- DESCRIPTION -->
          <p
            class="mt-8 text-[18px] lg:text-[22px] leading-[38px] text-white/90"
          >
            If you’re not confident in your design skills,
            or you simply want the easiest experience
            possible, let our expert design team build your
            website for you completely free.
          </p>

          <!-- BUTTON -->
          <div class="mt-10">

            <a
              href="https://pagio.co.uk/pricing"
              class="inline-flex items-center gap-4 bg-[#11C786] hover:bg-[#0ea774] transition text-white font-semibold px-10 h-[60px] rounded-xl shadow-xl"
            >

              <span>
                View our website design packages
              </span>

              <!-- ICON -->
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 5l7 7-7 7M5 12h14"
                />
              </svg>

            </a>

          </div>

        </div>

        <!-- EMPTY SPACE FOR DESKTOP -->
        <div class="hidden lg:block lg:w-[58%]"></div>

      </div>

    </div>

  </section>
   <section class="bg-white py-24 overflow-hidden">

    <div class="max-w-[1200px] mx-auto px-6 lg:px-10">

      <!-- HEADING -->
      <div class="text-center mb-16">

        <div
          class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#EAF1FF] text-[#2F66D0] font-semibold text-sm"
        >
          Help Center
        </div>

        <h2
          class="mt-6 text-[38px] lg:text-[58px] leading-[50px] lg:leading-[72px] font-bold text-[#08245C]"
        >
          Frequently asked questions
        </h2>

      </div>

      <!-- FAQ ITEMS -->
      <div class="space-y-5">

        <!-- FAQ -->
        <details
          class="group bg-[#F5F7FB] rounded-[28px] p-8 border border-[#E7EDF7] shadow-sm"
        >
          <summary
            class="flex items-center justify-between cursor-pointer list-none"
          >

            <h3
              class="text-[22px] lg:text-[28px] font-bold text-[#08245C]"
            >
              What is a website builder?
            </h3>

            <div
              class="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md"
            >

              <svg
                class="w-6 h-6 text-[#2F66D0] group-open:rotate-180 transition duration-300"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>

            </div>

          </summary>

          <p
            class="mt-6 text-[18px] leading-[34px] text-gray-600"
          >
            A website builder is a no-code platform that lets
            you create websites without coding knowledge.
            Simply drag and drop content exactly where you
            want it.
          </p>

        </details>

        <!-- FAQ -->
        <details
          class="group bg-[#F5F7FB] rounded-[28px] p-8 border border-[#E7EDF7] shadow-sm"
        >
          <summary
            class="flex items-center justify-between cursor-pointer list-none"
          >

            <h3
              class="text-[22px] lg:text-[28px] font-bold text-[#08245C]"
            >
              What are Pagio Website Builder's fees?
            </h3>

            <div
              class="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md"
            >

              <svg
                class="w-6 h-6 text-[#2F66D0] group-open:rotate-180 transition duration-300"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>

            </div>

          </summary>

          <p
            class="mt-6 text-[18px] leading-[34px] text-gray-600"
          >
            The monthly subscription fee is £19 + VAT, or
            you can pay yearly and get 2 months free. Pagio
            can also design your website for free.
          </p>

        </details>

        <!-- FAQ -->
        <details
          class="group bg-[#F5F7FB] rounded-[28px] p-8 border border-[#E7EDF7] shadow-sm"
        >
          <summary
            class="flex items-center justify-between cursor-pointer list-none"
          >

            <h3
              class="text-[22px] lg:text-[28px] font-bold text-[#08245C]"
            >
              Where will my site be hosted?
            </h3>

            <div
              class="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md"
            >

              <svg
                class="w-6 h-6 text-[#2F66D0] group-open:rotate-180 transition duration-300"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>

            </div>

          </summary>

          <p
            class="mt-6 text-[18px] leading-[34px] text-gray-600"
          >
            Your website will be hosted on our platform
            using enterprise-level hosting similar to
            Netflix, Airbnb and Amazon.
          </p>

        </details>

        <!-- FAQ -->
        <details
          class="group bg-[#F5F7FB] rounded-[28px] p-8 border border-[#E7EDF7] shadow-sm"
        >
          <summary
            class="flex items-center justify-between cursor-pointer list-none"
          >

            <h3
              class="text-[22px] lg:text-[28px] font-bold text-[#08245C]"
            >
              Can I use my existing domain name?
            </h3>

            <div
              class="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md"
            >

              <svg
                class="w-6 h-6 text-[#2F66D0] group-open:rotate-180 transition duration-300"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>

            </div>

          </summary>

          <p
            class="mt-6 text-[18px] leading-[34px] text-gray-600"
          >
            Yes, you can use your existing domain or buy a
            new one. Pagio can assist you through the entire
            setup process.
          </p>

        </details>

        <!-- FAQ -->
        <details
          class="group bg-[#F5F7FB] rounded-[28px] p-8 border border-[#E7EDF7] shadow-sm"
        >
          <summary
            class="flex items-center justify-between cursor-pointer list-none"
          >

            <h3
              class="text-[22px] lg:text-[28px] font-bold text-[#08245C]"
            >
              Do I need technical skills?
            </h3>

            <div
              class="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md"
            >

              <svg
                class="w-6 h-6 text-[#2F66D0] group-open:rotate-180 transition duration-300"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>

            </div>

          </summary>

          <p
            class="mt-6 text-[18px] leading-[34px] text-gray-600"
          >
            No technical knowledge is needed. The editor is
            as simple as using PowerPoint, and support is
            available whenever you need help.
          </p>

        </details>

      </div>

    </div>

  </section>
    <section class="py-16 lg:py-24 bg-white overflow-hidden">

    <div class="max-w-[1400px] mx-auto px-6 lg:px-10">

      <div
        class="bg-[#F5F7FB] border border-[#E7EDF7] rounded-[35px] px-8 lg:px-16 py-10 lg:py-14 shadow-xl"
      >

        <div
          class="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16"
        >

          <!-- IMAGE -->
          <div class="shrink-0">

            <img
              src="https://static.swiftbuilder.co.uk/img/tree.png"
              class="w-[180px] lg:w-[240px]"
              alt="Tree"
            />

          </div>

          <!-- CONTENT -->
          <div
            class="text-center lg:text-left max-w-[850px]"
          >

            <!-- SMALL TAG -->
            <div
              class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#EAFBF6] text-[#11C786] font-semibold text-sm"
            >
              Eco Friendly Initiative
            </div>

            <!-- TEXT -->
            <h2
              class="mt-6 text-[30px] lg:text-[48px] leading-[42px] lg:leading-[62px] font-bold text-[#08245C]"
            >
              We plant trees for every website launched
            </h2>

            <p
              class="mt-6 text-[18px] lg:text-[22px] leading-[36px] text-gray-600"
            >
              For every website launched on our platform,
              we plant trees and support environmental
              projects around the world to help tackle
              climate change and create a greener future.
            </p>

          </div>

        </div>

      </div>

    </div>

  </section>
  <section
    class="relative overflow-hidden py-24 lg:py-32 bg-cover bg-center bg-fixed"
    style="
      background-image: url('https://s3.eu-west-2.amazonaws.com/swiftbuilder/sites/947/hd_652e2d6f19f18.jpg');
    "
  >

    <!-- OVERLAY -->
    <div
      class="absolute inset-0 bg-[#3064B8]/90"
    ></div>

    <!-- CONTENT -->
    <div
      class="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10"
    >

      <div class="text-center">

        <!-- SMALL TAG -->
        <div
          class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white border border-white/20 font-semibold text-sm"
        >
          Start Your Journey
        </div>

        <!-- TITLE -->
        <h2
          class="mt-8 text-[40px] lg:text-[72px] leading-[52px] lg:leading-[88px] font-bold text-white"
        >
          Let’s start building your website
          <br class="hidden lg:block" />
          for free with Pagio today!
        </h2>

        <!-- DESCRIPTION -->
        <p
          class="mt-8 max-w-[900px] mx-auto text-[18px] lg:text-[24px] leading-[36px] lg:leading-[42px] text-white/90"
        >
          Launch your business online with a modern,
          professional website built for speed, performance
          and growth.
        </p>

        <!-- BUTTONS -->
        <div
          class="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5"
        >

          <!-- BUTTON -->
          <a
            href="#"
            class="bg-[#08245C] hover:bg-[#051537] transition text-white font-semibold h-[60px] px-12 rounded-xl flex items-center justify-center shadow-2xl"
          >
            Enquire now
          </a>

          <!-- BUTTON -->
          <a
            href="/register"
            class="bg-[#11C786] hover:bg-[#0ea774] transition text-white font-semibold h-[60px] px-12 rounded-xl flex items-center justify-center shadow-2xl"
          >
            Create a free account
          </a>

        </div>

      </div>

    </div>

  </section>
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
        <div>

          <h3
            class="text-white text-[24px] font-bold mb-6"
          >
            Services
          </h3>

          <div class="space-y-4">

            <a
              href="/build-your-website"
              class="block text-white/80 hover:text-white transition"
            >
              Build your own website
            </a>

            <a
              href="/free-website-design"
              class="block text-white/80 hover:text-white transition"
            >
              Free website setup
            </a>

            <a
              href="/free-website-transfer"
              class="block text-white/80 hover:text-white transition"
            >
              Free website transfer
            </a>

            <a
              href="/free-website-redesign"
              class="block text-white/80 hover:text-white transition"
            >
              Free website redesign
            </a>

          </div>

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

import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
const mobileMenu = ref(false);
const servicesOpen = ref(false);
const mobileServicesOpen = ref(false);
const templates = [
  "https://s3.eu-west-2.amazonaws.com/swiftbuilder/portal/templates/1434-619ccc9322b40.jpeg",

  "https://s3.eu-west-2.amazonaws.com/swiftbuilder/portal/templates/1435-619e6ba0d158c.jpeg",

  "https://s3.eu-west-2.amazonaws.com/swiftbuilder/portal/templates/1437-619e6bb19be0a.jpeg",

  "https://s3.eu-west-2.amazonaws.com/swiftbuilder/portal/templates/1438-619e6bbb90dd5.jpeg",

  "https://s3.eu-west-2.amazonaws.com/swiftbuilder/portal/templates/1446-619e6c1ac8ee9.jpeg",

  "https://s3.eu-west-2.amazonaws.com/swiftbuilder/portal/templates/1447-619e6c485840f.jpeg",
];

<style scoped>
.template-swiper {
  overflow: visible;
}

.template-swiper .swiper-slide-active {
  transform: scale(1.08);
  transition: 0.4s;
}

.template-swiper .swiper-slide {
  transition: 0.4s;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
const benefits = [
  "Onboarding assistance from a UK-based customer support team",

  "No upfront costs, hidden fees, extras, or charges",

  "No coding knowledge needed, simply edit your website using a drag and drop editor",

  "Broad selection of customisable templates to suit all businesses",

  "All websites are mobile-friendly",

  "Free SSL certification to ensure the best website security",

  "Integrated SEO tools to make sure your website is visible on search engines",

  "Fast, safe and reliable servers used by Netflix & NASA",
];

<script setup>
</script>
