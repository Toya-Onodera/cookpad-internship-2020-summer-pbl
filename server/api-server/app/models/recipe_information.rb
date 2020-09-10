class RecipeInformation < ApplicationRecord
    belong_to :recipe
    belong_to :vegetable
end
