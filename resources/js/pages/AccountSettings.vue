<script setup>
import { ref } from "vue"
import { Link, useForm } from "@inertiajs/vue3"

defineOptions({ layout: null })

const props = defineProps({
  user: Object
})

const activeTab = ref('account-details')

const tabs = [
  { id: 'account-details', label: 'Account details' },
  { id: 'change-password', label: 'Change password' },
  { id: 'change-email', label: 'Change email' },
  { id: 'invoices', label: 'Invoices' },
  { id: 'bank-details', label: 'Bank details' },
]

const form = useForm({
  firstName: props.user?.name?.split(' ')[0] ?? '',
  lastName: props.user?.name?.split(' ').slice(1).join(' ') ?? '',
  email: props.user?.email ?? '',
  phone: props.user?.phone ?? '',
  isRegisteredBusiness: props.user?.is_registered_business ? 'yes' : 'no',
})

const passwordForm = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
})

const emailForm = ref({
  newEmail: '',
  confirmEmail: '',
  password: '',
})

const saveChanges = () => {
  form.post('/account-settings/update')
}
</script>

<template>
  <!-- PAGE -->
  <div class="min-h-screen bg-[#F3F4F8] overflow-hidden">

    <!-- TOP NAVBAR -->
    <header class="h-[72px] bg-[#102766] px-6 flex items-center">
      <div class="w-full flex items-center justify-between">

        <!-- LEFT: HOME -->
        <div class="flex items-center gap-10">
          <button class="text-white hover:opacity-80 transition">
            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3z" />
            </svg>
          </button>
        </div>

        <!-- MENU -->
        <nav class="hidden lg:flex items-center gap-10">
          <Link href="/sites" class="text-white/60 hover:text-white transition text-[18px]">My sites</Link>
          <a href="#" class="text-white font-semibold text-[18px]">Account Settings</a>
          <a href="#" class="text-white/60 hover:text-white transition text-[18px]">Affiliates &amp; Commissions</a>
          <a href="#" class="text-white/60 hover:text-white transition text-[18px]">App Preferences</a>
          <a href="#" class="text-white/60 hover:text-white transition text-[18px]">Admin panel</a>
        </nav>

        <!-- RIGHT -->
        <div class="flex items-center gap-5">
          <button class="text-white/70 hover:text-white transition">
            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
            </svg>
          </button>
          <Link href="/logout" method="post" as="button" class="text-white/70 hover:text-white transition">
            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 17v-3H9v-4h7V7l5 5-5 5zM4 5h8V3H4a2 2 0 00-2 2v14a2 2 0 002 2h8v-2H4V5z" />
            </svg>
          </Link>
        </div>

      </div>
    </header>

    <!-- BREADCRUMB -->
    <div class="px-6 py-3 bg-white border-b border-gray-200">
      <div class="max-w-[1250px] mx-auto flex items-center gap-2 text-[14px] text-gray-500">
        <Link href="/sites" class="hover:text-[#102766] transition">My sites</Link>
        <span>/</span>
        <span class="text-gray-700">Account settings</span>
      </div>
    </div>

    <!-- CONTENT -->
    <main class="max-w-[1250px] mx-auto px-6 py-10 flex gap-8">

      <!-- SIDEBAR -->
      <aside class="w-[280px] flex-shrink-0">
        <div class="bg-white rounded-md overflow-hidden shadow-sm border border-gray-200">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            class="w-full flex items-center gap-3 px-5 py-4 text-left text-[16px] font-medium border-b border-gray-100 last:border-0 transition"
            :class="activeTab === tab.id
              ? 'bg-[#2CC84D] text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'"
          >
            <!-- circle question icon -->
            <svg
              class="w-5 h-5 flex-shrink-0"
              :class="activeTab === tab.id ? 'text-white' : 'text-gray-400'"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
              <circle cx="12" cy="17" r=".5" fill="currentColor" />
            </svg>
            {{ tab.label }}
          </button>
        </div>
      </aside>

      <!-- MAIN PANEL -->
      <div class="flex-1">

        <!-- ACCOUNT DETAILS -->
        <div v-if="activeTab === 'account-details'">
          <h1 class="text-[42px] font-light text-[#9CA3AF] mb-8">Account details</h1>

          <div class="bg-white rounded-md border border-gray-200 shadow-sm p-8">

            <!-- First + Last Name -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-[15px] text-gray-600 mb-2">First Name</label>
                <input
                  v-model="form.firstName"
                  type="text"
                  class="w-full border border-gray-300 rounded-md h-[48px] px-4 text-[15px] focus:outline-none focus:border-[#102766]"
                />
              </div>
              <div>
                <label class="block text-[15px] text-gray-600 mb-2">Last Name</label>
                <input
                  v-model="form.lastName"
                  type="text"
                  class="w-full border border-gray-300 rounded-md h-[48px] px-4 text-[15px] focus:outline-none focus:border-[#102766]"
                />
              </div>
            </div>

            <!-- Email -->
            <div class="mb-2">
              <label class="block text-[15px] text-gray-600 mb-2">Email</label>
              <input
                :value="form.email"
                type="email"
                readonly
                class="w-full border border-gray-200 bg-gray-100 rounded-md h-[48px] px-4 text-[15px] text-gray-500 cursor-not-allowed"
              />
            </div>
            <div class="mb-6">
              <button
                @click="activeTab = 'change-email'"
                class="text-[#3B82F6] text-[14px] hover:underline"
              >
                Update Email
              </button>
            </div>

            <!-- Phone -->
            <div class="mb-8">
              <label class="block text-[15px] text-gray-600 mb-2">Phone</label>
              <input
                v-model="form.phone"
                type="tel"
                class="w-full border border-gray-300 rounded-md h-[48px] px-4 text-[15px] focus:outline-none focus:border-[#102766]"
              />
            </div>

            <!-- Registered Business -->
            <div class="mb-8">
              <p class="text-[15px] text-gray-700 mb-3">Are you a registered business ?</p>
              <div class="flex items-center gap-8">
                <label class="flex items-center gap-2 cursor-pointer text-[15px] text-gray-700">
                  <input type="radio" v-model="form.isRegisteredBusiness" value="yes" class="w-4 h-4 accent-[#102766]" />
                  Yes
                </label>
                <label class="flex items-center gap-2 cursor-pointer text-[15px] text-gray-700">
                  <input type="radio" v-model="form.isRegisteredBusiness" value="no" class="w-4 h-4 accent-[#102766]" />
                  No
                </label>
              </div>
              <p class="text-[13px] text-gray-400 mt-2">If so we can add your company details to the invoices.</p>
            </div>

            <!-- Save Button -->
            <button
              @click="saveChanges"
              class="w-full bg-[#2CC84D] hover:bg-[#23b243] transition text-white h-[56px] rounded-md text-[18px] font-semibold flex items-center justify-center gap-3"
            >
              Save changes
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

          </div>
        </div>

        <!-- CHANGE PASSWORD -->
        <div v-if="activeTab === 'change-password'">
          <h1 class="text-[42px] font-light text-[#9CA3AF] mb-8">Change password</h1>

          <div class="bg-white rounded-md border border-gray-200 shadow-sm p-8">
            <div class="mb-6">
              <label class="block text-[15px] text-gray-600 mb-2">Current Password</label>
              <input v-model="passwordForm.currentPassword" type="password" class="w-full border border-gray-300 rounded-md h-[48px] px-4 text-[15px] focus:outline-none focus:border-[#102766]" />
            </div>
            <div class="mb-6">
              <label class="block text-[15px] text-gray-600 mb-2">New Password</label>
              <input v-model="passwordForm.newPassword" type="password" class="w-full border border-gray-300 rounded-md h-[48px] px-4 text-[15px] focus:outline-none focus:border-[#102766]" />
            </div>
            <div class="mb-8">
              <label class="block text-[15px] text-gray-600 mb-2">Confirm New Password</label>
              <input v-model="passwordForm.confirmPassword" type="password" class="w-full border border-gray-300 rounded-md h-[48px] px-4 text-[15px] focus:outline-none focus:border-[#102766]" />
            </div>
            <button @click="saveChanges" class="w-full bg-[#2CC84D] hover:bg-[#23b243] transition text-white h-[56px] rounded-md text-[18px] font-semibold flex items-center justify-center gap-3">
              Update Password
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        <!-- CHANGE EMAIL -->
        <div v-if="activeTab === 'change-email'">
          <h1 class="text-[42px] font-light text-[#9CA3AF] mb-8">Change email</h1>

          <div class="bg-white rounded-md border border-gray-200 shadow-sm p-8">
            <div class="mb-6">
              <label class="block text-[15px] text-gray-600 mb-2">New Email</label>
              <input v-model="emailForm.newEmail" type="email" class="w-full border border-gray-300 rounded-md h-[48px] px-4 text-[15px] focus:outline-none focus:border-[#102766]" />
            </div>
            <div class="mb-6">
              <label class="block text-[15px] text-gray-600 mb-2">Confirm New Email</label>
              <input v-model="emailForm.confirmEmail" type="email" class="w-full border border-gray-300 rounded-md h-[48px] px-4 text-[15px] focus:outline-none focus:border-[#102766]" />
            </div>
            <div class="mb-8">
              <label class="block text-[15px] text-gray-600 mb-2">Current Password</label>
              <input v-model="emailForm.password" type="password" class="w-full border border-gray-300 rounded-md h-[48px] px-4 text-[15px] focus:outline-none focus:border-[#102766]" />
            </div>
            <button @click="saveChanges" class="w-full bg-[#2CC84D] hover:bg-[#23b243] transition text-white h-[56px] rounded-md text-[18px] font-semibold flex items-center justify-center gap-3">
              Update Email
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        <!-- INVOICES -->
        <div v-if="activeTab === 'invoices'">
          <h1 class="text-[42px] font-light text-[#9CA3AF] mb-8">Invoices</h1>
          <div class="bg-white rounded-md border border-gray-200 shadow-sm p-8">
            <p class="text-gray-500 text-[16px]">No invoices found.</p>
          </div>
        </div>

        <!-- BANK DETAILS -->
        <div v-if="activeTab === 'bank-details'">
          <h1 class="text-[42px] font-light text-[#9CA3AF] mb-8">Bank details</h1>
          <div class="bg-white rounded-md border border-gray-200 shadow-sm p-8">
            <p class="text-gray-500 text-[16px] mb-6">Add your bank details for payouts.</p>
            <div class="mb-6">
              <label class="block text-[15px] text-gray-600 mb-2">Account Holder Name</label>
              <input type="text" class="w-full border border-gray-300 rounded-md h-[48px] px-4 text-[15px] focus:outline-none focus:border-[#102766]" />
            </div>
            <div class="mb-6">
              <label class="block text-[15px] text-gray-600 mb-2">IBAN / Account Number</label>
              <input type="text" class="w-full border border-gray-300 rounded-md h-[48px] px-4 text-[15px] focus:outline-none focus:border-[#102766]" />
            </div>
            <div class="mb-8">
              <label class="block text-[15px] text-gray-600 mb-2">Bank Name</label>
              <input type="text" class="w-full border border-gray-300 rounded-md h-[48px] px-4 text-[15px] focus:outline-none focus:border-[#102766]" />
            </div>
            <button @click="saveChanges" class="w-full bg-[#2CC84D] hover:bg-[#23b243] transition text-white h-[56px] rounded-md text-[18px] font-semibold flex items-center justify-center gap-3">
              Save Bank Details
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </main>

  </div>
</template>