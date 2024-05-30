let mix = require('laravel-mix');

mix
  .sass('src/style.scss', 'public')
  .sass('src/home.scss', 'public')
  .sass('src/animal_list.scss', 'public')
  .sass('src/edit.scss', 'public')