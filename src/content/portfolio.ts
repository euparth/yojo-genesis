import type { PortfolioItem } from "@/lib/types";

/** Curated DevPilot products remapped for Japanese enterprise buyers. */
export const portfolio: PortfolioItem[] = [
  {
    id: "devpilot-core",
    name: "DevPilot Core",
    vertical: "Infrastructure",
    status: "live",
    highlight: "1.2M+ LOC Rust",
    enterpriseAngle: {
      ja: "オンプレ完結のソフトウェア工場。ソース・DB・基盤をすべて貴社資産として納品。",
      en: "On-prem software factory. Source, database, and infra ship as your assets.",
    },
    summary: {
      ja: "並列エージェントによる調査・実装・検証・デプロイを、自己学習型Rustエンジンが統括します。",
      en: "Parallel agents research, build, verify, and deploy — orchestrated by a self-learning Rust engine.",
    },
  },
  {
    id: "dhanvantari",
    name: "Dhanvantari OS",
    vertical: "Healthcare",
    status: "in-dev",
    highlight: "8 modules",
    enterpriseAngle: {
      ja: "病院業務のDX基盤。受付・会計・薬局・カルテを統合し、現場オペレーションを高速化。",
      en: "Hospital operations OS consolidating OPD, billing, pharmacy, and records.",
    },
    summary: {
      ja: "医療機関向けAIオペレーティングシステム。複数モジュールを一つの業務フローに統合。",
      en: "Hospital AI operating system unifying multiple clinical and admin modules.",
    },
  },
  {
    id: "uttara-raksha",
    name: "UttaraRaksha",
    vertical: "Infrastructure",
    status: "in-dev",
    highlight: "Geo + risk",
    enterpriseAngle: {
      ja: "災害リスクの可視化と避難支援。公共インフラ・自治体向けの現場判断を支援。",
      en: "Multi-hazard geo platform for landslide, flood, and evacuation decision support.",
    },
    summary: {
      ja: "地すべり予測・洪水マッピング・避難経路を扱う地理空間リスク基盤。",
      en: "Landslide prediction, flood mapping, and evacuation routing on a geo platform.",
    },
  },
  {
    id: "cyberforge",
    name: "CyberForge",
    vertical: "Security",
    status: "live",
    highlight: "302 tests",
    enterpriseAngle: {
      ja: "脆弱性スキャンとCVE優先度付け。エンタープライズの継続的セキュリティ評価に適合。",
      en: "Security scanner orchestration with CVE enrichment for continuous enterprise assessment.",
    },
    summary: {
      ja: "Nmap・Nuclei・ZAP等を統括し、EPSS/KEVでリスクを補強するセキュリティ基盤。",
      en: "Orchestrates Nmap, Nuclei, and ZAP with EPSS/KEV-enriched CVE intelligence.",
    },
  },
  {
    id: "avartan",
    name: "Avartan",
    vertical: "Engineering",
    status: "in-dev",
    highlight: "CFD + structural",
    enterpriseAngle: {
      ja: "製造・工学シミュレーション。設計検証のサイクルを短縮し、現場エンジニアリングを加速。",
      en: "Engineering simulation accelerating design validation cycles for manufacturing teams.",
    },
    summary: {
      ja: "CFDソルバと構造解析、ファームウェア生成を含む工学シミュレーション基盤。",
      en: "CFD solvers, structural analysis, and firmware generation for engineering teams.",
    },
  },
  {
    id: "raksha",
    name: "Raksha",
    vertical: "Security",
    status: "live",
    highlight: "6-layer safety",
    enterpriseAngle: {
      ja: "AI利用時のガードレール。スコープ制御・分類・監査ログでコンプライアンスを担保。",
      en: "Six-layer AI safety with scope guards, classifiers, and audit logging for compliance.",
    },
    summary: {
      ja: "スコープガード、コンテンツ分類、監査ログ、コンプライアンスゲートを備えたAI安全層。",
      en: "Scope guard, content classifier, audit logging, and compliance gates for AI systems.",
    },
  },
  {
    id: "meetbot",
    name: "MeetBot",
    vertical: "AI / ML",
    status: "in-dev",
    highlight: "Voice → project",
    enterpriseAngle: {
      ja: "会議音声から要件・タスクへ。レガシー業務のナレッジ抽出と社内ナレッジ化を支援。",
      en: "Voice-to-project pipeline supporting knowledge extraction from operational meetings.",
    },
    summary: {
      ja: "会議アシスタント。音声からプロジェクトパイプラインへ、トランスクリプト抽出まで一貫処理。",
      en: "Meeting assistant with voice-to-project pipeline and transcript extraction.",
    },
  },
  {
    id: "launchgate",
    name: "LaunchGate",
    vertical: "Infrastructure",
    status: "live",
    highlight: "18+ domains",
    enterpriseAngle: {
      ja: "安全なデプロイ自動化。SSL・ヘッダ・品質ゲート付きで、社内向け配信基盤を構築。",
      en: "Landing and app deploy engine with SSL, security headers, and content quality gates.",
    },
    summary: {
      ja: "Nginx設定、SSL自動化、コンテンツ品質ゲートを備えたデプロイエンジン。",
      en: "Nginx configs, SSL automation, and content quality gates for reliable launches.",
    },
  },
];
