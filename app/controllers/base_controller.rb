# frozen_string_literal: true
require "erb"
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
      response.body = erb("#{@view_path}/#{name}.html.erb")
      response.status_code = 200
    end
  end

  def erb(path)
    ERB.new(File.read(path)).result(binding)
  end
end
