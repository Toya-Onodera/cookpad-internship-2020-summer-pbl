Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :recipe, only: [:index, :show, :update]
  resources :question, only: [:show]
  resources :answer, only: [:show]
end
