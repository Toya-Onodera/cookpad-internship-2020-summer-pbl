class QuestionController < ApplicationController
  # GET /api/:id
  # アソシエーション間違えてるっぽい、ゴリ押す
  def show
    @question = Question.find(params[:id])
    render :json => @question
  end
end
