import type { CompanyFact } from "@/lib/types";

/** Provisional Tokyo address — replace when a real office is secured. */
export const companyFacts: CompanyFact[] = [
  {
    label: { ja: "屋号 / ブランド名", en: "Brand name" },
    value: { ja: "YOJO Genesis", en: "YOJO Genesis" },
  },
  {
    label: { ja: "事業形態", en: "Legal status" },
    value: {
      ja: "設立準備中（日本法人設立を進行中）",
      en: "In formation (Japanese entity incorporation in progress)",
    },
  },
  {
    label: { ja: "設立準備開始", en: "Formation started" },
    value: { ja: "2026年", en: "2026" },
  },
  {
    label: { ja: "東京オフィス（暫定）", en: "Tokyo office (provisional)" },
    value: {
      ja: "〒100-0005 東京都千代田区丸の内1-1-1（住所確定次第更新）",
      en: "1-1-1 Marunouchi, Chiyoda-ku, Tokyo 100-0005 (to be updated)",
    },
  },
  {
    label: { ja: "エンジニアリング拠点", en: "Engineering base" },
    value: {
      ja: "インド（DevPilot デリバリーチームと連携）",
      en: "India (in partnership with the DevPilot delivery team)",
    },
  },
  {
    label: { ja: "事業内容", en: "Business" },
    value: {
      ja: "Edge AI・コンピュータビジョン・NLPによるエンタープライズ近代化支援",
      en: "Enterprise modernization via Edge AI, computer vision, and NLP",
    },
  },
  {
    label: { ja: "デリバリー基盤", en: "Delivery engine" },
    value: {
      ja: "DevPilot（AIネイティブ・ソフトウェア工場）",
      en: "DevPilot (AI-native software factory)",
    },
  },
  {
    label: { ja: "お問い合わせ", en: "Contact" },
    value: {
      ja: "診断ポータルより受付 / hello@yojogenesis.com",
      en: "Via Architecture Intake Portal / hello@yojogenesis.com",
    },
  },
];

export const leadership = {
  ja: {
    title: "技術体制",
    subtitle: "AI・ロボティクス・エンタープライズ実装に強いデリバリーユニット",
    items: [
      {
        role: "デリバリー統括",
        focus: "Edge AI / オンプレ展開 / 固定成果型プロジェクト設計",
      },
      {
        role: "ビジョン・ロボティクス",
        focus: "外観検査・QA自動化・現場モニタリングの実装設計",
      },
      {
        role: "ソフトウェア工場",
        focus: "DevPilotによる高速プロトタイプと本番品質の納品",
      },
    ],
  },
  en: {
    title: "Delivery leadership",
    subtitle:
      "A technical unit specialized in AI, robotics, and enterprise deployment",
    items: [
      {
        role: "Delivery lead",
        focus: "Edge AI, on-prem rollout, fixed-outcome engagement design",
      },
      {
        role: "Vision & robotics",
        focus: "Visual inspection, QA automation, facility monitoring architecture",
      },
      {
        role: "Software factory",
        focus: "Rapid prototypes and production delivery via DevPilot",
      },
    ],
  },
};
