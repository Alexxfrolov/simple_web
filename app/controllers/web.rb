# frozen_string_literal: true

class Web < BaseController
  def ecomaral
    path = File.join(File.dirname(__FILE__), '../', 'views', 'ecomaral.html')

    Response.new.tap do |response|
      response.headers = @headers
      response.body = File.read(path)
      response.status_code = 200
    end
  end

  def helloween
    path = File.join(File.dirname(__FILE__), '../', 'views', 'helloween.html')

    Response.new.tap do |response|
      response.headers = @headers
      response.body = File.read(path)
      response.status_code = 200
    end
  end

  def voxlink
    path = File.join(File.dirname(__FILE__), '../', 'views', 'voxlink.html')

    Response.new.tap do |response|
      response.headers = @headers
      response.body = File.read(path)
      response.status_code = 200
    end
  end

  def shoes
    path = File.join(File.dirname(__FILE__), '../', 'views', 'shoes.html')

    Response.new.tap do |response|
      response.headers = @headers
      response.body = File.read(path)
      response.status_code = 200
    end
  end
end
