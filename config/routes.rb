# frozen_string_literal: true

App.router.config do
  get '/', to: 'root#index'

  get '/ecomaral', to: 'landing#ecomaral'
  get '/helloween', to: 'landing#helloween'
  get '/voxlink', to: 'landing#voxlink'
  get '/shoes', to: 'landing#shoes'

  get '/clever', to: 'clever#index'
  get '/clever/cart', to: 'clever#cart'
  get '/clever/good', to: 'clever#good'

  get /./, to: 'error#not_found'
end
