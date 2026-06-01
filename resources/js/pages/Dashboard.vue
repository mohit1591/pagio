<script setup>
import { Link } from "@inertiajs/vue3"

defineProps({
    sites: Array
})
const createWebsite = () => {

    window.location.href = '/create-site'

}
</script>

<template>

  <!-- PAGE -->
  <div class="min-h-screen bg-[#F3F4F8] overflow-hidden">

    <!-- TOP NAVBAR -->
    <header class="h-[72px] bg-[#102766] px-6 flex items-center">

      <div class="w-full flex items-center justify-between">

        <!-- LEFT -->
        <div class="flex items-center gap-10">

          <!-- HOME -->
          <button class="text-white hover:opacity-80 transition">

            <svg
              class="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3z"
              />
            </svg>

          </button>

        </div>

        <!-- MENU -->
        <nav class="hidden lg:flex items-center gap-10">

          <a
            href="#"
            class="text-white font-semibold text-[18px]"
          >
            My sites
          </a>

         <Link
  href="/account-settings"
  class="text-white/60 hover:text-white transition text-[18px]"
>
  Account Settings
</Link>

          <a
            href="#"
            class="text-white/60 hover:text-white transition text-[18px]"
          >
            Affiliates & Commissions
          </a>

          <a
            href="#"
            class="text-white/60 hover:text-white transition text-[18px]"
          >
            App Preferences
          </a>

          <a
            href="#"
            class="text-white/60 hover:text-white transition text-[18px]"
          >
            Admin panel
          </a>

        </nav>

        <!-- RIGHT -->
        <div class="flex items-center gap-5">

          <!-- USER -->
          <button class="text-white/70 hover:text-white transition">

            <svg
              class="w-10 h-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"
              />
            </svg>

          </button>

          <!-- LOGOUT -->
          <Link
            href="/logout"
            method="post"
            as="button"
            class="text-white/70 hover:text-white transition"
          >

            <svg
              class="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M16 17v-3H9v-4h7V7l5 5-5 5zM4 5h8V3H4a2 2 0 00-2 2v14a2 2 0 002 2h8v-2H4V5z"
              />
            </svg>

          </Link>

        </div>

      </div>

    </header>

    <!-- CONTENT -->
    <main class="max-w-[1250px] mx-auto px-6 py-14">

      <!-- TOP -->
      <div
        class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
      >

        <!-- TITLE -->
        <h1 class="text-[56px] font-light text-[#6B7280]">
          My sites
        </h1>

        <!-- CREATE BUTTON -->
<button
  @click="createWebsite"
  class="bg-[#2CC84D] hover:bg-[#23b243] transition text-white px-10 h-[60px] rounded-md text-[22px] font-medium flex items-center"
>
  Create new website
</button>

      </div>

      <!-- SITE GRID -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-14"
      >

        <!-- CARD -->
        <div
          v-for="site in sites"
          :key="site.id"
          class="bg-white rounded-md overflow-hidden shadow-sm border border-gray-200"
        >

          <!-- HEADER -->
          <div
            class="bg-[#102766] h-[52px] px-5 flex items-center justify-between"
          >

            <h3 class="text-white text-[22px] font-semibold">
              Site status:
            </h3>

            <span
              class="bg-[#FF4D73] text-white px-4 py-1 rounded-md text-[15px] font-semibold"
            >
              {{ site.status }}
            </span>

          </div>

          <!-- BODY -->
          <div class="p-5">

            <!-- IMAGE -->
            <img
              :src="site.image"
              class="w-full h-[250px] object-cover border border-gray-200"
              alt=""
            />

            <!-- NAME -->
            <h2
              class="text-center text-[34px] font-bold text-[#102766] mt-7"
            >
              {{ site.name }}
            </h2>

            <!-- ACTIONS -->
            <div class="grid grid-cols-2 gap-5 mt-8">

              <!-- EDIT -->
              <Link
                :href="`/editor/${site.id}`"
                class="bg-[#72D48B] hover:bg-[#5fc178] transition h-[58px] rounded-md text-white text-[22px] font-semibold flex items-center justify-center gap-3"
              >

                Edit site

                <svg
                  class="w-5 h-5"
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

              </Link>

              <!-- SUBSCRIPTION -->
              <button
                class="bg-[#8EA8D9] hover:bg-[#7995ca] transition h-[58px] rounded-md text-white text-[18px] font-semibold"
              >
                Set Up Subscription
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>

  </div>

</template>