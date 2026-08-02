import type { Locale } from "@/lib/types";

const ja = {
  meta: {
    title: "YOJO Genesis | ウェブサイト・アプリ・AIを、わかりやすく届ける",
    description:
      "ITに詳しくなくても大丈夫。ウェブサイト、アプリ、UI/UX、AIまで。ふつうの言葉で相談でき、72時間でわかりやすい提案をお返しします。",
  },
  nav: {
    howItWorks: "進め方",
    whatWeBuild: "できること",
    capabilities: "専門領域",
    cases: "実績",
    security: "セキュリティ",
    company: "会社概要",
    intake: "72時間で提案を受ける",
    intakeShort: "72h提案",
    services: "サービス",
  },
  hero: {
    eyebrow: "YOJO GENESIS — つくる相手として",
    headline: "ITの専門用語がわからなくても、",
    headlineAccent: "事業の悩みはそのまま送れます。",
    body: "ウェブサイト、アプリ、画面デザイン、AIの仕組みまで。工場向けの高度なAIも対応できます。難しい言葉はこちらで翻訳します。まずは「困っていること」をふつうの日本語で教えてください。",
    primaryCta: "72時間でわかりやすい提案を受け取る",
    secondaryCta: "できることを見る",
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
    title: "Reactを知らなくても大丈夫です",
    body: "技術の知識がなくても、事業の言葉で相談できます。IT担当がいないお店・クリニック・会社の方も歓迎です。",
    items: [
      {
        title: "お店・クリニック・事業者の方",
        body: "ホームページや予約・案内の仕組みがほしい。IT用語は苦手でも、やりたいことははっきりしている。",
      },
      {
        title: "社内のDX・業務改善担当",
        body: "現場の手間を減らしたい。大きなシステム刷新の前に、小さく試してから進めたい。",
      },
      {
        title: "プロダクトを急いで形にしたい方",
        body: "アイデアはある。画面と裏側の仕組みを、短期間で動く形にしたい。",
      },
    ],
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
    eyebrow: "05 / 専門領域（企業・工場向け）",
    title: "大きな現場向けの、もう一つの強み",
    body: "ここは少し専門的です。下の「かんたんに言うと」だけ読んでも大丈夫です。",
    items: [
      {
        id: "vision",
        number: "01",
        title: "ロボティクス & コンピュータビジョン",
        plainSubtitle: "かんたんに言うと：カメラでキズや不良を見つけ、目視の負担を減らします。",
        body: "外観検査、微細欠陥検出、施設安全モニタリング。製造ラインの目視依存を減らし、品質と省人化を同時に進めます。",
        sectors: "重工業 / 自動車 / 物流",
      },
      {
        id: "edge",
        number: "02",
        title: "Edge AI（ゼロ・クラウド・リスク）",
        plainSubtitle: "かんたんに言うと：AIをあなたのパソコンや工場内で動かし、データは外に出しません。",
        body: "LLM・ビジョンモデルを工場・拠点内で稼働。データ持ち出しなし、低遅延、知財保護を前提に設計します。",
        sectors: "重要インフラ / 製造 / 防衛・航空関連",
      },
      {
        id: "nlp",
        number: "03",
        title: "NLP & LLM統合",
        plainSubtitle: "かんたんに言うと：書類や古いデータを読み取り、社内の知りたいことに答える仕組みです。",
        body: "レガシー帳票・DBからの構造化抽出、多言語ナレッジ基盤、コンプライアンス報告の自動化。",
        sectors: "金融 / 官公庁・公的案件 / 法務・管理部門",
      },
      {
        id: "modernization",
        number: "04",
        title: "高速ソフトウェア近代化",
        plainSubtitle: "かんたんに言うと：古いシステムを、短期間で使いやすい新しい仕組みへ置き換えます。",
        body: "DevPilotソフトウェア工場により、調査・実装・検証・デプロイを並列化。従来SIでは数ヶ月かかる検証を日単位で前進させます。",
        sectors: "DX推進部門 / IT子会社 / 事業部門",
      },
    ],
    expandLabel: "もう少し詳しく",
    expandBodies: {
      vision:
        "カメラ・既存PLC/SCADA連携を前提に、推論はEdgeノード上で実行。クラウド必須の学習パイプラインは分離し、推論データは現場に留めます。",
      edge:
        "エアギャップまたは閉域網でのモデル配信、更新承認フロー、監査ログを標準装備。公開基盤モデルへの学習転用は行いません。",
      nlp:
        "OCR/文書パーサと社内LLMを組み合わせ、既存権限モデルに沿った検索・要約・レポート生成を実装します。",
      modernization:
        "要件記述からスキーマ・API・UI・テストまでを工場化し、貴社レビューゲートで品質を担保します。",
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
    title: "まず小さく試し、納得してから広げます",
    body: "大きな契約の前に、「何をつくるか・いくらかかりそうか」をはっきりさせます。",
    steps: [
      {
        title: "72時間でわかりやすい提案",
        body: "ふつうの言葉で課題を送ってください。72時間以内に、つくるもの・おおよその期間・費用の目安・次の一手を、わかりやすい言葉でお返しします。",
      },
      {
        title: "小さな試作品（PoC）",
        body: "本番の前に、狭い範囲で動く版をつくります。例：検査時間を短くする、予約画面を動かす、など成功の条件を先に決めます。",
      },
      {
        title: "本番へ広げる",
        body: "試作品がうまくいったら、サイト全体や部署・工場へ広げます。納品物はすべてあなたの資産です。",
      },
    ],
  },
  ctaBand: {
    eyebrow: "無料ではない誠実な提案",
    title: "困っていることを、そのまま送ってください",
    body: "売り込みだけの場ではありません。72時間以内に、何をつくるか・次に何をするかを、わかりやすい言葉でお返しします。",
    button: "72時間でわかりやすい提案を受け取る",
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
        id: "other",
        label: "その他",
      },
    ],
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
    title: "YOJO Genesis | Websites, apps, and AI — explained simply",
    description:
      "You don’t need an IT background. Websites, apps, UI/UX, and AI — tell us the problem in plain words. We reply in 72 hours with a clear plan.",
  },
  nav: {
    howItWorks: "How it works",
    whatWeBuild: "What we build",
    capabilities: "Expertise",
    cases: "Work",
    security: "Security",
    company: "Company",
    intake: "Get a simple plan in 72 hours",
    intakeShort: "72h plan",
    services: "Services",
  },
  hero: {
    eyebrow: "YOJO GENESIS — YOUR BUILD PARTNER",
    headline: "You don’t need to speak tech.",
    headlineAccent: "Just tell us what’s slowing you down.",
    body: "Websites, apps, screen design, and AI helpers — plus advanced factory AI when you need it. We translate the jargon. Send the business problem in normal English.",
    primaryCta: "Get a simple plan in 72 hours",
    secondaryCta: "See what we build",
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
    title: "You don’t need to know React",
    body: "Talk in business language. Perfect if you run a shop, clinic, or team without a full IT department.",
    items: [
      {
        title: "Business owners",
        body: "You want a website, bookings, or a simple app. Tech words are scary — the goal is clear.",
      },
      {
        title: "Ops / DX people inside a company",
        body: "You want less manual work. Try a small win before a huge system rewrite.",
      },
      {
        title: "Founders who need to ship",
        body: "You have the idea. You need screens and systems that work — fast.",
      },
    ],
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
    eyebrow: "05 / Deeper expertise (enterprise & factories)",
    title: "Another strength — for bigger floors",
    body: "This section is more technical. Reading the “In plain words” line under each title is enough.",
    items: [
      {
        id: "vision",
        number: "01",
        title: "Robotics & computer vision",
        plainSubtitle:
          "In plain words: cameras find defects so people don’t stare all day.",
        body: "Defect detection, automated QA, and facility monitoring for lines that still depend on human eyes.",
        sectors: "Heavy manufacturing / Automotive / Logistics",
      },
      {
        id: "edge",
        number: "02",
        title: "Edge AI (zero-cloud-risk)",
        plainSubtitle:
          "In plain words: AI runs on your machines — data stays with you.",
        body: "LLMs and vision models that run on factory hardware — IP protection, low latency, no data exfiltration by default.",
        sectors: "Critical infrastructure / Manufacturing / Aerospace-adjacent",
      },
      {
        id: "nlp",
        number: "03",
        title: "NLP & LLM integration",
        plainSubtitle:
          "In plain words: software that reads old files and answers internal questions.",
        body: "Legacy data extraction, multilingual internal knowledge bases, and automated compliance reporting.",
        sectors: "Finance / Public-sector programs / Legal & ops",
      },
      {
        id: "modernization",
        number: "04",
        title: "Rapid software modernization",
        plainSubtitle:
          "In plain words: replace slow old systems with something usable — faster.",
        body: "The DevPilot software factory parallelizes research, build, verify, and deploy — compressing SI timelines from months toward days.",
        sectors: "DX offices / IT subsidiaries / Business units",
      },
    ],
    expandLabel: "A bit more detail",
    expandBodies: {
      vision:
        "Cameras and existing PLC/SCADA integrations with inference on edge nodes. Training pipelines stay separated; inference data stays on site.",
      edge:
        "Air-gapped or closed-network model delivery, update approval flows, and audit logs. Client data is never used to train public foundation models.",
      nlp:
        "OCR/document parsers plus internal LLMs for search, summarization, and reporting aligned to your permission model.",
      modernization:
        "From a brief to schema, API, UI, and tests — factoryized delivery with your review gates.",
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
    title: "Start small. Understand. Then grow.",
    body: "Before a big spend, we make “what / how long / roughly how much” obvious.",
    steps: [
      {
        title: "Simple plan in 72 hours",
        body: "Send the problem in normal words. Within 72 hours you get: what we’d build, rough timeline, rough cost band, and the next step — in plain language.",
      },
      {
        title: "Small working trial",
        body: "A limited build before the full rollout. We agree what “success” looks like first (e.g. faster bookings, fewer manual checks).",
      },
      {
        title: "Scale when it works",
        body: "Happy with the trial? Expand to the full site, team, or floor. Everything we deliver is yours.",
      },
    ],
  },
  ctaBand: {
    eyebrow: "Honest reply — not a pitch deck",
    title: "Tell us what’s slowing you down",
    body: "No jargon homework. Within 72 hours you’ll get a clear plan: what to build and what to do next.",
    button: "Get a simple plan in 72 hours",
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
        id: "other",
        label: "Other",
      },
    ],
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
