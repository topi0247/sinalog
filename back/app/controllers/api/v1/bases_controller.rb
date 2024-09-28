class Api::V1::BasesController < ApplicationController
  def index
    render json: { message: "Hello World" }, status: :ok
  end
end
