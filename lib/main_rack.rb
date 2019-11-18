# frozen_string_literal: true

require_relative 'router'

class MainRack
  attr_reader :router

  def initialize
    @router = Router.new
  end
end
