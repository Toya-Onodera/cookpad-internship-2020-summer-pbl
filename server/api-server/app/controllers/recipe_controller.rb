class RecipeController < ApplicationController
  # GET /api
  def index
    @recipes = Recipe.all
    render :json => @recipes
  end

  # GET /api/:id
  # アソシエーション間違えてるっぽい、ゴリ押す
  def show
    @recipe = Recipe.find(params[:id])
    @recipe_informations = RecipeInformation.where(recipe_id: params[:id])

    # 野菜idを抜き出す
    _ = []
    _send = []
    @recipe_informations.each do |v|
      # print(v.vegetable_id)
      _ << v.vegetable_id
      _send << v
    end

    @vegetables = Vegetable.where("id in (?)", _)

    @recipe_informations.each do |v|
      # _send["vegetables"] = @vegetables
      _ << v.vegetable_id
    end

    render :json => @vegetables
  end
end
