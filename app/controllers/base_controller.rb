require File.join(File.dirname(__FILE__), '../', '../', 'lib', 'response')
# require File.join(File.dirname(__FILE__), '../', 'app', 'controllers', 'base_controller')


class BaseController
  attr_reader :env

  def initialize env
    @env = env
  end
end
