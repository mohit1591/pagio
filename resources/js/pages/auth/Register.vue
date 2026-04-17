<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import InputError from '@/components/InputError.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import TextLink from '@/components/TextLink.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { store } from '@/routes/register';

</script>

<template>
    <Head title="Register" />

    <!-- Page wrapper — full-screen centered layout -->
    <div class="min-h-screen flex items-center justify-center">

        <!-- Card -->
        <div class="w-full max-w-xl px-10 py-12">

            <!-- Heading block -->
            <div class="mb-10 text-center">
                <h1 class="text-3xl font-extrabold tracking-tight text-slate-800">
                    Ready to build your own website?
                </h1>
                <p class="mt-3 text-base text-slate-500 leading-relaxed">
                    Try Pagio Website Builder today.<br />
                    No credit card required.
                </p>
            </div>

            <!-- Form — no code/logic changes, only class updates -->
            <Form
                v-bind="store.form()"
                :reset-on-success="['password', 'password_confirmation']"
                v-slot="{ errors, processing }"
                class="flex flex-col gap-4"
            >
                <div class="grid gap-4">

                    <!-- Name -->
                    <div class="grid gap-1.5">
                        <Input
                            id="name"
                            type="text"
                            required
                            autofocus
                            :tabindex="1"
                            autocomplete="name"
                            name="name"
                            placeholder="First Name"
                            class="h-14 rounded-2xl border border-slate-200 bg-white px-5 text-base text-slate-700 placeholder:text-slate-400 shadow-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:border-emerald-400 transition"
                        />
                        <InputError :message="errors.name" class="text-sm text-red-500 px-1" />
                    </div>

                    <!-- Email -->
                    <div class="grid gap-1.5">
                        <Input
                            id="email"
                            type="email"
                            required
                            :tabindex="2"
                            autocomplete="email"
                            name="email"
                            placeholder="Email address"
                            class="h-14 rounded-2xl border border-slate-200 bg-white px-5 text-base text-slate-700 placeholder:text-slate-400 shadow-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:border-emerald-400 transition"
                        />
                        <InputError :message="errors.email" class="text-sm text-red-500 px-1" />
                    </div>

                    <!-- Password -->
                    <div class="grid gap-1.5">
                        <PasswordInput
                            id="password"
                            required
                            :tabindex="3"
                            autocomplete="new-password"
                            name="password"
                            placeholder="Password"
                            class="h-14 rounded-2xl border border-slate-200 bg-white px-5 text-base text-slate-700 placeholder:text-slate-400 shadow-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:border-emerald-400 transition"
                        />
                        <InputError :message="errors.password" class="text-sm text-red-500 px-1" />
                    </div>

                    <!-- Confirm Password -->
                    <div class="grid gap-1.5">
                        <PasswordInput
                            id="password_confirmation"
                            required
                            :tabindex="4"
                            autocomplete="new-password"
                            name="password_confirmation"
                            placeholder="Confirm password"
                            class="h-14 rounded-2xl border border-slate-200 bg-white px-5 text-base text-slate-700 placeholder:text-slate-400 shadow-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:border-emerald-400 transition"
                        />
                        <InputError :message="errors.password_confirmation" class="text-sm text-red-500 px-1" />
                    </div>

                    <!-- Submit -->
                    <Button
                        type="submit"
                        class="mt-2 h-14 w-full rounded-2xl bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white text-base font-semibold tracking-wide shadow-none transition-colors"
                        tabindex="5"
                        :disabled="processing"
                        data-test="register-user-button"
                    >
                        <Spinner v-if="processing" class="mr-2" />
                        Sign up for free
                    </Button>
                </div>

                <!-- Footer -->
                <div class="mt-2 text-center text-sm text-slate-500">
                    Already have an account?
                    <TextLink
                        :href="login()"
                        class="font-semibold text-emerald-600 hover:text-emerald-700 underline-offset-4 hover:underline transition-colors"
                        :tabindex="6"
                    >Log in!</TextLink>
                </div>
            </Form>

        </div>
    </div>
</template>