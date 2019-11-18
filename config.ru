require 'bundler'
Bundler.require

require File.join(File.dirname(__FILE__),'lib', 'main_rack')
require File.join(File.dirname(__FILE__),'lib', 'request_handler')

MainRackApplication = MainRack.new

# Load the routes
require File.join(File.dirname(__FILE__),'config', 'routes')
run RequestHandler.new
