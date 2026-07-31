import type { Locale } from "@/lib/types";

const ja = {
  meta: {
    title: "YOJO Genesis | 日本の産業・業務システム近代化",
    description:
      "Edge AI・コンピュータビジョン・NLPによる固定成果型のエンタープライズ近代化。72時間で実現可能性マトリクスをご提示します。",
  },
  nav: {
    capabilities: "事業内容",
    cases: "実績",
    security: "セキュリティ",
    company: "会社概要",
    intake: "72時間診断",
    intakeShort: "72h診断",
    services: "サービス",
  },
  hero: {
    eyebrow: "YOJO GENESIS — AIネイティブ近代化パートナー",
    headline: "日本の産業と業務システム近代化を、",
    headlineAccent: "固定成果で加速する。",
    body: "Edge AI・コンピュータビジョン・次世代オートメーションにより、クラウドリスクを抑えながら現場課題を短期で解きます。2026年の「デジタル崖」に対し、オンプレミスで動く実装を届けます。",
    primaryCta: "72時間で実現可能性マトリクスを依頼",
    secondaryCta: "事業内容を見る",
  },
  trust: {
    items: [
      {
        title: "2〜3週間",
        body: "初回ヒアリングから動作するPoCまで",
      },
      {
        title: "固定価格",
        body: "事前見積。時間課金の膨張はありません",
      },
      {
        title: "貴社の資産",
        body: "ソース・モデル・基盤はすべて貴社所有",
      },
      {
        title: "オンプレ / Edge",
        body: "データを施設外に出さない構成が可能",
      },
    ],
  },
  capabilities: {
    eyebrow: "事業内容",
    title: "現場課題に直結する、四つの能力領域",
    body: "技術カタログではなく、日本の製造・物流・業務現場で起きる具体的な成果で定義しています。",
    items: [
      {
        id: "vision",
        number: "01",
        title: "ロボティクス & コンピュータビジョン",
        body: "外観検査、微細欠陥検出、施設安全モニタリング。製造ラインの目視依存を減らし、品質と省人化を同時に進めます。",
        sectors: "重工業 / 自動車 / 物流",
      },
      {
        id: "edge",
        number: "02",
        title: "Edge AI（ゼロ・クラウド・リスク）",
        body: "LLM・ビジョンモデルを工場・拠点内で稼働。データ持ち出しなし、低遅延、知財保護を前提に設計します。",
        sectors: "重要インフラ / 製造 / 防衛・航空関連",
      },
      {
        id: "nlp",
        number: "03",
        title: "NLP & LLM統合",
        body: "レガシー帳票・DBからの構造化抽出、多言語ナレッジ基盤、コンプライアンス報告の自動化。",
        sectors: "金融 / 官公庁・公的案件 / 法務・管理部門",
      },
      {
        id: "modernization",
        number: "04",
        title: "高速ソフトウェア近代化",
        body: "DevPilotソフトウェア工場により、調査・実装・検証・デプロイを並列化。従来SIでは数ヶ月かかる検証を日単位で前進させます。",
        sectors: "DX推進部門 / IT子会社 / 事業部門",
      },
    ],
    expandLabel: "技術構成の概要",
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
    body: "以下はデリバリーエンジン DevPilot 上で構築・運用してきたプロダクト群の抜粋です。日本企業向け案件では、同等の速度と所有権モデルで実装します。",
    status: {
      live: "稼働",
      beta: "β",
      "in-dev": "開発中",
    },
    cta: "DevPilot を見る",
  },
  engagement: {
    eyebrow: "進め方",
    title: "稟議を通すための、短い実証から始める",
    body: "高額な包括契約の前に、一つのボトルネックで速度とリスク低減を証明します。",
    steps: [
      {
        title: "72時間診断",
        body: "匿名化した課題・構成の概要をご共有ください。技術ロードマップと実現可能性マトリクス、簡易プロトタイプ方針をお返しします。",
      },
      {
        title: "60日 PoC",
        body: "単一ライン・単一部門など範囲を限定。成功指標（例: 検査時間25%短縮）を事前合意します。",
      },
      {
        title: "本番拡張",
        body: "PoC成功をトリガーに、施設・部門横展開の商業契約へ移行。納品物はすべて貴社資産です。",
      },
    ],
  },
  ctaBand: {
    eyebrow: "診断ポータル",
    title: "いま詰まっている課題を、そのまま送ってください",
    body: "売り込みの場ではありません。72時間以内に、実現可能性と次の一手を誠実にお返しします。",
    button: "アーキテクチャ診断を開始",
  },
  aboutPreview: {
    eyebrow: "私たちについて",
    title: "「あと三人雇う前に」呼ばれるチームでありたい",
    body: "YOJO Genesisは、日本の産業・業務近代化に特化したAIネイティブの実装パートナーです。デリバリーはDevPilotソフトウェア工場と連携し、Edge・ビジョン・NLPを現場に届けます。日本法人は設立準備中です。",
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
    eyebrow: "アーキテクチャ診断ポータル",
    title: "何が現場の足を引っ張っていますか？",
    body: "売り込みはしません。匿名化した課題で構いません。72時間以内に技術ロードマップと実現可能性マトリクスの方針をお返しします。",
    steps: ["状況", "課題", "ご連絡先"],
    situationsLabel: "近い状況を選んでください（複数可）",
    situations: [
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
        label: "オンプレ / EdgeでのLLM・AI活用",
      },
      {
        id: "dx-bottleneck",
        label: "DXが進まない業務ボトルネック",
      },
      {
        id: "other",
        label: "その他",
      },
    ],
    briefLabel: "課題の概要",
    briefPlaceholder:
      "最低20文字以上でご記入ください。例：第4ラインの外観検査をクラウド接続なしで自動化したい。現状は二人体制の目視で、ピーク時に遅延が発生している…",
    briefCounter: "{n} / 最低20文字",
    fileLabel: "補足資料（任意・PDF/画像）",
    fileHint: "機密情報はマスキングしたうえで添付してください。",
    nameLabel: "お名前",
    companyLabel: "会社名",
    emailLabel: "メールアドレス",
    contactLabel: "希望する連絡手段",
    contactOptions: ["メール", "オンライン会議", "どちらでも"],
    next: "次へ",
    back: "戻る",
    submit: "送信する",
    submitting: "送信中…",
    selectHint: "先に当てはまる状況を1つ以上選んでください。",
    briefHint: "課題の概要を20文字以上ご記入ください。",
    contactHint: "お名前・会社名・有効なメールアドレスをご入力ください。",
    guarantee:
      "送信後72時間以内に、実現可能性マトリクスと次ステップのご案内をお送りします。",
    secureNote: "送信内容は診断対応のみに使用し、公開モデルの学習には用いません。",
    successTitle: "受け付けました",
    successBody:
      "72時間以内に、技術ロードマップと実現可能性マトリクスの方針をご連絡します。追加資料が必要な場合はメールでご連絡します。",
    errorTitle: "送信に失敗しました",
    errorBody: "時間をおいて再度お試しください。または直接メールでご連絡ください。",
    homeLink: "ホームに戻る",
  },
  footer: {
    tagline: "Edge AI と固定成果で、日本の産業近代化を支える",
    company: "会社概要",
    intake: "診断ポータル",
    security: "セキュリティ",
    cases: "実績",
    appi: "個人情報は診断対応の目的に限り取り扱います。公開基盤モデルの学習には使用しません。",
    rights: "© YOJO Genesis",
    delivery: "Delivery engine",
  },
} as const;

const en = {
  meta: {
    title: "YOJO Genesis | Japanese Industrial & Enterprise Modernization",
    description:
      "Fixed-outcome enterprise modernization powered by Edge AI, computer vision, and NLP. Request a 72-hour feasibility matrix.",
  },
  nav: {
    capabilities: "Capabilities",
    cases: "Work",
    security: "Security",
    company: "Company",
    intake: "72h assessment",
    intakeShort: "72h assess",
    services: "Services",
  },
  hero: {
    eyebrow: "YOJO GENESIS — AI-NATIVE MODERNIZATION PARTNER",
    headline: "Accelerating Japanese industrial and enterprise modernization —",
    headlineAccent: "with fixed outcomes.",
    body: "Edge AI, computer vision, and next-gen automation that respect on-prem constraints. We help teams cross the 2026 Digital Cliff without forcing sensitive data into public cloud.",
    primaryCta: "Request a 72-hour feasibility matrix",
    secondaryCta: "See capabilities",
  },
  trust: {
    items: [
      {
        title: "2–3 weeks",
        body: "From first call to a working PoC",
      },
      {
        title: "Fixed price",
        body: "Quoted up front — no billable-hour bloat",
      },
      {
        title: "Yours to keep",
        body: "Source, models, and infra are your assets",
      },
      {
        title: "On-prem / Edge",
        body: "Architectures that keep data on site",
      },
    ],
  },
  capabilities: {
    eyebrow: "Capabilities",
    title: "Four ways we clear operational undergrowth",
    body: "We define offerings as enterprise outcomes — not a technology laundry list.",
    items: [
      {
        id: "vision",
        number: "01",
        title: "Robotics & computer vision",
        body: "Defect detection, automated QA, and facility monitoring for lines that still depend on human eyes.",
        sectors: "Heavy manufacturing / Automotive / Logistics",
      },
      {
        id: "edge",
        number: "02",
        title: "Edge AI (zero-cloud-risk)",
        body: "LLMs and vision models that run on factory hardware — IP protection, low latency, no data exfiltration by default.",
        sectors: "Critical infrastructure / Manufacturing / Aerospace-adjacent",
      },
      {
        id: "nlp",
        number: "03",
        title: "NLP & LLM integration",
        body: "Legacy data extraction, multilingual internal knowledge bases, and automated compliance reporting.",
        sectors: "Finance / Public-sector programs / Legal & ops",
      },
      {
        id: "modernization",
        number: "04",
        title: "Rapid software modernization",
        body: "The DevPilot software factory parallelizes research, build, verify, and deploy — compressing SI timelines from months toward days.",
        sectors: "DX offices / IT subsidiaries / Business units",
      },
    ],
    expandLabel: "Architecture snapshot",
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
    title: "Data sovereignty is a design constraint",
    body: "Japanese buyers care where data goes. YOJO Genesis never uses client operational data to train public foundation models.",
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
    body: "A curated set of products built and operated through DevPilot. For Japanese engagements we apply the same velocity and full-ownership model.",
    status: {
      live: "Live",
      beta: "Beta",
      "in-dev": "In development",
    },
    cta: "Visit DevPilot",
  },
  engagement: {
    eyebrow: "Engagement",
    title: "Start with evidence your ringi can carry",
    body: "Before a wide rollout, prove speed and risk reduction on one bottleneck.",
    steps: [
      {
        title: "72-hour assessment",
        body: "Share a sanitized brief. We return a technical roadmap, feasibility matrix, and prototype direction.",
      },
      {
        title: "60-day PoC",
        body: "Constrain scope to one line or team. Pre-agree a success metric (e.g. 25% inspection-time reduction).",
      },
      {
        title: "Scale trigger",
        body: "Successful PoC unlocks a facility- or department-wide commercial agreement. You own what we build.",
      },
    ],
  },
  ctaBand: {
    eyebrow: "Intake portal",
    title: "Tell us what’s slowing you down",
    body: "No pitch theater. Within 72 hours you’ll get an honest take on feasibility and next steps.",
    button: "Start architecture intake",
  },
  aboutPreview: {
    eyebrow: "About",
    title: "The team you call before hiring three more people",
    body: "YOJO Genesis is an AI-native implementation partner for Japanese industrial and enterprise modernization. Delivery runs with the DevPilot software factory across Edge, vision, and NLP. Our Japanese entity is in formation.",
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
    eyebrow: "Architecture intake portal",
    title: "What’s slowing you down?",
    body: "No obligation pitch. A sanitized problem statement is enough. Within 72 hours we’ll return roadmap and feasibility direction.",
    steps: ["Situation", "Brief", "Contact"],
    situationsLabel: "Select what fits (multiple OK)",
    situations: [
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
        label: "On-prem / Edge LLM or AI",
      },
      {
        id: "dx-bottleneck",
        label: "Stuck DX / process bottleneck",
      },
      {
        id: "other",
        label: "Other",
      },
    ],
    briefLabel: "Problem brief",
    briefPlaceholder:
      "Minimum 20 characters. Example: Automate visual inspection on Line 4 without cloud connectivity. Two inspectors today; delays at peak…",
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
      "Within 72 hours we’ll send feasibility matrix direction and suggested next steps.",
    secureNote:
      "Submissions are used only for assessment — never to train public models.",
    successTitle: "Received",
    successBody:
      "We’ll follow up within 72 hours with roadmap and feasibility direction. If we need clarifying materials, we’ll email you.",
    errorTitle: "Something went wrong",
    errorBody: "Please try again shortly, or email us directly.",
    homeLink: "Back to home",
  },
  footer: {
    tagline: "Edge AI and fixed outcomes for Japanese modernization",
    company: "Company",
    intake: "Intake",
    security: "Security",
    cases: "Work",
    appi: "Personal data is used only for assessment responses. Never for public model training.",
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
