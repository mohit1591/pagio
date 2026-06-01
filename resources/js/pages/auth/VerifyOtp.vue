<script setup lang="ts">
import { Head, useForm, router } from '@inertiajs/vue3';
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';

defineOptions({
    layout: {
        title: 'Verify your email',
        description: 'Enter the 6-digit code sent to your email',
    },
});

defineProps<{
    status?: string;
}>();

const form = useForm({ otp: '' });

function handleOtpInput(e: Event) {
    const target = e.target as HTMLInputElement;
    form.otp = target.value.replace(/\D/g, '').slice(0, 6);
}

function submit() {
    // 👇 Use direct URL instead of route()
    form.post('/otp/verify');
}

function resend() {
    // 👇 Use direct URL instead of route()
    router.post('/otp/resend');
}
</script>

<template>
    <Head title="Verify Email" />

    <div class="container mx-auto md:pb-20 my-5 md:my-20 px-4">
        <div class="max-w-2xl mx-auto p-4 md:py-16">
            <h2 class="text-center text-2xl md:text-4xl font-semibold pb-8 md:pb-12 pt-6 md:pt-0">
                Verify Email
            </h2>

            <!-- Success flash -->
            <div
                v-if="status"
                class="mb-4 text-center text-sm font-medium text-green-600"
            >
                {{ status }}
            </div>

            <div class="max-w-sm mx-auto">

                <p class="text-center text-slate-500 mb-6">
                    We sent a 6-digit verification code to your email.<br />
                    Enter it below to activate your account.
                </p>

                <form @submit.prevent="submit" class="flex flex-col gap-4">

                    <div>
                        <Input
                            id="otp"
                            type="text"
                            inputmode="numeric"
                            maxlength="6"
                            required
                            autofocus
                            :value="form.otp"
                            @input="handleOtpInput"
                            placeholder="000000"
                            class="rounded-xl py-6 px-4 outline-none w-full border-0 bg-white focus:ring-2 focus:ring-green-500 text-center tracking-[0.6em] font-mono text-lg"
                        />
                        <InputError :message="form.errors.otp" class="mt-1 text-center" />
                    </div>

                    <div class="text-center mt-4">
                        <Button
                            type="submit"
                            class="w-full rounded-xl py-6 text-base font-medium bg-[#11C786] hover:bg-black/90 text-white"
                            :disabled="form.processing"
                        >
                            <Spinner v-if="form.processing" />
                            Verify & Continue
                        </Button>

                        <div class="mt-6 text-base">
                            <span class="text-black">Didn't receive the code? </span>
                            <button
                                type="button"
                                @click="resend"
                                class="font-bold text-green-600 hover:text-green-700"
                            >
                                Resend OTP
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>