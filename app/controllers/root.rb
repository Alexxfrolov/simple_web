# frozen_string_literal: true

class Root < BaseController
  def index
    @landings = App.router.routes[:get].
      select {|i| i.last[:klass] == "Landing"}.map(&:first)
    render :index
  end
end
