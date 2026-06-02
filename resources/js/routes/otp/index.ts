import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import verify8ef1b2 from './verify'
/**
* @see \App\Http\Controllers\Auth\OtpController::verify
 * @see app/Http/Controllers/Auth/OtpController.php:17
 * @route '/otp/verify'
 */
export const verify = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verify.url(options),
    method: 'get',
})

verify.definition = {
    methods: ["get","head"],
    url: '/otp/verify',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\OtpController::verify
 * @see app/Http/Controllers/Auth/OtpController.php:17
 * @route '/otp/verify'
 */
verify.url = (options?: RouteQueryOptions) => {
    return verify.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\OtpController::verify
 * @see app/Http/Controllers/Auth/OtpController.php:17
 * @route '/otp/verify'
 */
verify.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verify.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\OtpController::verify
 * @see app/Http/Controllers/Auth/OtpController.php:17
 * @route '/otp/verify'
 */
verify.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: verify.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\OtpController::verify
 * @see app/Http/Controllers/Auth/OtpController.php:17
 * @route '/otp/verify'
 */
    const verifyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: verify.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\OtpController::verify
 * @see app/Http/Controllers/Auth/OtpController.php:17
 * @route '/otp/verify'
 */
        verifyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: verify.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\OtpController::verify
 * @see app/Http/Controllers/Auth/OtpController.php:17
 * @route '/otp/verify'
 */
        verifyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: verify.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    verify.form = verifyForm
/**
* @see \App\Http\Controllers\Auth\OtpController::resend
 * @see app/Http/Controllers/Auth/OtpController.php:57
 * @route '/otp/resend'
 */
export const resend = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resend.url(options),
    method: 'post',
})

resend.definition = {
    methods: ["post"],
    url: '/otp/resend',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\OtpController::resend
 * @see app/Http/Controllers/Auth/OtpController.php:57
 * @route '/otp/resend'
 */
resend.url = (options?: RouteQueryOptions) => {
    return resend.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\OtpController::resend
 * @see app/Http/Controllers/Auth/OtpController.php:57
 * @route '/otp/resend'
 */
resend.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resend.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\OtpController::resend
 * @see app/Http/Controllers/Auth/OtpController.php:57
 * @route '/otp/resend'
 */
    const resendForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: resend.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\OtpController::resend
 * @see app/Http/Controllers/Auth/OtpController.php:57
 * @route '/otp/resend'
 */
        resendForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: resend.url(options),
            method: 'post',
        })
    
    resend.form = resendForm
const otp = {
    verify: Object.assign(verify, verify8ef1b2),
resend: Object.assign(resend, resend),
}

export default otp