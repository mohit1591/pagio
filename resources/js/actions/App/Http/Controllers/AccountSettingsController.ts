import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AccountSettingsController::index
 * @see app/Http/Controllers/AccountSettingsController.php:10
 * @route '/account-settings'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/account-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AccountSettingsController::index
 * @see app/Http/Controllers/AccountSettingsController.php:10
 * @route '/account-settings'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AccountSettingsController::index
 * @see app/Http/Controllers/AccountSettingsController.php:10
 * @route '/account-settings'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AccountSettingsController::index
 * @see app/Http/Controllers/AccountSettingsController.php:10
 * @route '/account-settings'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AccountSettingsController::index
 * @see app/Http/Controllers/AccountSettingsController.php:10
 * @route '/account-settings'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AccountSettingsController::index
 * @see app/Http/Controllers/AccountSettingsController.php:10
 * @route '/account-settings'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AccountSettingsController::index
 * @see app/Http/Controllers/AccountSettingsController.php:10
 * @route '/account-settings'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
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
const AccountSettingsController = { index, update }

export default AccountSettingsController