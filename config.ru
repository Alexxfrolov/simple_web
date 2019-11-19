# frozen_string_literal: true

require 'bundler'
Bundler.require

::ROOT = File.expand_path(__dir__)

require File.join(ROOT, 'lib', 'main_rack')
require File.join(ROOT, 'lib', 'request_handler')

App = MainRack.new

# Serve our index file by default
use Rack::Static, urls: ['/assets'], root: 'public'

# Load the routes
require File.join(ROOT, 'config', 'routes')
use Rack::Reloader
run RequestHandler.new
