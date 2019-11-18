# frozen_string_literal: true

MainRackApplication.router.config do
  get '/ecomaral', to: 'web#ecomaral'
  get '/helloween', to: 'web#helloween'
  get '/voxlink', to: 'web#voxlink'
  get '/shoes', to: 'web#shoes'
end
