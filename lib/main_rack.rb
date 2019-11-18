require_relative "router"

class MainRack
  attr_reader :router

  def initialize
    @router = Router.new
  end
end
