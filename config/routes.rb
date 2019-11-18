MainRackApplication.router.config do
  get "/test", :to => "web#index"
  get /.*/, :to => "web#show"
end
