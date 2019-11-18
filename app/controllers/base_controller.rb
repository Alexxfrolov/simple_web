# frozen_string_literal: true

require File.join(File.dirname(__FILE__), '../', '../', 'lib', 'response')

class BaseController
  attr_reader :env

  def initialize(env)
    @env = env
    @headers = { 'Content-Type' => 'text/html' }
  end
end
