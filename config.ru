# frozen_string_literal: true

require 'bundler'
Bundler.require

require File.join(File.dirname(__FILE__), 'lib', 'main_rack')
require File.join(File.dirname(__FILE__), 'lib', 'request_handler')

MainRackApplication = MainRack.new

# Serve our index file by default
use Rack::Static, urls: ['/assets'], root: 'public'

# Load the routes
require File.join(File.dirname(__FILE__), 'config', 'routes')
run RequestHandler.new
