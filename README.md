# nuxt-jest-playwright

勉強会用のサンプルリポジトリ

NuxtJS + Jest + Playwright + GitHub Actions のサンプルです

## 仕様

レストランのメニューを表示する、1ページだけの Nuxtアプリ

- json で定義したメニューを、画面に表示する
- 価格表記は "¥1,234,560-" のような形式
- 月〜金曜日には、サービスランチが表示される
  - 土曜と日曜には表示しない
- クリスマスとクリスマスイブのみ、スペシャルメニューが表示される
  - その場合、平日であってもサービスランチは表示しない

## 技術的なこと

- ユニットテスト (Vueのコンポーネントやメソッドのテスト) を Jestで実施
- E2Eテストを Playwright で実施
  - エラーが出たらスクリーンショットを取って保存する
- GitHub Actions で、プルリクエスト作成単位でテストを自動実行
  - エラーが出たらスクリーンショットフォルダをアップロードする

## フォルダ構成

Nuxt のデフォルト構成 + 以下

- .github/workflows
  - GitHub Actions設定
- data
  - メニューのjsonデータ
- jest.config.js
  - Jest設定
- playwright.config.js
  - Playwright設定
- test/jest
  - jest の ユニットテストファイル
- test/playwright
  - playwright の E2Eテストファイル
- test-results
  - エラー時のスクリーンショット保存先
