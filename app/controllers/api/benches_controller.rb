class Api::BenchesController < ApplicationController

  def index
    @benches = Bench.in_bounds(params[:bounds])
  end

  def show
    @bench = Bench.find(params[:id])
  end
end
