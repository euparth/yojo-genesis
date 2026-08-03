import type { Locale } from "@/lib/types";

const ja = {
  meta: {
    title: "YOJO Genesis | 成長チャネル・現場ループ・創業CTO伴走",
    description:
      "無料のボトルネック診断から。成長チャネルの改善、現場の見る→わかる→動く、創業CTO伴走まで。売り込みの前に、詰まりをはっきりさせます。",
  },
  nav: {
    howItWorks: "進め方",
    whatWeBuild: "できること",
    diagnostic: "無料診断",
    capabilities: "専門領域",
    cases: "実績",
    security: "セキュリティ",
    company: "会社概要",
    intake: "72時間で提案を受ける",
    intakeShort: "72h提案",
    diagnosticShort: "診断",
    services: "サービス",
  },
  hero: {
    eyebrow: "YOJO GENESIS — つくる相手として",
    headline: "詰まりを先に見える化する。",
    headlineAccent: "売り込みは、そのあとでいい。",
    body: "成長チャネル（サイト／アプリ）、現場のクローズドループ（見る→わかる→動く）、創業CTO伴走。当てはまる扉から、約2分の診断へ。",
    primaryCta: "無料でボトルネック診断を受ける",
    secondaryCta: "できることを見る",
    tertiaryCta: "すでに準備できている方は72時間提案へ",
  },
  trust: {
    items: [
      {
        title: "2〜3週間",
        body: "相談から、動く試作品まで",
      },
      {
        title: "固定価格",
        body: "先に見積。あとから膨らみません",
      },
      {
        title: "貴社の資産",
        body: "つくったものは、すべてあなたのものです",
      },
      {
        title: "データは貴社側に",
        body: "必要なら、社外に出さない設計も可能",
      },
    ],
  },
  whoFor: {
    eyebrow: "01 / こんな方へ",
    title: "三つの扉。どれも「つくる相手」です",
    body: "小さく見える仕事も、現場の重い仕事も、創業の伴走も。一般的な「なんでも屋」ではなく、扉ごとに専門を分けています。",
    items: [
      {
        title: "成長チャネルを伸ばしたい事業者",
        body: "ホームページや予約・案内。IT用語は苦手でも、やりたいことははっきりしている。",
      },
      {
        title: "現場の見る→わかる→動くを閉じたい方",
        body: "検査・IIoT・オンプレAI。データを外に出さず、狭いセルから本番へ。",
      },
      {
        title: "売ることに集中したい創業者",
        body: "技術パートナー／埋め込みCTOが欲しい。現金＋株式などの伴走も、選別のうえで。",
      },
    ],
  },
  diagnosticBand: {
    eyebrow: "無料診断",
    title: "YOJO ボトルネック診断",
    body: "約2分。当てはまる扉を選び、ギャップと「最初に直す一手」を受け取ります。",
    primaryCta: "診断をはじめる",
    doors: [
      {
        title: "成長チャネル",
        body: "問い合わせを止めているギャップ",
        cta: "この扉へ",
        href: "/check?path=a",
      },
      {
        title: "現場ループ",
        body: "見る→わかる→動くの準備度",
        cta: "この扉へ",
        href: "/check?path=b",
      },
      {
        title: "創業CTO伴走",
        body: "MVPは本番・投資に耐えるか",
        cta: "この扉へ",
        href: "/check?path=c",
      },
    ],
  },
  founderPartnership: {
    eyebrow: "創業伴走（選別あり）",
    title: "あなたが売り、私たちがつくる",
    body: "埋め込みCTO＋実装チーム。市場と資金調達は創業者、プロダクトは私たち。合う案件のみ、現金＋株式などで条件を設計します。",
    selectivity: "誰とでも組むわけではありません。適性確認のあと、少数だけ伴走します。",
    proof: [
      "創業経験（米国・カナダ・インド）と資金調達の経験",
      "起業学修士（ドイツ）／スタートアップピッチの審査経験",
      "一人ではなく、デリバリーチームで実装",
      "無償の「CTOだけ」はお受けしません",
    ],
    primaryCta: "伴走の適性チェック",
    secondaryCta: "話を申し込む",
  },
  howItWorks: {
    eyebrow: "02 / 進め方",
    title: "相談からお渡しまで、4ステップ",
    body: "会議だらけの開発ではありません。やりたいことを聞いて、選び、小さく作り、あなたのものとして渡します。",
    steps: [
      {
        number: "01",
        title: "伝える",
        body: "困っていることを、ふつうの言葉で送ってください。音声やメモでも構いません。",
      },
      {
        number: "02",
        title: "整理する",
        body: "ウェブサイト／アプリ／AIのどれが合うか、選択肢とおおまかな期間・費用感を整理します。",
      },
      {
        number: "03",
        title: "小さく作る",
        body: "まずは動く小さな版をつくります。気に入ってから本番へ広げられます。",
      },
      {
        number: "04",
        title: "お渡しする",
        body: "ソースや設定の説明付きで納品。あなたが所有し、必要なら運用も続けられます。",
      },
    ],
  },
  whatWeBuild: {
    eyebrow: "03 / できること",
    title: "身近な言葉で言うと、こういう仕事です",
    body: "見出しは日常語。括弧の中は、ご希望があれば使う技術の例です。",
    items: [
      {
        title: "ウェブサイト・ランディングページ",
        body: "お店やサービスの顔になるサイト。見やすさ・使いやすさ（UI/UX）を大切にします。",
        chips: ["UI/UX", "WordPress", "カスタム"],
      },
      {
        title: "業務用のウェブアプリ",
        body: "予約、管理画面、社内ツールなど。ブラウザで使う仕組みをつくります。",
        chips: ["フロントエンド", "バックエンド"],
      },
      {
        title: "スマホでも使えるPWA",
        body: "アプリストアなしでも、スマホのホーム画面から使える形にできます。",
        chips: ["PWA", "モバイル"],
      },
      {
        title: "画面側と裏側の開発",
        body: "人が触る画面（フロント）と、データを扱う仕組み（バック）をセットで。",
        chips: ["React", "モダンな技術"],
      },
      {
        title: "毎日を助けるAI",
        body: "問い合わせ対応、書類の整理、単純作業の自動化など。専門用語なしで説明します。",
        chips: ["AI", "チャット", "自動化"],
      },
      {
        title: "工場・現場向けの高度なAI",
        body: "検査の自動化や、データを社外に出さないAIなど。大きな案件にも対応します。",
        chips: ["Edge AI", "画像認識"],
      },
    ],
  },
  whatYouGet: {
    eyebrow: "04 / お渡しするもの",
    title: "「動くもの」と「安心」をセットで",
    body: "見積だけ・資料だけで終わりません。使える成果物をお渡しします。",
    items: [
      {
        title: "先にわかる見積",
        body: "固定価格で提示。あとから時間課金で膨らませません。",
      },
      {
        title: "動くソフトウェア",
        body: "見た目のモックだけでなく、実際に使える形まで。",
      },
      {
        title: "すべてあなたの資産",
        body: "ソースコードや設定は、納品後あなたのもの。",
      },
      {
        title: "説明と引き継ぎ",
        body: "どう動くか、どう直すかのメモ付き。専門用語だらけにしません。",
      },
    ],
  },
  capabilities: {
    eyebrow: "05 / 現場ループ（企業・工場）",
    title: "見る → わかる → 動く。データを施設の外に出さない",
    body: "技術名は「ループの層」です。なんでも屋のカタログではありません。下の一行だけ読んでも大丈夫です。",
    items: [
      {
        id: "vision",
        number: "01",
        title: "見る — コンピュータビジョン & ロボティクス",
        plainSubtitle: "かんたんに言うと：カメラと現場の動きで、目視の負担を減らします。",
        body: "外観検査、微細欠陥、安全モニタ。必要ならロボティクスで「動く」側までつなぎます。",
        sectors: "重工業 / 自動車 / 物流",
      },
      {
        id: "edge",
        number: "02",
        title: "境界 — Edge / IIoT（データ主権）",
        plainSubtitle: "かんたんに言うと：推論と信号は拠点内。持ち出し前提にしません。",
        body: "PLC/SCADA信号とEdge推論を同じ閉域で。公開クラウド学習への転用は行いません。",
        sectors: "重要インフラ / 製造 / 防衛・航空関連",
      },
      {
        id: "nlp",
        number: "03",
        title: "わかる — オンプレLLM & 狭いエージェント",
        plainSubtitle: "かんたんに言うと：手順を引き、アラートを次の作業までつなぎます。",
        body: "現場文書の検索・要約と、アラート→チェックリスト→起票のような狭いワークフロー。自律工場の宣伝はしません。",
        sectors: "製造オペ / 保全 / 品質",
      },
      {
        id: "modernization",
        number: "04",
        title: "届ける — 速い実装（ソフトウェア工場）",
        plainSubtitle: "かんたんに言うと：狭いセルを、短期間で本番に載せます。",
        body: "DevPilot工場で調査・実装・検証を並列化。大きな刷新の前に、線上で効く一切れを先に。",
        sectors: "DX推進部門 / IT子会社 / 事業部門",
      },
    ],
    expandLabel: "もう少し詳しく",
    expandBodies: {
      vision:
        "カメラと既存ライン前提。推論はEdge。学習パイプラインは分離し、現場データは留めます。",
      edge:
        "エアギャップまたは閉域でのモデル配信、更新承認、監査ログ。IIoT信号を判断ループへ。",
      nlp:
        "オンプレLLMで手順・帳票。エージェントは狭いフローに限定し、過大な自律を約束しません。",
      modernization:
        "要件からスキーマ・API・UI・テストまで工場化。貴社レビューゲートで品質を担保します。",
    },
  },
  security: {
    eyebrow: "セキュリティ",
    title: "データの主権を、設計の前提にする",
    body: "日本企業が最も慎重になるのは「データがどこへ行くか」です。YOJO Genesisは、クライアントの運用データを公開基盤モデルの学習に用いません。",
    points: [
      {
        title: "学習転用不使用",
        body: "ご提供データ・運用ログを、公開LLMの学習に利用しません。",
      },
      {
        title: "APPIへの配慮",
        body: "個人情報保護法（APPI）を前提とした取扱い方針で設計・運用します。",
      },
      {
        title: "認証・規格への準備",
        body: "ISO 27001 / SOC 2 Type II 等への準拠準備を進行中です（取得済みとは限りません）。",
      },
      {
        title: "Edge / 閉域構成",
        body: "エアギャップまたは拠点内推論により、データが施設外に出ない構成を選択できます。",
      },
    ],
    diagramTitle: "Edge展開の概念",
    diagramSteps: [
      "現場センサー / カメラ / 業務システム",
      "拠点内 Edge 推論ノード",
      "閉域の管理コンソール（権限付き）",
      "必要時のみ、承認されたメタデータ連携",
    ],
  },
  cases: {
    eyebrow: "実績・デリバリー証明",
    title: "DevPilot工場で積み上げた実装力",
    body: "以下はデリバリーエンジン DevPilot 上で構築・運用してきたプロダクト群の抜粋です。日本向けの案件でも、同じ速さで「あなたのもの」として納品します。",
    status: {
      live: "稼働",
      beta: "β",
      "in-dev": "開発中",
    },
    cta: "DevPilot を見る",
  },
  engagement: {
    eyebrow: "進め方の詳細",
    title: "診断 → 提案 → 小さく本番へ",
    body: "冷たい訪問者には診断を。準備できた方には72時間提案を。",
    steps: [
      {
        title: "ボトルネック診断（無料）",
        body: "約2分。成長／現場／創業の扉から、ギャップと最初の一手を受け取ります。",
      },
      {
        title: "72時間のわかりやすい提案",
        body: "つくるもの・期間・費用の目安・次の一手。現場向けはアーキテクチャ寄りでお返しします。",
      },
      {
        title: "狭い試作品から本番へ",
        body: "成功条件を先に決め、線やチャネルの狭い範囲で動かしてから広げます。",
      },
    ],
  },
  ctaBand: {
    eyebrow: "まず診断、それから提案",
    title: "詰まりが見えないまま、見積だけ求めません",
    body: "無料のボトルネック診断でギャップを開くか、準備できていれば72時間提案へ。",
    button: "無料でボトルネック診断を受ける",
    secondaryButton: "72時間提案へ",
  },
  aboutPreview: {
    eyebrow: "私たちについて",
    title: "「あと三人雇う前に」呼ばれるチームでありたい",
    body: "YOJO Genesisは、ウェブサイトから工場向けAIまで届ける実装パートナーです。デリバリーはDevPilotソフトウェア工場と連携します。日本法人は設立準備中です。",
    link: "会社概要を見る",
  },
  companyPage: {
    eyebrow: "会社概要",
    title: "YOJO Genesis",
    intro:
      "日本のB2B買い手が最初に確認する情報を、透明にまとめています。法人登記・資本金等は設立完了後に更新します。",
    factsTitle: "基本情報",
    leadershipTitle: "技術体制",
    note: "東京住所は暫定表示です。確定次第、本ページを更新します。",
  },
  intake: {
    eyebrow: "72時間・わかりやすい提案",
    title: "何に困っていますか？",
    body: "IT用語は不要です。やりたいこと・困っていることをふつうの言葉で書いてください。",
    plainPromise:
      "72時間以内にお返しするもの：①何をつくるか ②おおよその期間 ③費用の目安 ④次にやること。難しい専門資料ではなく、読んでわかる提案です。",
    steps: ["状況", "課題", "ご連絡先"],
    situationsLabel: "近い状況を選んでください（複数可）",
    situations: [
      {
        id: "website-app",
        label: "ウェブサイトやアプリがほしい",
      },
      {
        id: "ui-ux",
        label: "画面をもっと使いやすくしたい（UI/UX）",
      },
      {
        id: "ai-daily",
        label: "毎日の仕事をAIで楽にしたい",
      },
      {
        id: "visual-inspection",
        label: "目視検査・外観QAの自動化",
      },
      {
        id: "legacy-data",
        label: "レガシー帳票・DBからのデータ抽出",
      },
      {
        id: "onprem-llm",
        label: "データを外に出さないAI活用",
      },
      {
        id: "dx-bottleneck",
        label: "DXが進まない業務の詰まり",
      },
      {
        id: "founder-cto",
        label: "創業CTO伴走・技術パートナーを探している",
      },
      {
        id: "other",
        label: "その他",
      },
    ],
    checkBridge:
      "診断結果を踏まえて提案します。スコアやギャップは担当が参照します。",
    briefLabel: "課題の概要",
    briefPlaceholder:
      "最低20文字以上でご記入ください。例：お店の予約を電話だけからウェブでも受けたい。英語が苦手でも大丈夫な画面にしたい…",
    briefCounter: "{n} / 最低20文字",
    fileLabel: "補足資料（任意・PDF/画像）",
    fileHint: "機密情報はマスキングしたうえで添付してください。",
    nameLabel: "お名前",
    companyLabel: "会社名",
    emailLabel: "メールアドレス",
    contactLabel: "希望するご連絡手段",
    contactOptions: ["メール", "オンライン会議", "どちらでも"],
    next: "次へ",
    back: "戻る",
    submit: "送信する",
    submitting: "送信中…",
    selectHint: "先に当てはまる状況を1つ以上選んでください。",
    briefHint: "課題の概要を20文字以上ご記入ください。",
    contactHint: "お名前・会社名・有効なメールアドレスをご入力ください。",
    guarantee:
      "送信後72時間以内に、つくるもの・期間・費用の目安・次の一手を、わかりやすい言葉でお送りします。",
    secureNote: "送信内容は提案対応のみに使用し、公開モデルの学習には用いません。",
    successTitle: "受け付けました",
    successBody:
      "72時間以内に、わかりやすい提案をご連絡します。追加で知りたいことがあればメールでご連絡します。",
    errorTitle: "送信に失敗しました",
    errorBody: "時間をおいて再度お試しください。または直接メールでご連絡ください。",
    homeLink: "ホームに戻る",
  },
  footer: {
    tagline: "ウェブサイトから現場AIまで。わかりやすい言葉で、固定成果で。",
    company: "会社概要",
    intake: "72時間提案",
    security: "セキュリティ",
    cases: "実績",
    appi: "個人情報は提案対応の目的に限り取り扱います。公開基盤モデルの学習には使用しません。",
    rights: "© YOJO Genesis",
    delivery: "Delivery engine",
  },
} as const;

const en = {
  meta: {
    title: "YOJO Genesis | Growth channel, floor loop, embedded CTO",
    description:
      "Start with a free bottleneck diagnostic. Growth channel, on-site see→understand→act, or selective founder CTO partnership.",
  },
  nav: {
    howItWorks: "How it works",
    whatWeBuild: "What we build",
    diagnostic: "Free diagnostic",
    capabilities: "Expertise",
    cases: "Work",
    security: "Security",
    company: "Company",
    intake: "Get a simple plan in 72 hours",
    intakeShort: "72h plan",
    diagnosticShort: "Check",
    services: "Services",
  },
  hero: {
    eyebrow: "YOJO GENESIS — YOUR BUILD PARTNER",
    headline: "Name the bottleneck first.",
    headlineAccent: "Pitching can wait.",
    body: "Growth channel (sites/apps), floor closed-loop (see→understand→act), or embedded CTO for founders. Pick a door — about two minutes.",
    primaryCta: "Take the free bottleneck diagnostic",
    secondaryCta: "See what we build",
    tertiaryCta: "Already ready? Get a 72-hour plan",
  },
  trust: {
    items: [
      {
        title: "2–3 weeks",
        body: "From first chat to a working trial",
      },
      {
        title: "Fixed price",
        body: "Quoted up front — no surprise hours",
      },
      {
        title: "Yours to keep",
        body: "What we build belongs to you",
      },
      {
        title: "Your data stays yours",
        body: "On-site options when cloud feels risky",
      },
    ],
  },
  whoFor: {
    eyebrow: "01 / Who this is for",
    title: "Three doors. Same build partner.",
    body: "Not a generalist catalog. Each door has a clear problem and deal type.",
    items: [
      {
        title: "Operators growing a channel",
        body: "Sites, bookings, clearer screens — business language welcome.",
      },
      {
        title: "Teams closing the floor loop",
        body: "Vision, IIoT, on-prem models — data stays on your network.",
      },
      {
        title: "Founders who need to sell",
        body: "Embedded CTO + build team. Cash + equity only when it fits — selective.",
      },
    ],
  },
  diagnosticBand: {
    eyebrow: "Free diagnostic",
    title: "YOJO Bottleneck Diagnostic",
    body: "About two minutes. Unlock gaps and what to fix first.",
    primaryCta: "Start the diagnostic",
    doors: [
      {
        title: "Growth channel",
        body: "Gaps blocking online inquiries",
        cta: "This door",
        href: "/check?path=a",
      },
      {
        title: "Floor intelligence",
        body: "See → understand → act readiness",
        cta: "This door",
        href: "/check?path=b",
      },
      {
        title: "Embedded CTO",
        body: "Is the MVP investable / production-ready?",
        cta: "This door",
        href: "/check?path=c",
      },
    ],
  },
  founderPartnership: {
    eyebrow: "Founder partnership (selective)",
    title: "You sell. We build.",
    body: "Embedded CTO + engineering team. You own market and fundraising; we own product. Cash + equity terms only after diligence — few seats.",
    selectivity: "We do not partner with everyone. Diligence first.",
    proof: [
      "Founded and raised across US / Canada / India",
      "MS Entrepreneurship (Germany) / startup pitch reviewer",
      "Delivered by a team — not a solo freelancer",
      "We don’t take “free CTO only” embeds",
    ],
    primaryCta: "Check partnership fit",
    secondaryCta: "Start a conversation",
  },
  howItWorks: {
    eyebrow: "02 / How it works",
    title: "Four steps. No jargon maze.",
    body: "Not endless meetings. You describe the need; we choose the path, build a small version, and hand it over as yours.",
    steps: [
      {
        number: "01",
        title: "Tell us",
        body: "Describe the bottleneck in plain words — email, notes, or voice. No tech résumé required.",
      },
      {
        number: "02",
        title: "We map options",
        body: "Website, app, AI helper, or factory AI? We outline fit, rough timeline, and cost band.",
      },
      {
        number: "03",
        title: "We build a small version",
        body: "A working trial first. Expand only when you’re happy.",
      },
      {
        number: "04",
        title: "You own it",
        body: "Source, notes, and handoff. It’s your asset — not a rented black box.",
      },
    ],
  },
  whatWeBuild: {
    eyebrow: "03 / What we build",
    title: "In everyday words",
    body: "Headlines stay human. Chips are optional tech names if you care.",
    items: [
      {
        title: "Websites & landing pages",
        body: "Your shop or service online — clear layout and easy use (UI/UX).",
        chips: ["UI/UX", "WordPress", "Custom"],
      },
      {
        title: "Business web apps",
        body: "Bookings, dashboards, internal tools you open in a browser.",
        chips: ["Frontend", "Backend"],
      },
      {
        title: "Phone-friendly PWAs",
        body: "Works like an app from the home screen — often without an app store.",
        chips: ["PWA", "Mobile"],
      },
      {
        title: "Screens + systems behind them",
        body: "What people tap (frontend) and what stores the data (backend).",
        chips: ["React", "Modern stacks"],
      },
      {
        title: "AI that helps daily work",
        body: "FAQs, document helpers, boring-task automation — explained simply.",
        chips: ["AI", "Chat", "Automation"],
      },
      {
        title: "Factory & advanced AI",
        body: "Inspection, on-site AI that keeps data inside your building.",
        chips: ["Edge AI", "Vision"],
      },
    ],
  },
  whatYouGet: {
    eyebrow: "04 / What you get",
    title: "Working software — and clarity",
    body: "Not a slide deck that dies in email. Something you can use.",
    items: [
      {
        title: "A clear quote",
        body: "Fixed price up front. No silent hour-creep.",
      },
      {
        title: "Software that runs",
        body: "Beyond mockups — a real working build.",
      },
      {
        title: "Full ownership",
        body: "Source and setup are yours after delivery.",
      },
      {
        title: "Handoff in plain words",
        body: "How it works and how to change it — without a jargon wall.",
      },
    ],
  },
  capabilities: {
    eyebrow: "05 / Floor loop (enterprise & factories)",
    title: "See → understand → act. Data stays on site.",
    body: "Tech names are layers of one loop — not a generalist catalog. The plain line under each title is enough.",
    items: [
      {
        id: "vision",
        number: "01",
        title: "See — computer vision & robotics",
        plainSubtitle:
          "In plain words: cameras and motion reduce eye-only inspection.",
        body: "Defects, fine defects, safety monitoring — and robotics when the loop needs actuation.",
        sectors: "Heavy manufacturing / Automotive / Logistics",
      },
      {
        id: "edge",
        number: "02",
        title: "Boundary — Edge / IIoT (data sovereignty)",
        plainSubtitle:
          "In plain words: inference and signals stay inside your network.",
        body: "PLC/SCADA signals with Edge inference in a closed network. No training public models on your ops data.",
        sectors: "Critical infrastructure / Manufacturing / Aerospace-adjacent",
      },
      {
        id: "nlp",
        number: "03",
        title: "Understand — on-prem LLM & narrow agents",
        plainSubtitle:
          "In plain words: retrieve procedures; close alerts into next steps.",
        body: "On-site document answers plus narrow workflows (alert → checklist → ticket). We don’t sell “autonomous factory” hype.",
        sectors: "Ops / Maintenance / Quality",
      },
      {
        id: "modernization",
        number: "04",
        title: "Deliver — fast implementation",
        plainSubtitle:
          "In plain words: get a narrow cell to production quickly.",
        body: "DevPilot factory parallelizes research, build, and verify — a working slice before a giant rewrite.",
        sectors: "DX offices / IT subsidiaries / Business units",
      },
    ],
    expandLabel: "A bit more detail",
    expandBodies: {
      vision:
        "Cameras on existing lines; inference on Edge. Training separated; site data stays on site.",
      edge:
        "Air-gapped or closed delivery, update approval, audit logs. IIoT signals into the decision loop.",
      nlp:
        "On-prem LLM for procedures; agents limited to narrow flows — no overclaim of autonomy.",
      modernization:
        "Brief to schema, API, UI, tests — factoryized with your review gates.",
    },
  },
  security: {
    eyebrow: "Security",
    title: "Your data stays your business",
    body: "We never use your operational data to train public AI models. If you need work that never leaves your building, we design for that.",
    points: [
      {
        title: "No public-model training",
        body: "Your data and operational logs are not used to train public LLMs.",
      },
      {
        title: "APPI-aware handling",
        body: "We design and operate with Japan’s Act on the Protection of Personal Information in mind.",
      },
      {
        title: "Standards readiness",
        body: "Preparing toward ISO 27001 / SOC 2 Type II (readiness — not a claim of completed certification).",
      },
      {
        title: "Edge / closed networks",
        body: "Choose air-gapped or on-site inference so data need not leave the facility.",
      },
    ],
    diagramTitle: "Edge deployment sketch",
    diagramSteps: [
      "Sensors / cameras / business systems",
      "On-site edge inference nodes",
      "Closed management console (role-based)",
      "Optional approved metadata sync only",
    ],
  },
  cases: {
    eyebrow: "Delivery proof",
    title: "Built on the DevPilot software factory",
    body: "Products built and run through DevPilot. For Japanese clients we use the same speed — and you own what ships.",
    status: {
      live: "Live",
      beta: "Beta",
      "in-dev": "In development",
    },
    cta: "Visit DevPilot",
  },
  engagement: {
    eyebrow: "How engagements start",
    title: "Diagnose → plan → narrow production",
    body: "Cold visitors get the diagnostic. Ready buyers get the 72-hour plan.",
    steps: [
      {
        title: "Bottleneck diagnostic (free)",
        body: "About two minutes. Growth, floor, or founder door — gaps plus what to fix first.",
      },
      {
        title: "Simple plan in 72 hours",
        body: "What to build, rough timing, cost band, next step. Floor work comes as an architecture-leaning plan.",
      },
      {
        title: "Narrow trial into production",
        body: "Agree success criteria, ship a thin slice on the channel or line, then expand.",
      },
    ],
  },
  ctaBand: {
    eyebrow: "Diagnose first, then plan",
    title: "We won’t ask for a quote before the bottleneck is clear",
    body: "Take the free diagnostic — or jump to a 72-hour plan if you’re ready.",
    button: "Take the free bottleneck diagnostic",
    secondaryButton: "72-hour plan",
  },
  aboutPreview: {
    eyebrow: "About",
    title: "The team you call before hiring three more people",
    body: "YOJO Genesis builds from websites to factory-floor AI. Delivery runs with the DevPilot software factory. Our Japanese entity is in formation.",
    link: "Company profile",
  },
  companyPage: {
    eyebrow: "Company profile",
    title: "YOJO Genesis",
    intro:
      "The facts Japanese B2B buyers check first — presented transparently. Registry and capital details will be updated after incorporation.",
    factsTitle: "Company facts",
    leadershipTitle: "Delivery leadership",
    note: "Tokyo address is provisional and will be updated when confirmed.",
  },
  intake: {
    eyebrow: "Simple plan in 72 hours",
    title: "What’s slowing you down?",
    body: "No IT vocabulary needed. Write the goal or pain in normal words.",
    plainPromise:
      "Within 72 hours you’ll get: (1) what we’d build, (2) rough timeline, (3) rough cost band, (4) next step — a plan you can actually read.",
    steps: ["Situation", "Brief", "Contact"],
    situationsLabel: "Select what fits (multiple OK)",
    situations: [
      {
        id: "website-app",
        label: "I need a website or app",
      },
      {
        id: "ui-ux",
        label: "I want clearer, easier screens (UI/UX)",
      },
      {
        id: "ai-daily",
        label: "I want AI to help daily work",
      },
      {
        id: "visual-inspection",
        label: "Visual inspection / QA automation",
      },
      {
        id: "legacy-data",
        label: "Legacy document / DB extraction",
      },
      {
        id: "onprem-llm",
        label: "AI that keeps data on site",
      },
      {
        id: "dx-bottleneck",
        label: "Stuck process / DX bottleneck",
      },
      {
        id: "founder-cto",
        label: "Looking for embedded CTO / tech co-build",
      },
      {
        id: "other",
        label: "Other",
      },
    ],
    checkBridge:
      "We’ll use your diagnostic score and gaps when we reply.",
    briefLabel: "Problem brief",
    briefPlaceholder:
      "Minimum 20 characters. Example: We only take bookings by phone and want a simple web form. Screens should be easy even if English isn’t our first language…",
    briefCounter: "{n} / minimum 20 characters",
    fileLabel: "Supporting file (optional PDF/image)",
    fileHint: "Please redact confidential details before uploading.",
    nameLabel: "Your name",
    companyLabel: "Company",
    emailLabel: "Email",
    contactLabel: "Preferred contact",
    contactOptions: ["Email", "Video call", "Either"],
    next: "Continue",
    back: "Back",
    submit: "Send it over",
    submitting: "Sending…",
    selectHint: "Select at least one situation to continue.",
    briefHint: "Please write at least 20 characters in the brief.",
    contactHint: "Enter your name, company, and a valid email to submit.",
    guarantee:
      "Within 72 hours we’ll send what to build, rough timing, cost band, and next steps — in plain language.",
    secureNote:
      "Submissions are used only for your plan — never to train public models.",
    successTitle: "Received",
    successBody:
      "We’ll follow up within 72 hours with a plain-language plan. If we need clarifying details, we’ll email you.",
    errorTitle: "Something went wrong",
    errorBody: "Please try again shortly, or email us directly.",
    homeLink: "Back to home",
  },
  footer: {
    tagline: "From websites to floor AI — clear words, fixed outcomes",
    company: "Company",
    intake: "72h plan",
    security: "Security",
    cases: "Work",
    appi: "Personal data is used only to reply with your plan. Never for public model training.",
    rights: "© YOJO Genesis",
    delivery: "Delivery engine",
  },
} as const;

export type Dictionary = typeof ja;

export const dictionaries: Record<Locale, Dictionary> = {
  ja,
  en: en as unknown as Dictionary,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
