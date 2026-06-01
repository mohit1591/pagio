<script setup lang="ts">
import { ref } from "vue";
import { Link } from "@inertiajs/vue3";

/* HEADER */
const servicesOpen = ref(false);
const mobileMenu = ref(false);
const mobileServicesOpen = ref(false);

/* FAQ */
const activeFaq = ref<number | null>(null);

const toggleFaq = (index: number) => {
    activeFaq.value =
        activeFaq.value === index ? null : index;
};

/* HERO POINTS */
const points = [
    "Lack the time or don't want to build a website yourself?",
    "Feel tired of confusing website builders and want an easy-to-use platform?",
    "Don't want to pay a web designer to create a website for you?",
    "Want a platform where you can benefit from UK-based customer support?",
];

/* HERO CONTENT */
const heroContent = {
    title: "Free Website Design, Only Pay for Hosting",

    description:
        "We will design your new website for free. Simply send us your website content, site back and we will do the rest. Your website will be done in less than 2 weeks. Simply pay for hosting.",

    image:
        "https://static.swiftbuilder.co.uk/img/website-setup-header.webp",
};

/* STEPS */
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

/* SLIDER IMAGES */
const images = [
    "https://s3.eu-west-2.amazonaws.com/swiftbuilder/portal/templates/1515-63bc301360afe.jpeg",

    "https://s3.eu-west-2.amazonaws.com/swiftbuilder/portal/templates/1516-63bc30379eaa5.jpeg",

    "https://s3.eu-west-2.amazonaws.com/swiftbuilder/portal/templates/1517-63bc304a192cd.jpeg",

    "https://s3.eu-west-2.amazonaws.com/swiftbuilder/portal/templates/1518-63bc305975d9c.jpeg",

    "https://s3.eu-west-2.amazonaws.com/swiftbuilder/portal/templates/1536-653f9c884bd18.jpeg",

    "https://s3.eu-west-2.amazonaws.com/swiftbuilder/portal/templates/1537-664b4c0021116.jpeg",
];

/* FAQ DATA */
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
        question: "Can I edit my website?",

        answer:
            "Yes, our website builder gives you the option to easily edit and update your website.",
    },

    {
        question: "Where will my site be hosted?",

        answer:
            "Your website will be hosted on our platform. We use the same hosting as Netflix, AirBNB and Amazon.",
    },

    {
        question: "How long will it take to set up my website?",

        answer:
            "Your website will be set up in as little as 2 weeks.",
    },
];
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>

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
 <div class="bg-[#3064b8] header-spacing">
    
    <div class="container mx-auto pt-10 md:py-16">

      <div
        class="flex flex-col md:flex-row justify-between items-center px-5 md:px-0 pb-10 pt-5 md:pb-0 gap-10"
      >

        <!-- LEFT CONTENT -->
        <div class="w-full md:w-1/2">

          <!-- HEADING -->
          <h1
            class="text-2xl md:text-4xl relative z-[1] font-bold text-white leading-tight"
          >
            Transfer to the UK's easiest website builder for free
          </h1>

          <!-- DESCRIPTION -->
          <p
            class="mx-auto table mt-5 relative z-[1] text-white text-base md:text-lg leading-8"
          >
            We will transfer your existing website from another platform to
            Pagio for free. We've transferred websites from a range of platforms
            including WordPress, Wix, Squarespace & GoDaddy.
          </p>

          <!-- BUTTONS -->
          <div class="mt-3 block relative">

            <!-- ENQUIRE -->
            <a
              href=""
              class="bg-[#11C786] hover:bg-[#0ea56f] transition-all duration-300 text-white rounded-xl w-full md:w-[230px] text-center mr-3 mt-3 py-4 inline-block font-semibold"
              style="white-space: nowrap"
            >
              Enquire now
            </a>

            <!-- REGISTER -->
            <a
              href="https://pagio.co.uk/register"
              class="bg-white hover:bg-gray-100 transition-all duration-300 text-[#08245C] rounded-xl inline-block mt-3 w-full md:w-[230px] py-4 font-semibold text-center"
            >
              Get started for free
            </a>

          </div>

        </div>

        <!-- RIGHT IMAGE -->
        <div class="w-full md:w-auto flex justify-center">

          <img
            class="hidden md:block min-w-[575px]"
            style="image-rendering: -webkit-optimize-contrast;"
            src="https://static.swiftbuilder.co.uk/img/website-transfer-header.webp"
            alt="Website Transfer"
          />

        </div>

      </div>

    </div>

  </div>

    <!-- FAQ -->
    <section class="max-w-[1400px] mx-auto px-6 pb-10 md:pb-20">

    <!-- HEADING -->
    <h2
      class="pt-10 md:pt-16 pb-8 text-3xl md:text-4xl font-bold text-[#08245C]"
    >
      Do you:
    </h2>

    <!-- POINTS -->
    <div
      v-for="(point, index) in points"
      :key="index"
      class="flex items-start gap-5 py-4"
    >

      <!-- ICON -->
      <div
        class="min-w-[40px] h-[40px] bg-[#11C786] rounded-full flex items-center justify-center"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>

      </div>

      <!-- TEXT -->
      <p
        class="text-lg md:text-xl font-semibold text-[#08245C] leading-relaxed"
      >
        {{ point }}
      </p>

    </div>

    <!-- DESCRIPTION -->
    <p
      class="py-6 text-lg text-gray-600 leading-8 max-w-[1000px]"
    >
      If you answered yes to any of the above, then Pagio can help.
      Let us set up your website for free.
    </p>

    <!-- BUTTON -->
    <a
      href="/register"
      class="inline-flex items-center justify-center bg-[#11C786] hover:bg-[#0ea56f] transition-all duration-300 text-white font-semibold px-10 py-4 rounded-xl"
    >
      Sign Up
    </a>

  </section>
    <div class="bg-[#f5f7fb] pb-[30px]">
    <div class="max-w-[1400px] mx-auto pb-10 md:pb-20">

      <!-- Heading -->
      <h2
        class="pt-10 md:pt-20 pb-10 text-2xl md:text-3xl text-center"
      >
        How it works
      </h2>

      <!-- Top Text -->
      <p class="mx-auto table mb-5 relative z-[1] text-center">
        We like to keep website design simple. Here's how our free website
        design service works:
      </p>

      <!-- Step 1 -->
      <div
        class="bg-white mb-7 p-6 rounded-2xl flex justify-start items-center shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
      >
        <div
          class="bg-[#edf4ff] rounded-full flex justify-center items-center mr-5 min-w-[56px] h-[56px]"
        >
          <div
            class="w-14 h-14 flex items-center justify-center text-center text-[#246bff] font-bold text-xl"
          >
            1
          </div>
        </div>

        <div class="self-center text-2xl font-semibold">
          We start with a free video call to understand your business and what
          you need to ensure we are a good fit.
        </div>
      </div>

      <!-- Step 2 -->
      <div
        class="bg-white mb-7 p-6 rounded-2xl flex justify-start items-center shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
      >
        <div
          class="bg-[#edf4ff] rounded-full flex justify-center items-center mr-5 min-w-[56px] h-[56px]"
        >
          <div
            class="w-14 h-14 flex items-center justify-center text-center text-[#246bff] font-bold text-xl"
          >
            2
          </div>
        </div>

        <div class="self-center text-2xl font-semibold">
          Once you are happy to go ahead, you send us your logo, images, and
          text (up to 5 pages), along with any website styles you like
        </div>
      </div>

      <!-- Step 3 -->
      <div
        class="bg-white mb-7 p-6 rounded-2xl flex justify-start items-center shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
      >
        <div
          class="bg-[#edf4ff] rounded-full flex justify-center items-center mr-5 min-w-[56px] h-[56px]"
        >
          <div
            class="w-14 h-14 flex items-center justify-center text-center text-[#246bff] font-bold text-xl"
          >
            3
          </div>
        </div>

        <div class="self-center text-2xl font-semibold">
          Choose your subscription plan-either monthly or yearly.
        </div>
      </div>

      <!-- Step 4 -->
      <div
        class="bg-white mb-7 p-6 rounded-2xl flex justify-start items-center shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
      >
        <div
          class="bg-[#edf4ff] rounded-full flex justify-center items-center mr-5 min-w-[56px] h-[56px]"
        >
          <div
            class="w-14 h-14 flex items-center justify-center text-center text-[#246bff] font-bold text-xl"
          >
            4
          </div>
        </div>

        <div class="self-center text-2xl font-semibold">
          We design your website for free, and it's ready in less than two
          weeks!
        </div>
      </div>

      <!-- Step 5 -->
      <div
        class="bg-white mb-7 p-6 rounded-2xl flex justify-start items-center shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
      >
        <div
          class="bg-[#edf4ff] rounded-full flex justify-center items-center mr-5 min-w-[56px] h-[56px]"
        >
          <div
            class="w-14 h-14 flex items-center justify-center text-center text-[#246bff] font-bold text-xl"
          >
            5
          </div>
        </div>

        <div class="self-center text-2xl font-semibold">
          You review your site, and once you're happy, we help you publish it.
        </div>
      </div>

      <!-- Bottom Text -->
      <p class="mx-auto table mb-5 relative z-[1] text-center">
        It's a <strong>completely free design service</strong> - you only pay
        for hosting, with <strong>no long-term contracts.</strong> Just
        <strong>pay as you go.</strong>
      </p>

      <p class="mx-auto table mb-5 relative z-[1] text-center">
        If you need a professional website without the hassle,
        <strong>Pagio has you covered.</strong> Get started today!
      </p>

      <!-- Buttons -->
      <div class="lg:w-auto md:gap-2 md:mx-auto block md:table mt-10">

        <a
          href="https://pagio.co.uk/register"
          class="bg-black hover:bg-[#111827] transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold table md:flex w-full text-center md:w-auto justify-center lg:inline-block mr-0 lg:mr-3 my-2 lg:my-0"
        >
          Create a free account
        </a>

        <a
          href="https://calendly.com/danieljamesfisher/pagio-demo"
          target="_blank"
          class="bg-[#246bff] hover:bg-[#1657e6] transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold flex w-full text-center justify-center lg:w-auto lg:inline-block mt-2 lg:my-0"
        >
          Request a demo
        </a>

      </div>
    </div>
  </div>

    <div class="bg-[#3064b8]">
    <div class="container mx-auto pb-4 md:pb-20">

      <h2
        class="text-center text-2xl md:text-4xl pt-8 md:pt-28 relative z-[1] font-bold text-white"
      >
        How much is it?
      </h2>

      <p
        class="text-center md:w-10/12 mx-auto table pb-5 md:pb-20 mt-10 relative z-[1] text-white"
      >
        Your website will be set up for free, simply set up your subscription
        plan for us to get started, all we need is your content and we will do
        the rest for you.
      </p>

      <!-- Pricing Card -->
      <div
        class="rounded-2xl bg-white p-8 md:w-10/12 mx-auto table shadow-2xl relative z-[2] mb-[-196px]"
      >

        <!-- Plans -->
        <div class="md:flex justify-center items-center md:pt-5">

          <!-- Monthly -->
          <div class="md:flex justify-center md:justify-end items-center text-lg">
            <div
              class="rounded-2xl bg-[#f5f5f5] px-7 py-4 md:flex justify-center items-center text-center"
            >
              <div class="font-bold text-4xl md:mr-2">£19</div>
              <div>+vat per month</div>
            </div>
          </div>

          <!-- OR -->
          <div
            class="flex justify-center items-center text-lg my-3 md:my-0 min-w-[100px]"
          >
            or
          </div>

          <!-- Yearly -->
          <div class="md:flex justify-center items-center text-lg">
            <div
              class="rounded-2xl bg-[#f5f5f5] px-7 py-4 md:flex justify-center items-center text-center"
            >
              <div class="font-bold text-4xl md:mr-2">£190</div>

              <div>+vat per year</div>

              <div
                class="bg-black text-white rounded-[10px] py-[7px] px-5 mt-3 md:mt-0 md:ml-8"
              >
                save £38
              </div>
            </div>
          </div>
        </div>

        <!-- Included -->
        <div class="text-2xl font-bold mt-7 mx-4">
          What's included?
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5 mx-4">

          <div class="flex justify-start items-center text-lg">
            <ion-icon
              name="checkmark-outline"
              class="text-[#3064b8] w-5 h-5 p-1 mr-4"
            ></ion-icon>
            UK based support
          </div>

          <div class="flex justify-start items-center text-lg">
            <ion-icon
              name="checkmark-outline"
              class="text-[#3064b8] w-5 h-5 p-1 mr-4"
            ></ion-icon>
            Fast & secure hosting
          </div>

          <div class="flex justify-start items-center text-lg">
            <ion-icon
              name="checkmark-outline"
              class="text-[#3064b8] w-5 h-5 p-1 mr-4"
            ></ion-icon>
            Built-in blogging tools
          </div>

          <div class="flex justify-start items-center text-lg">
            <ion-icon
              name="checkmark-outline"
              class="text-[#3064b8] w-5 h-5 p-1 mr-4"
            ></ion-icon>
            Free website templates
          </div>

          <div class="flex justify-start items-center text-lg">
            <ion-icon
              name="checkmark-outline"
              class="text-[#3064b8] w-5 h-5 p-1 mr-4"
            ></ion-icon>
            Free SSL certificate
          </div>

          <div class="flex justify-start items-center text-lg">
            <ion-icon
              name="checkmark-outline"
              class="text-[#3064b8] w-5 h-5 p-1 mr-4"
            ></ion-icon>
            Built-in SEO tools
          </div>
        </div>

        <div class="mt-10 text-center text-lg">
          No contract and you can cancel at any time.
        </div>

      </div>
    </div>
  </div>

  <!-- Reasons Section -->
  <div class="bg-[#f5f7fb] pt-20 md:pt-20 pb-10">

    <div class="container mx-auto pb-2 md:pb-20">

      <h2
        class="pt-40 md:pb-8 md:pt-22 text-2xl md:text-3xl text-center"
      >
        Reasons to choose Pagio
      </h2>

      <!-- Row 1 -->
      <div class="md:flex pt-3 md:pt-10">

        <!-- Card -->
        <div
          class="md:w-1/3 p-10 my-5 md:my-0 md:m-6 bg-white rounded-2xl"
        >
          <div class="text-5xl text-[#3064b8]">
            <ion-icon name="chatbubbles-outline"></ion-icon>
          </div>

          <h3 class="my-3 text-xl">
            A UK-based support team
          </h3>

          <p class="text-[15px] leading-7">
            You can call, email or video chat with real people in real-time. No
            need to wait days for a response from a support ticket.
          </p>
        </div>

        <!-- Card -->
        <div
          class="md:w-1/3 p-10 my-5 md:my-0 md:m-6 bg-white rounded-2xl"
        >
          <div class="text-5xl text-[#3064b8]">
            <ion-icon name="pricetag-outline"></ion-icon>
          </div>

          <h3 class="my-3 text-xl">
            No hidden cost
          </h3>

          <p class="text-[15px] leading-7">
            All current and future features are included in your subscription,
            such as blogs and SEO tools.
          </p>
        </div>

        <!-- Card -->
        <div
          class="md:w-1/3 p-10 my-5 md:my-0 md:m-6 bg-white rounded-2xl"
        >
          <div class="text-5xl text-[#3064b8]">
            <ion-icon name="desktop-outline"></ion-icon>
          </div>

          <h3 class="my-3 text-xl">
            Easy-to-use platform
          </h3>

          <p class="text-[15px] leading-7">
            Easily edit and manage your website using our drag-and-drop editor.
            Everything you need is in one place - no coding skills are needed.
          </p>
        </div>
      </div>

      <!-- Row 2 -->
      <div class="md:flex md:pt-10">

        <!-- Card -->
        <div
          class="md:w-1/3 p-10 my-5 md:my-0 md:m-6 bg-white rounded-2xl"
        >
          <div class="text-5xl text-[#3064b8]">
            <ion-icon name="shield-checkmark-outline"></ion-icon>
          </div>

          <h3 class="my-3 text-xl">
            Fast and secure hosting
          </h3>

          <p class="text-[15px] leading-7">
            We use Amazon Web Services to host your website, and all our
            customers receive a free SSL certificate so your website will be
            quick and secure.
          </p>
        </div>

        <!-- Card -->
        <div
          class="md:w-1/3 p-10 my-5 md:my-0 md:m-6 bg-white rounded-2xl"
        >
          <div class="text-5xl text-[#3064b8]">
            <ion-icon name="star-outline"></ion-icon>
          </div>

          <h3 class="my-3 text-xl">
            Tried and trusted
          </h3>

          <p class="text-[15px] leading-7">
            We have helped small business throughout the UK get online and are
            rated as 'Excellent' on Trustpilot.
          </p>
        </div>

        <!-- Card -->
        <div
          class="md:w-1/3 p-10 my-5 md:my-0 md:m-6 bg-white rounded-2xl"
        >
          <div class="text-5xl text-[#3064b8]">
            <ion-icon name="leaf-outline"></ion-icon>
          </div>

          <h3 class="my-3 text-xl">
            We're ethical
          </h3>

          <p class="text-[15px] leading-7">
            For every website launched on our platform, we plant trees and
            support projects to help tackle climate change.
          </p>
        </div>
      </div>
    </div>

    <!-- Buttons -->
    <div
      class="lg:w-auto md:gap-2 md:mx-auto block md:table px-5 md:p-0"
    >

      <a
        href="https://pagio.co.uk/register"
        class="bg-black hover:bg-[#111827] transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold table md:flex w-full text-center md:w-auto justify-center lg:inline-block mr-0 lg:mr-3 my-2 lg:my-0"
      >
        Sign up
      </a>

      <a
        href=""
        class="bg-[#3064b8] hover:bg-[#24539d] transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold table md:flex w-full text-center justify-center lg:w-auto lg:inline-block mt-2 lg:my-0"
      >
        Enquire
      </a>

    </div>
  </div>
   <div class="bg-[#f5f7fb] pt-2 pb-5 md:pb-20 overflow-hidden">
    
    <div class="container mx-auto">
      <div class="md:my-10">
        <h2
          class="text-center text-3xl md:text-3xl font-bold pb-10 md:pb-0 pt-10 md:pt-20"
        >
          These websites have been set up for free on pagio
        </h2>
      </div>
    </div>

    <!-- Slider -->
    <div class="relative">

      <Swiper
        :modules="[Navigation, Autoplay]"
        :slides-per-view="1.2"
        :centeredSlides="true"
        :space-between="10"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        :navigation="{
          nextEl: '.custom-next',
          prevEl: '.custom-prev'
        }"
        :breakpoints="{
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }"
        class="templates-slider md:pb-10"
      >
        <SwiperSlide
          v-for="(image, index) in images"
          :key="index"
        >
          <div class="p-1 md:p-2">
            <img
              :src="image"
              class="rounded-2xl w-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- Arrows -->
      <div
        class="-mt-10 md:-mt-5 flex justify-center items-center relative z-10"
      >

        <button
          class="custom-prev text-3xl md:text-5xl mr-5 text-[#3064b8]"
        >
          <ion-icon
            name="chevron-back-outline"
            class="w-7 h-7 p-2"
          ></ion-icon>
        </button>

        <button
          class="custom-next text-3xl md:text-5xl ml-5 text-[#3064b8]"
        >
          <ion-icon
            name="chevron-forward-outline"
            class="w-7 h-7 p-2"
          ></ion-icon>
        </button>

      </div>
    </div>

    <!-- FAQ -->
    <div class="container mx-auto md:py-20 relative">

      <div class="relative z-10">

        <h2
          class="mb-10 mt-10 md:mt-0 text-2xl md:text-3xl text-center"
        >
          Frequently asked questions
        </h2>

        <!-- FAQ ITEM -->
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="mx-auto bg-[#f2f5fb94] rounded-2xl my-4 p-8 cursor-pointer"
          @click="toggleFaq(index)"
        >

          <div class="flex justify-between md:items-center">

            <div>
              <b class="text-2xl">
                {{ faq.question }}
              </b>
            </div>

            <div class="ml-4 text-[#3064b8]">
              <ion-icon
                :name="
                  activeFaq === index
                    ? 'chevron-up-outline'
                    : 'chevron-down-outline'
                "
                class="w-5 h-5"
              ></ion-icon>
            </div>

          </div>

          <!-- Answer -->
          <transition name="fade">
            <div v-if="activeFaq === index">
              <p class="mt-4 text-lg">
                {{ faq.answer }}
              </p>
            </div>
          </transition>

        </div>

      </div>
    </div>
  </div>
    

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


