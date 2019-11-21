# frozen_string_literal: true

class Clever < BaseController
  def index
    render :index
  end

  def cart
    render :cart
  end

  def good
    render :good
  end
end
