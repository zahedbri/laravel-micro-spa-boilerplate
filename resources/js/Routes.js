import Route from "./services/Router/Route"

export default [
    /**
     * Dashboard
     */
    Route
        .to('dashboard','/')
        .view(()=>import(/*webpackChunkName:"dashboard"*/ "@views/dashboard/Dashboard"))
        .middleware('auth'),

    /**
     * Auth / Account
     */
    Route
        .to('auth.account','/account/edit')
        .view(()=>import(/*webpackChunkName:"auth"*/ "@views/auth/Account"))
        .uses('Auth@authorize')
        .middleware('auth'),
    Route
        .to('auth.login','/auth/login')
        .view(()=>import(/*webpackChunkName:"auth"*/ "@views/auth/Login"))
        .middleware('guest'),
    Route
        .to('auth.register','/auth/register')
        .view(()=>import(/*webpackChunkName:"auth"*/ "@views/auth/Register"))
        .middleware('guest'),
    Route
        .to('auth.reset','/auth/reset')
        .view(()=>import(/*webpackChunkName:"auth"*/ "@views/auth/PasswordReset"))
        .middleware('guest'),
    Route
        .to('auth.forgot','/auth/forgot')
        .view(()=>import(/*webpackChunkName:"auth"*/ "@views/auth/PasswordForgot"))
        .middleware('guest'),

    /**
     * User Resource
     */
    Route
        .to('users.index','/users')
        .view(()=>import(/*webpackChunkName:"users"*/ "@views/users/UsersResource"))
        .uses('UserResource@index')
        .middleware('auth'),
    Route
        .to('users.create','/users/create')
        .view(()=>import(/*webpackChunkName:"users"*/ "@views/users/UsersForm"))
        .uses('UserResource@create')
        .middleware('auth'),
    Route
        .to('users.show','/users/:id(\\d+)')
        .view(()=>import(/*webpackChunkName:"users"*/ "@views/users/UsersShow"))
        .uses('UserResource@show')
        .middleware('auth'),
    Route
        .to('users.edit','/users/:id(\\d+)/edit')
        .view(()=>import(/*webpackChunkName:"users"*/ "@views/users/UsersForm"))
        .uses('UserResource@edit')
        .middleware('auth'),

    /**
     * Token Resource
     */
    Route
        .to('tokens.index','/tokens')
        .view(()=>import(/*webpackChunkName:"tokens"*/ "@views/tokens/TokenResource"))
        .uses('TokenResource@index')
        .middleware('auth'),
    Route
        .to('tokens.create','/tokens/create')
        .view(()=>import(/*webpackChunkName:"tokens"*/ "@views/tokens/TokenForm"))
        .uses('TokenResource@create')
        .middleware('auth'),
    Route
        .to('tokens.show','/users/:id(\\d+)')
        .view(()=>import(/*webpackChunkName:"tokens"*/ "@views/tokens/TokenShow"))
        .uses('TokenResource@show')
        .middleware('auth'),
    Route
        .to('tokens.edit','/tokens/:id(\\d+)/edit')
        .view(()=>import(/*webpackChunkName:"tokens"*/ "@views/tokens/TokenForm"))
        .uses('TokenResource@edit')
        .middleware('auth'),

    /**
     * Framework / Developer
     */
    Route
        .to('framework.bindings','/framework/bindings')
        .view(()=>import(/*webpackChunkName:"framework"*/ "@views/framework/Bindings"))
        .middleware('auth'),
    Route
        .to('framework.providers','/framework/providers')
        .view(()=>import(/*webpackChunkName:"framework"*/ "@views/framework/Providers"))
        .middleware('auth'),
    Route
        .to('framework.sharing','/framework/sharing')
        .view(()=>import(/*webpackChunkName:"framework"*/ "@views/framework/Sharing"))
        .middleware('auth'),
    Route
        .to('framework.logs','/framework/logs')
        .view(()=>import(/*webpackChunkName:"framework"*/ "@views/framework/Logs"))
        .middleware('auth'),

    /**
     * KitchenSink
     */
    Route
        .to('kitchensink.tabs','/kitchensink/tabs')
        .view(()=>import(/*webpackChunkName:"kitchensink"*/ "@views/kitchensink/Tabs"))
        .middleware('auth'),
    Route
        .to('kitchensink.cards','/kitchensink/cards')
        .view(()=>import(/*webpackChunkName:"kitchensink"*/ "@views/kitchensink/Cards"))
        .middleware('auth'),
    Route
        .to('kitchensink.actions','/kitchensink/actions')
        .view(()=>import(/*webpackChunkName:"kitchensink"*/ "@views/kitchensink/Actions"))
        .middleware('auth'),
    Route
        .to('kitchensink.typography','/kitchensink/typography')
        .view(()=>import(/*webpackChunkName:"kitchensink"*/ "@views/kitchensink/Typography"))
        .middleware('auth'),
    Route
        .to('kitchensink.forms','/kitchensink/forms')
        .view(()=>import(/*webpackChunkName:"kitchensink"*/ "@views/kitchensink/Forms"))
        .middleware('auth'),
    Route
        .to('kitchensink.modals','/kitchensink/modals')
        .view(()=>import(/*webpackChunkName:"kitchensink"*/ "@views/kitchensink/Modals"))
        .middleware('auth'),

    /**
     * Fallback / Errors
     */
    Route
        .to('error', '/error/:status(\\d+)')
        .view(()=>import(/*webpackChunkName:"base"*/ "@views/errors/Error"))
        .middleware('guest')
        .withParams({status: '404'}),
    Route
        .to('_fallback','*')
        .redirectTo(Route.link('error').withParams({status: '404'})),
]
