<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import InputError from '@/components/InputError.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import TextLink from '@/components/TextLink.vue';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import AuthSimpleLayout from '@/layouts/AuthSimpleLayout.vue'

defineOptions({
    layout: {
        title: 'Log in to your account',
        description: 'Enter your email and password below to log in',
    },
});

defineProps<{
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
}>();
</script>

<template>
    <Head title="Log in" />
    

    <div class="container mx-auto md:pb-20 my-5 md:my-20 px-4">
        <div class="max-w-2xl mx-auto p-4 md:py-16">
            <h2 class="text-center text-2xl md:text-4xl font-semibold pb-8 md:pb-12 pt-6 md:pt-0">
                Login
            </h2>

            <div
                v-if="status"
                class="mb-4 text-center text-sm font-medium text-green-600"
            >
                {{ status }}
            </div>

            <div class="max-w-sm mx-auto">
                <Form
                    v-bind="store.form()"
                    :reset-on-success="['password']"
                    v-slot="{ errors, processing }"
                    class="flex flex-col gap-4"
                >
                    <!-- Email -->
                    <div>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            required
                            autofocus
                            :tabindex="1"
                            autocomplete="email"
                            placeholder="Email address"
                            class="rounded-xl py-6 px-4 outline-none w-full border-0 bg-white focus:ring-2 focus:ring-green-500"
                        />
                        <InputError
                            :message="errors.email"
                            class="mt-1"
                        />
                    </div>

                    <!-- Password -->
                    <div>
                        <PasswordInput
                            id="password"
                            name="password"
                            required
                            :tabindex="2"
                            autocomplete="current-password"
                            placeholder="Password"
                            class="rounded-xl py-6 px-4 outline-none w-full border-0 bg-white focus:ring-2 focus:ring-green-500"
                        />
                        <InputError
                            :message="errors.password"
                            class="mt-1"
                        />
                    </div>

                    <!-- Remember -->
                    <div class="flex items-center justify-start mt-2">
                        <Label
                            for="remember"
                            class="flex items-center gap-3 cursor-pointer text-sm"
                        >
                            <Checkbox
                                id="remember"
                                name="remember"
                                :tabindex="3"
                            />
                            <span>Remember me</span>
                        </Label>
                    </div>

                    <!-- Button -->
                    <div class="text-center mt-4">
                        <Button
                            type="submit"
                            class="w-full rounded-xl py-6 text-base font-medium bg-[#11C786] hover:bg-black/90 text-white"
                            :tabindex="4"
                            :disabled="processing"
                            data-test="login-button"
                        >
                            <Spinner v-if="processing" />
                            Log in
                        </Button>

                        <!-- Forgot Password -->
                        <TextLink
                            v-if="canResetPassword"
                            :href="request()"
                            class="my-6 text-base block text-black hover:text-green-600"
                            :tabindex="5"
                        >
                            Forgot Password?
                        </TextLink>

                        <!-- Register -->
                        <div
                            v-if="canRegister"
                            class="text-base md:text-lg"
                        >
                            <span class="block text-black">
                                Don't have an account?
                            </span>

                            <TextLink
                                :href="register()"
                                :tabindex="6"
                                class="font-bold text-green-600 hover:text-green-700"
                            >
                                Create one now for free!
                            </TextLink>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>
