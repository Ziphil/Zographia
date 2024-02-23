/* eslint-disable react/jsx-closing-tag-location */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import dedent from "ts-dedent";
import {Markdown} from "/source/component";
import {restrictWidth} from "/source/story/decorator/width";


type Meta = RawMeta<typeof Markdown>;
type Story = RawStory<typeof Markdown>;

export default {
  title: "Atom/Markdown",
  component: Markdown
} as Meta;

const template = {
  decorators: [restrictWidth(800)]
} as Story;

const markdownString = dedent`
  ## インライン要素
  これは**強調**されます。ここも*強調*されます。
  ここは~~取り消し~~です。
  ここは段落です。あいうカキク漢字 ABJOQabfpy ÉÃëç أَنْتَ μῆνιν ἄειδε Ἄϊδι。
  あいうカキク漢字 ABJOQabfpy ÉÃëç أَنْتَ μῆνιν ἄειδε Ἄϊδι。

  インラインコードを \`here.isInline(code);\` のように埋め込めます。

  ここから別の段落です。
  これは[リンク](https://example.com)です。

  ## ブロック要素
  ### 番号なしリスト
  箇条書き前の段落です。

  - リスト項目 1
  - とても長いリスト項目とても長いリスト項目とても長いリスト項目とても長いリスト項目とても長いリスト項目とても長いリスト項目
  - リスト項目 3
    - リスト項目 3-1
    - リスト項目 3-2
      - リスト項目 3-2-1
      - リスト項目 3-2-2
    - リスト項目 3-3
  - リスト項目 4
  - リスト項目 5
    \`\`\`
    // ここにブロック要素を入れることもできます
    const answer = 42;
    \`\`\`
  - リスト項目 6

  箇条書き後の段落です。

  ## 番号付きリスト
  番号付きリスト前の段落です。

  1. リスト項目 1
  2. リスト項目 2
  3. リスト項目 3
      1. リスト項目 3-1
      2. リスト項目 3-2
          1. リスト項目 3-2-1
          2. リスト項目 3-2-2
      3. リスト項目 3-3
  4. リスト項目 4
  5. リスト項目 5

  箇条書き後の段落です。

  ### 引用
  引用前の段落です。

  > これは引用です。
  > これも引用です。
  > > これはネストされた引用です。
  > > これもネストされた引用です。
  > これは引用です。
  > - 引用内のリスト 1
  > - 引用内のリスト 2
  > これは引用です。

  引用後の段落です。

  ### コードブロック
  コードブロック前の段落です。

  \`\`\`
  const code = "ここにcodeを書きます";
  let sum = 0;
  for (let i = 0 ; i < 10 ; i ++) {
    sum += i;
    console.log(sum);
  }
  \`\`\`

  コードブロック後の段落です。

  ### 表
  表前の段落です。

  | foofoo | 左揃え | 中央揃え | 右揃え |
  | ------ | :----- | :------: | -----: |
  | 罫線は揃っていなくても良い | barbar | bazbaz | quxqux |
  | 2 行目 | 2 行目 | 3 | 3 |

  表後の段落です。
`;

export const basic = {
  ...template,
  name: "基本",
  args: {
    children: markdownString
  }
} as Story;
export const compact = {
  ...template,
  name: "コンパクト",
  args: {
    compact: true,
    children: markdownString
  }
} as Story;
export const example = {
  ...template,
  name: "例",
  args: {
    children: dedent`
      ## 概要
      本プライバシーポリシーは、ZpDIC Online (以下「当アプリ」) の各種サービスにおいて、当アプリの利用者 (以下「ユーザー」) の個人情報もしくはそれに準ずる情報を取り扱う際に、当アプリが遵守する方針を示したものです。
      
      当アプリでは、個人情報の重要性を認識して個人情報を保護することが社会的責務であると考え、個人情報に関する法令を遵守し、個人情報の取得や利用や管理を適正に行います。
      当アプリで収集した情報は、利用目的の範囲内で適切に取り扱います。
      
      本プライバシーポリシーは、当アプリにおいてのみ適用されます。
      
      ## 個人情報の取得と利用目的
      ### ユーザー情報
      当アプリを利用するには、ユーザー登録した上でログインしていただく必要があります。
      ユーザー登録および当アプリの利用の際に、以下の情報を送信していただく必要があります。
      
      - 名前 (ハンドルネーム)
      - メールアドレス
      - パスワード
      
      これらの情報は、当アプリが管理するデータベースに保存され、ユーザー情報の照合に利用されます。
      この際、パスワードはもとの文字列が復元できないハッシュ化された状態で保存されます。
      また、メールアドレスは、ユーザーがパスワードを忘れた際のパスワードリセットの際、および当アプリ内の情報を通知するためにメールを送信する際に利用されます。
      
      ### Contact
      In this application, the user may be asked to send the following information when they contact us via the contact form.
      
      - Name (or handle name)
      - Email address
      
      This information will be sent as an email to the developers of this application in order to respond to your inquiry.
      At this time, this application may compare the submitted information with those in the database managed by this application in order to identify the user.
      In addition, in order to smoothly develop this application, the content of the inquiry may be made public in the [development dashboard](https://ziphil.notion.site/ZpDIC-Online-987030f6505e4cf1ba8fe08121584d93) of this application.
      In such cases, only the content of the inquiry will be disclosed, and personal information such as email addresses will never be made public.
      
      These personal information will be used to reply to your questions or to contact you with necessary information via email, and will not be used for any purpose other than those for which you provided the information.
      The emails containing the content of the inquiry will be deleted as soon as the inquiry has been responded to.
      
      ### Access log
      This application acquires and stores access logs.
      It uses [Papertrail](https://www.papertrail.com/) to store the access log.
      The information stored is as follows:
      
      - IP address
      - Accessed URL
      - Request method and request body
      - Status code of the response
      - Time taken to respond
      
      The abovementioned “request body” does not include the unhashed password which is sent to sign in, and thus passwords will not be stored unencrypted.
      
      This log information will be used to analyze access trends to improve the services and to determine the cause of errors when they occur.
      Log information will be stored on Papertrail for up to 7 days, and thery will be deleted after 7 days.
      
      ### reCAPTCHA
      Tiu aplikaĵo uzas reCAPTCHA v3 provizatan de Guglo por plibonigi sekurecon.
      Ĝi permesas al Guglo kolekti informojn pri la uzanto, kiel la IP-adreso.
      Tiu kolektado de datumoj estas submetita al la [privateca politiko](https://policies.google.com/privacy) kaj la [kondiĉoj de servoj](https://policies.google.com/terms) de Guglo.
      
      Ĝi estos uzata por determini ĉu la vizitanto de tiu aplikaĵo estas homo aŭ roboto kaj por protekti tiun aplikaĵon kaj ĝiajn uzantojn kontraŭ malicaj spamoj.
      Tiu aplikaĵo ne uzas ajnajn informojn kolektitajn de reCAPTCHA kaj Guglo.
      
      ### Google Analytics
      Tiu aplikaĵo uzas Google Analytics, kaj ankaŭ uzas kuketojn por kolekti datumojn.
      Tiu kolektado de datumoj estas submetita al la [privateca politiko](https://policies.google.com/privacy) kaj la [kondiĉoj de servoj](https://marketingplatform.google.com/about/analytics/terms/en/) de Guglo.
      
      La kolektitaj datumoj estos uzataj por kompreni kiel tiu aplikaĵo estas uzata kaj por plibonigi la servojn.
      Tiuj datumoj estas kolektitaj anonime kaj ne identigas la uzanton.
      
      ## Administrado de personaj informoj
      Tiu aplikaĵo taŭge administras personajn informojn, kaj ne malkaŝos aŭ forigos ilin krom en la sekvaj kazoj:
      
      - Kiam estos konsento de la individuo
      - Kiam estos risko malobservi la rajtojn aŭ interesojn de uzanto aŭ de tria partio
      - Kiam necesos malkaŝi aŭ forigi la informojn laŭ leĝoj kaj regularoj
      
      ## Malgarantio
      La kopirajtoj kaj portretaj rajtoj de la vortaraj kaj/aŭ bildaj datumoj publikigitaj de la uzanto en tiu aplikaĵo apartenas al la koncerna uzanto.
      La kopirajtoj de la dokumentoj kaj aliaj materialoj kiuj ne estas publikigitaj de la uzantoj apartenas al la programisto de tiu aplikaĵo.
      La programisto de tiu aplikaĵo ne respondecas pri ajnaj damaĝoj kaŭzitaj de tiuj enhavoj al la uzantoj.
      
      Kvankam ni klopodas certigi ke la informoj en tiu aplikaĵo estas kiel eble plej precizaj, ili povas enhavi erarojn aŭ malnoviĝi.
      
      Se la uzanto estas translokigita de tiu aplikaĵo al alia retejo per ligilo aŭ standardo, la programisto de tiu aplikaĵo ne prenas respondecon pri la informoj aŭ servoj provizitaj en la ligita retejo.      
      
      ## お問い合わせ
      当アプリにおける個人情報の取り扱いに関するお問い合わせは、[お問い合わせフォーム](/contact)をご利用いただくか、以下の連絡先へ直接ご連絡ください。
      
      - 運営者 — Ziphil Aleshlas
      - メールアドレス — ziphil.shaleiras❖gmail.com (❖ → @)
      
      ## 制定日
      - 2021 年 1 月 30 日 — 制定
      - 2022 年 1 月 28 日 — 一部改定
      - 2022 年 6 月 15 日 — 一部改定 (Google Analytics に関する項目を追加)
    `
  }
} as Story;