import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\OtpController::submit
 * @see app/Http/Controllers/Auth/OtpController.php:27
 * @route '/otp/verify'
 */
export const submit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/otp/verify',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\OtpController::submit
 * @see app/Http/Controllers/Auth/OtpController.php:27
 * @route '/otp/verify'
 */
submit.url = (options?: RouteQueryOptions) => {
    return submit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\OtpController::submit
 * @see app/Http/Controllers/Auth/OtpController.php:27
 * @route '/otp/verify'
 */
submit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\OtpController::submit
 * @see app/Http/Controllers/Auth/OtpController.php:27
 * @route '/otp/verify'
 */
    const submitForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: submit.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\OtpController::submit
 * @see app/Http/Controllers/Auth/OtpController.php:27
 * @route '/otp/verify'
 */
        submitForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: submit.url(options),
            method: 'post',
        })
    
    submit.form = submitForm
const verify = {
    submit: Object.assign(submit, submit),
}

export default verify