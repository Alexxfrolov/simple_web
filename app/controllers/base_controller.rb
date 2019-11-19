# frozen_string_literal: true

require File.join(ROOT, 'lib', 'response')

class BaseController
  attr_reader :env

  def initialize(env)
    @env = env
    @headers = { 'Content-Type' => 'text/html' }
    @view_path = File.join(ROOT, 'app', 'views')
  end

  protected

  def response
    @response ||=
      Response.new.tap do |response|
        response.headers = @headers
        response.body = File.read("#{@view_path}#{env['REQUEST_PATH']}.html")
        response.status_code = 200
      end
  end
end
