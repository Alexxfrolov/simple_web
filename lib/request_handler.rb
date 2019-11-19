# frozen_string_literal: true

class RequestHandler
  def call(env)
    route = App.router.route_for(env)
    if route
      response = route.execute(env)
      return response.rack_response
    else
      return [404, {}, []]
    end
  end
end
