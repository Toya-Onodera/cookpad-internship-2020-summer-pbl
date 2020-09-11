class AnswerController < ApplicationController
  # GET /api/:id
  # アソシエーション間違えてるっぽい、ゴリ押す
  def show
    @answer = Answer.where(question_id: params[:id])
    render :json => @answer
  end
end

