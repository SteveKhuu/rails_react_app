class Api::V1::PlanetsController < ApplicationController
  before_action :set_planet, only: %i[show update destroy]

  # GET /planets
  def index
    @planets = Planet.order(created_at: :desc)

    render json: @planets
  end

  # GET /planets/1
  def show
    render json: @planet
  end

  # POST /planets
  def create
    @planet = Planet.new(post_params)

    if @planet.save
      # We can't render the @planet because we are now in /api/v1/planets
      render json: @planet, status: :created, location: api_v1_planet_url(@planet)
    else
      render json: @planet.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /planets/1
  def update
    if @planet.update(post_params)
      render json: @planet
    else
      render json: @planet.errors, status: :unprocessable_entity
    end
  end

  # DELETE /planets/1
  def destroy
    @planet.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_planet
    @planet = Planet.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def post_params
    params.require(:planet).permit(:title, :body)
  end
end
