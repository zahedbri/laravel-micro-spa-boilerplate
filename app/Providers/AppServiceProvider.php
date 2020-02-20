<?php

namespace App\Providers;

use App\Composers\AppComposer;
use App\Http\Resources\Searchable\OptionsFormatter;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use BayAreaWebPro\SearchableResource\SearchableBuilder;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     * @return void
     */
    public function register()
    {
        View::composer(['app'], AppComposer::class);

        $this->app->resolving(
            SearchableBuilder::class,
            function (SearchableBuilder $builder){
            return $builder
                ->useFormatter(new OptionsFormatter)
                ->labeled(request()->hasSession())
                ->paginate(8)
                ->orderBy('id')
                ->sort('desc')
            ;
        });
    }

    /**
     * Bootstrap any application services.
     * @return void
     */
    public function boot()
    {

    }
}
