import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\BuilderController::create
 * @see app/Http/Controllers/BuilderController.php:13
 * @route '/create-site'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/create-site',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BuilderController::create
 * @see app/Http/Controllers/BuilderController.php:13
 * @route '/create-site'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BuilderController::create
 * @see app/Http/Controllers/BuilderController.php:13
 * @route '/create-site'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BuilderController::create
 * @see app/Http/Controllers/BuilderController.php:13
 * @route '/create-site'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BuilderController::create
 * @see app/Http/Controllers/BuilderController.php:13
 * @route '/create-site'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BuilderController::create
 * @see app/Http/Controllers/BuilderController.php:13
 * @route '/create-site'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BuilderController::create
 * @see app/Http/Controllers/BuilderController.php:13
 * @route '/create-site'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\BuilderController::editor
 * @see app/Http/Controllers/BuilderController.php:27
 * @route '/editor/{id}'
 */
export const editor = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editor.url(args, options),
    method: 'get',
})

editor.definition = {
    methods: ["get","head"],
    url: '/editor/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BuilderController::editor
 * @see app/Http/Controllers/BuilderController.php:27
 * @route '/editor/{id}'
 */
editor.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return editor.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BuilderController::editor
 * @see app/Http/Controllers/BuilderController.php:27
 * @route '/editor/{id}'
 */
editor.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editor.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BuilderController::editor
 * @see app/Http/Controllers/BuilderController.php:27
 * @route '/editor/{id}'
 */
editor.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editor.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BuilderController::editor
 * @see app/Http/Controllers/BuilderController.php:27
 * @route '/editor/{id}'
 */
    const editorForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: editor.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BuilderController::editor
 * @see app/Http/Controllers/BuilderController.php:27
 * @route '/editor/{id}'
 */
        editorForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: editor.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BuilderController::editor
 * @see app/Http/Controllers/BuilderController.php:27
 * @route '/editor/{id}'
 */
        editorForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: editor.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    editor.form = editorForm
/**
* @see \App\Http\Controllers\BuilderController::save
 * @see app/Http/Controllers/BuilderController.php:39
 * @route '/save-site/{id}'
 */
export const save = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: save.url(args, options),
    method: 'post',
})

save.definition = {
    methods: ["post"],
    url: '/save-site/{id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BuilderController::save
 * @see app/Http/Controllers/BuilderController.php:39
 * @route '/save-site/{id}'
 */
save.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return save.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BuilderController::save
 * @see app/Http/Controllers/BuilderController.php:39
 * @route '/save-site/{id}'
 */
save.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: save.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\BuilderController::save
 * @see app/Http/Controllers/BuilderController.php:39
 * @route '/save-site/{id}'
 */
    const saveForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: save.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BuilderController::save
 * @see app/Http/Controllers/BuilderController.php:39
 * @route '/save-site/{id}'
 */
        saveForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: save.url(args, options),
            method: 'post',
        })
    
    save.form = saveForm
const BuilderController = { create, editor, save }

export default BuilderController