# frozen_string_literal: true

require File.join(ROOT, 'lib', 'response')

class BaseController
  attr_reader :env

  def initialize(env)
    @env = env
    @view_path = env["VIEW_PATH"]
  end

  protected

  def render(name)
    Response.new.tap do |response|
      response.headers = { 'Content-Type' => 'text/html' }
      response.body = File.read("#{@view_path}/#{name}.html")
      response.status_code = 200
    end
  end
end
