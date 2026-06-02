import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\AccountSettingsController::update
 * @see app/Http/Controllers/AccountSettingsController.php:17
 * @route '/account-settings/update'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/account-settings/update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AccountSettingsController::update
 * @see app/Http/Controllers/AccountSettingsController.php:17
 * @route '/account-settings/update'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AccountSettingsController::update
 * @see app/Http/Controllers/AccountSettingsController.php:17
 * @route '/account-settings/update'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AccountSettingsController::update
 * @see app/Http/Controllers/AccountSettingsController.php:17
 * @route '/account-settings/update'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AccountSettingsController::update
 * @see app/Http/Controllers/AccountSettingsController.php:17
 * @route '/account-settings/update'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
const settings = {
    update: Object.assign(update, update),
}

export default settings