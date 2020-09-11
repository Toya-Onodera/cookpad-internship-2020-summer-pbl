Recipe.destroy_all
Vegetable.destroy_all
RecipeInformation.destroy_all
Question.destroy_all
Answer.destroy_all

# レシピを複数生成する
_recipes = []
15.times do |i|
  # http://placehold.jp/100x100.png?text=[#{i}]%20dummy
  _recipes << Recipe.create!(name: "レシピ_#{i}", description: "[#{i}] Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor", image: "https://source.unsplash.com/featured/?cuisine")
end

# 野菜を生成する
_vegetables = []
vegetable_japan_name = %w[パプリカ トマト 玉ねぎ なす かぼちゃ]
vegetable_english_name = %w[Paprika Tomato Onion Eggplant Pumpkin]
(0 .. (vegetable_japan_name.length - 1)).each do |i|
  _vegetables << Vegetable.create!(j_name: vegetable_japan_name[i], e_name: vegetable_english_name[i], image: "https://ont-develop.work/images/vegetable-0#{i + 1}.jpg")
end

# レシピ内情報を生成する
_recipes.each_index do
  recipe = _recipes.sample
  vegetables = _vegetables.sample(Random.rand(1 .. _vegetables.length))

  vegetables.each do |vegetable|
    RecipeInformation.create!(recipe_id: recipe.id, vegetable_id: vegetable.id, is_open: false)
  end
end

# 問題内容を生成する
# TODO: とりあえず、問題を適当に生成
_questions = []
question_text = %w[
  パプリカは、ナス科で唐辛子属のお野菜です。パプリカでは抗酸化力が高い栄養素３つあり、「ビタミンA（βカロテン）」、「ビタミンC」がその中の２つとなっています。ではもう一つの栄養素は？
  トマトは、ナス科ナス属のお野菜です。トマトの強力な抗酸化力が、選手のコンディション作りにかなり有効なんだとか。トマトを食べると良いと言われているタイミングは？
  玉ねぎは、ネギ属のお野菜です。玉ねぎには、硫化アリルという成分があり新陳代謝を上げる役割をしています。では、効果的な切り方は？ なすは、ナス科ナス属のお野菜です。なすは、ほとんどが水分ですが、強い抗酸化力やコレステロールの吸収を抑える作用があります。では、なすの旬はいつ？
  かぼちゃは、ウリ科カボチャ属のお野菜です。カボチャはビタミン類を多く含み、緑黄色野菜とされています。カボチャではどの栄養素が多く摂取できますか？
]
_vegetables.each_with_index do |vegetable, i|
  _questions << Question.create!(vegetable_id: vegetable.id, text: question_text[i])
end

# 問題選択肢を生成する
# # TODO: とりあえず、解答は適当に生成
_answers = []
answer_texts = %w[たんぱく質 ナイアシン ビタミンE 葉酸 夕方 昼間 朝 夜 半月切り くし切り みじん切り 輪切り 10月〜12月 4月〜5月 6月〜9月 1月〜3月 たんぱく質 脂質 炭水化物 ビタミン]
_questions.each_with_index do |question, i|
  # TODO: 今回は正解は全部 3 に固定
  answer_index = 3

  4.times do |j|
    _answers << Answer.create!(question_id: question.id, text: answer_texts[(4 * i) + j], is_true: (answer_index == j))
  end
end
