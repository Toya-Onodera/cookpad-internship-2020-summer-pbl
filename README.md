# cookpad-internship-2020-summer-pbl
2020年クックパッドサマーインターンで使用するリポジトリ

### 今回実現したい体験
* ゲーム感覚で食材やレシピの知識をつけられる体験

### 実装したい機能
* 食事制限をする際、専用のページが存在すると考える（今回は筋トレに興味を持ち、食事制限を始めた）
* 食事制限に対応するレシピが多数存在するが、始めは何も閲覧できない
* 閲覧するには、レシピ内で使用する食材や調理法についての情報を集め、ロックを解除しなくてはいけない（トロフィー機能をイメージ）
* 情報を集める手法は 2 つ存在する
    * 食材をカメラで撮影してアップロードし、対象の食材であったらロックが解除される
    * 食材についての問題が出題され、それに正解するとロックが解除される（すべて画像だとコストが高いから、TODO: MVP 的考えだと機能入れすぎ？）
* ロックが解除されるとレシピが表示される

### 実装について
* Ruby on Rails（バックエンド）
* React.js（フロントエンド）
