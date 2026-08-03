import type { Locale } from "@/lib/types";

export type CheckPath = "a" | "b" | "c";

export type CheckQuestion = {
  id: string;
  prompt: string;
  options: { id: string; label: string; score: number; gapIds: string[] }[];
};

export type CheckGap = {
  id: string;
  title: string;
  body: string;
  fixFirst: string;
};

type PathPack = {
  outcomeName: string;
  scoreLabel: string;
  questions: CheckQuestion[];
  gaps: CheckGap[];
  bands: { low: string; medium: string; high: string };
  bandHint: { low: string; medium: string; high: string };
};

type CheckLocale = {
  metaTitle: string;
  metaDescription: string;
  umbrella: string;
  intro: string;
  chooseLabel: string;
  paths: {
    a: { title: string; body: string };
    b: { title: string; body: string };
    c: { title: string; body: string };
  };
  next: string;
  back: string;
  unlockTitle: string;
  unlockBody: string;
  nameLabel: string;
  companyLabel: string;
  emailLabel: string;
  unlockCta: string;
  unlocking: string;
  yourGaps: string;
  fixFirstLabel: string;
  planCtaA: string;
  planCtaB: string;
  planCtaC: string;
  secondaryHome: string;
  pack: Record<CheckPath, PathPack>;
};

const ja: CheckLocale = {
  metaTitle: "YOJO ボトルネック診断",
  metaDescription:
    "成長チャネル・現場ループ・創業CTO伴走。約2分でギャップを可視化します。",
  umbrella: "YOJO ボトルネック診断",
  intro:
    "売り込みの前に、いまの詰まりをはっきりさせます。当てはまる扉を選んでください。",
  chooseLabel: "どの詰まりに近いですか？",
  paths: {
    a: {
      title: "成長チャネル",
      body: "問い合わせ・予約・サイト／アプリが弱い",
    },
    b: {
      title: "現場ループ",
      body: "見る→わかる→動く（CV / IIoT / オンプレAI）",
    },
    c: {
      title: "創業CTO伴走",
      body: "売るのは自分、技術パートナーが欲しい",
    },
  },
  next: "次へ",
  back: "戻る",
  unlockTitle: "詳細な5つのギャップを開く",
  unlockBody: "お名前とメールを入れると、あなた向けの理由と「最初に直す一手」が表示されます。",
  nameLabel: "お名前",
  companyLabel: "会社名・プロジェクト名",
  emailLabel: "メールアドレス",
  unlockCta: "結果を受け取る",
  unlocking: "送信中…",
  yourGaps: "あなたに当てはまるギャップ",
  fixFirstLabel: "最初に直す一手",
  planCtaA: "72時間でわかりやすい提案を受ける",
  planCtaB: "72時間でアーキテクチャ提案を受ける",
  planCtaC: "伴走の適性確認を申し込む",
  secondaryHome: "ホームに戻る",
  pack: {
    a: {
      outcomeName: "問い合わせを止めている5つのギャップ",
      scoreLabel: "問い合わせリスク",
      bands: { low: "低", medium: "中", high: "高" },
      bandHint: {
        low: "基礎はあります。細部の設計で伸びしろがあります。",
        medium: "機会損失が出やすい状態です。優先して直す点があります。",
        high: "問い合わせが止まりやすい構造です。先に導線を直しましょう。",
      },
      questions: [
        {
          id: "a1",
          prompt: "サイトや案内で、次に何をしてほしいか一目で分かりますか？",
          options: [
            { id: "y", label: "はっきりしている", score: 0, gapIds: [] },
            { id: "m", label: "なんとなく", score: 1, gapIds: ["cta"] },
            { id: "n", label: "ほぼ分からない / ない", score: 2, gapIds: ["cta"] },
          ],
        },
        {
          id: "a2",
          prompt: "スマホから予約・問い合わせは簡単ですか？",
          options: [
            { id: "y", label: "簡単", score: 0, gapIds: [] },
            { id: "m", label: "面倒だが可能", score: 1, gapIds: ["mobile"] },
            { id: "n", label: "ほぼ無理 / 電話のみ", score: 2, gapIds: ["mobile"] },
          ],
        },
        {
          id: "a3",
          prompt: "何の会社で、何を売っているか、一文で言えますか？（サイト上）",
          options: [
            { id: "y", label: "言える", score: 0, gapIds: [] },
            { id: "m", label: "やや長い", score: 1, gapIds: ["offer"] },
            { id: "n", label: "専門用語だらけ / 不明", score: 2, gapIds: ["offer"] },
          ],
        },
        {
          id: "a4",
          prompt: "信頼の材料（所在・実例・顔）は見えますか？",
          options: [
            { id: "y", label: "十分", score: 0, gapIds: [] },
            { id: "m", label: "少し", score: 1, gapIds: ["trust"] },
            { id: "n", label: "ほぼない", score: 2, gapIds: ["trust"] },
          ],
        },
        {
          id: "a5",
          prompt: "初めての訪問者に、いきなり「相談・見積」だけ求めていませんか？",
          options: [
            { id: "n", label: "先に価値（説明・診断）がある", score: 0, gapIds: [] },
            { id: "m", label: "少し早い気がする", score: 1, gapIds: ["ask"] },
            { id: "y", label: "見積・通話だけ", score: 2, gapIds: ["ask"] },
          ],
        },
      ],
      gaps: [
        {
          id: "cta",
          title: "次の一手が埋もれている",
          body: "訪問者は「何をすればいいか」が分からず離脱します。",
          fixFirst: "トップに一つの明確な行動（例：診断・予約・資料）を置く。",
        },
        {
          id: "mobile",
          title: "モバイル導線が弱い",
          body: "電話以外の入口が細いと、忙しい顧客は戻りません。",
          fixFirst: "スマホで30秒以内に送れる問い合わせ／予約フォームを作る。",
        },
        {
          id: "offer",
          title: "提案が一文で伝わらない",
          body: "専門用語だけだと、誰向けの何の解決か見えません。",
          fixFirst: "「誰の・何の・どう楽になるか」を一文で書き直す。",
        },
        {
          id: "trust",
          title: "信頼の材料が足りない",
          body: "顔・所在・実績がないと、初めての相手は送れません。",
          fixFirst: "会社概要・担当・小さな実績を同じ画面に置く。",
        },
        {
          id: "ask",
          title: "価値の前に見積だけ求めている",
          body: "冷たい訪問者は、いきなり通話や見積に答えません。",
          fixFirst: "小さな診断や説明を先に置き、その後に提案へ進む。",
        },
      ],
    },
    b: {
      outcomeName: "現場の「見る→わかる→動く」を止めている5つのギャップ",
      scoreLabel: "クローズドループ準備度",
      bands: { low: "高い", medium: "中", high: "低い" },
      bandHint: {
        low: "土台があります。狭いセルから閉じたループを完成させやすいです。",
        medium: "部品はあるが、つながっていません。優先セルを決めましょう。",
        high: "見る・わかる・動くが分断されています。まず一つの線で閉じましょう。",
      },
      questions: [
        {
          id: "b1",
          prompt: "検査・監視は、いまどの程度「人の目」に依存していますか？",
          options: [
            { id: "low", label: "すでにカメラ／自動がある", score: 0, gapIds: [] },
            { id: "mid", label: "一部だけ人の目", score: 1, gapIds: ["cv"] },
            { id: "high", label: "ほぼ人の目のみ", score: 2, gapIds: ["cv"] },
          ],
        },
        {
          id: "b2",
          prompt: "PLC / センサー等の信号は、判断やアラートに使えていますか？",
          options: [
            { id: "y", label: "ループに入っている", score: 0, gapIds: [] },
            { id: "m", label: "取れるが使っていない", score: 1, gapIds: ["iiot"] },
            { id: "n", label: "ほぼ使っていない", score: 2, gapIds: ["iiot"] },
          ],
        },
        {
          id: "b3",
          prompt: "手順書・ノウハウは、現場ですぐ引けますか？（社外クラウド前提なし）",
          options: [
            { id: "y", label: "引ける仕組みがある", score: 0, gapIds: [] },
            { id: "m", label: "紙・熟練者頼みが多い", score: 1, gapIds: ["llm"] },
            { id: "n", label: "ほぼ属人", score: 2, gapIds: ["llm"] },
          ],
        },
        {
          id: "b4",
          prompt: "アラートのあと、次の作業まで自動でつながっていますか？",
          options: [
            { id: "y", label: "チェックリスト／起票までつながる", score: 0, gapIds: [] },
            { id: "m", label: "通知だけで止まる", score: 1, gapIds: ["agent"] },
            { id: "n", label: "通知も弱い", score: 2, gapIds: ["agent"] },
          ],
        },
        {
          id: "b5",
          prompt: "PoCは本番ライン／閉域に届いていますか？データは外に出せますか？",
          options: [
            { id: "y", label: "閉域で動いている／方針が明確", score: 0, gapIds: [] },
            { id: "m", label: "PoC止まり・方針あいまい", score: 1, gapIds: ["edge"] },
            { id: "n", label: "クラウド前提で止まっている", score: 2, gapIds: ["edge"] },
          ],
        },
      ],
      gaps: [
        {
          id: "cv",
          title: "見る：まだ人の目に依存",
          body: "検査・安全が視力頼みだと、ばらつきと疲弊が残ります。",
          fixFirst: "一つのカメラセルで欠陥／有無をEdge推論する範囲を決める。",
        },
        {
          id: "iiot",
          title: "信号が判断ループに入っていない",
          body: "取れるデータがあっても、次の一手に使わなければ価値になりません。",
          fixFirst: "既存PLC/センサーから、判断に使う信号を1系統だけ結ぶ。",
        },
        {
          id: "llm",
          title: "わかる：ノウハウが属人のまま",
          body: "手順が頭と紙にあると、夜勤・新人で品質が落ちます。",
          fixFirst: "閉域の文書検索／手順回答（オンプレLLM）を狭い領域で試す。",
        },
        {
          id: "agent",
          title: "動く：アラートでループが切れる",
          body: "通知だけで終わると、現場はまた手動に戻ります。",
          fixFirst: "アラート→チェックリスト→起票まで、狭いエージェントフローを1本。",
        },
        {
          id: "edge",
          title: "本番／データ境界で止まっている",
          body: "PoCが線に乗らない、またはデータ持ち出しが壁になると投資が死にます。",
          fixFirst: "データは施設内。狭い本番セル＋ロボット／ライン連携の条件を先に決める。",
        },
      ],
    },
    c: {
      outcomeName: "そのMVPは、投資・本番に耐えるか？",
      scoreLabel: "本番・伴走準備度",
      bands: { low: "高い", medium: "中", high: "低い" },
      bandHint: {
        low: "伴走の会話に進みやすい状態です。条件をすり合わせましょう。",
        medium: "伸びしろはありますが、役割分担をはっきりさせる必要があります。",
        high: "技術ボトルネックが明確です。まずは適性確認から。",
      },
      questions: [
        {
          id: "c1",
          prompt: "あなた（チーム）は、顧客・資金調達・販売に集中できますか？",
          options: [
            { id: "y", label: "はい、そこに集中したい", score: 0, gapIds: [] },
            { id: "m", label: "半分は自分で技術も触る", score: 1, gapIds: ["own"] },
            { id: "n", label: "技術も全部自分で抱えている", score: 2, gapIds: ["own"] },
          ],
        },
        {
          id: "c2",
          prompt: "いまのプロダクト段階は？",
          options: [
            { id: "live", label: "顧客がいる／課金あり", score: 0, gapIds: [] },
            { id: "mvp", label: "デモ〜初期MVP", score: 1, gapIds: ["stage"] },
            { id: "idea", label: "アイデア〜スライド中心", score: 2, gapIds: ["stage"] },
          ],
        },
        {
          id: "c3",
          prompt: "技術のボトルネックはどれに近いですか？",
          options: [
            { id: "polish", label: "ある程度動くが本番品質が足りない", score: 0, gapIds: ["eng"] },
            { id: "gap", label: "CTO／実装パートナーがいない", score: 2, gapIds: ["eng"] },
            { id: "diy", label: "ノーコード／断片ツールだけ", score: 2, gapIds: ["eng"] },
          ],
        },
        {
          id: "c4",
          prompt: "伴走の形として、現金＋株式などの条件交渉は可能ですか？",
          options: [
            { id: "y", label: "誠実に話し合える", score: 0, gapIds: [] },
            { id: "m", label: "まずは現金のみ希望", score: 1, gapIds: ["align"] },
            { id: "n", label: "無償のCTOだけ希望", score: 2, gapIds: ["align"] },
          ],
        },
        {
          id: "c5",
          prompt: "選別があること（誰とでも組まない）を理解できますか？",
          options: [
            { id: "y", label: "理解できる", score: 0, gapIds: [] },
            { id: "m", label: "まあ分かる", score: 1, gapIds: ["select"] },
            { id: "n", label: "すぐ組んでほしい", score: 2, gapIds: ["select"] },
          ],
        },
      ],
      gaps: [
        {
          id: "own",
          title: "役割がまだ分かれていない",
          body: "創業者が技術も全部抱えると、販売が止まります。",
          fixFirst: "市場／資金は創業者、プロダクトは技術パートナーと分ける合意から。",
        },
        {
          id: "stage",
          title: "段階と期待がずれている",
          body: "スライドだけの段階と、本番MVPでは伴走の形が違います。",
          fixFirst: "90日で何を「動く本番」とするか、成功条件を一文で書く。",
        },
        {
          id: "eng",
          title: "エンジニアリングの穴が本体",
          body: "CTO不在や断片ツールだけでは、投資家も顧客も続きません。",
          fixFirst: "埋め込みCTO＋実装チームで、本番に耐える一本のプロダクトに寄せる。",
        },
        {
          id: "align",
          title: "条件の前提が合っていない",
          body: "無償のみの伴走は続きません。現金フロアや株式は対話が必要です。",
          fixFirst: "現金／株式／期間の希望レンジを先に共有する（確定は適性確認後）。",
        },
        {
          id: "select",
          title: "選別プロセスを飛ばそうとしている",
          body: "私たちは少数の伴走に絞ります。急ぐほど、ミスマッチが増えます。",
          fixFirst: "適性確認（チーム・市場・誠実さ）を受け、合えば条件交渉へ。",
        },
      ],
    },
  },
};

const en: CheckLocale = {
  metaTitle: "YOJO Bottleneck Diagnostic",
  metaDescription:
    "Growth channel, floor intelligence, or founder CTO partnership — map your gaps in about two minutes.",
  umbrella: "YOJO Bottleneck Diagnostic",
  intro: "Before a pitch, name the bottleneck. Pick the door that fits.",
  chooseLabel: "Which bottleneck is closest?",
  paths: {
    a: {
      title: "Growth channel",
      body: "Inquiries, bookings, site / app friction",
    },
    b: {
      title: "Floor intelligence",
      body: "See → understand → act (CV / IIoT / on-prem AI)",
    },
    c: {
      title: "Embedded CTO",
      body: "You sell; you need a technical co-build partner",
    },
  },
  next: "Continue",
  back: "Back",
  unlockTitle: "Unlock your five gaps",
  unlockBody: "Name and email unlock the reasons that match your answers — plus what to fix first.",
  nameLabel: "Your name",
  companyLabel: "Company / project",
  emailLabel: "Email",
  unlockCta: "Show my results",
  unlocking: "Sending…",
  yourGaps: "Gaps that match you",
  fixFirstLabel: "Fix this first",
  planCtaA: "Get a simple plan in 72 hours",
  planCtaB: "Get an architecture plan in 72 hours",
  planCtaC: "Request partnership diligence",
  secondaryHome: "Back to home",
  pack: {
    a: {
      outcomeName: "5 Gaps Blocking Online Inquiries",
      scoreLabel: "Inquiry risk",
      bands: { low: "Low", medium: "Medium", high: "High" },
      bandHint: {
        low: "Basics are in place. Design details will compound.",
        medium: "You’re likely leaving inquiries on the table.",
        high: "The path to inquire is broken. Fix the funnel first.",
      },
      questions: [
        {
          id: "a1",
          prompt: "Can a visitor tell the one next action in one glance?",
          options: [
            { id: "y", label: "Yes, clearly", score: 0, gapIds: [] },
            { id: "m", label: "Somewhat", score: 1, gapIds: ["cta"] },
            { id: "n", label: "No / missing", score: 2, gapIds: ["cta"] },
          ],
        },
        {
          id: "a2",
          prompt: "Is booking or contact easy on a phone?",
          options: [
            { id: "y", label: "Easy", score: 0, gapIds: [] },
            { id: "m", label: "Possible but awkward", score: 1, gapIds: ["mobile"] },
            { id: "n", label: "Phone-only / broken", score: 2, gapIds: ["mobile"] },
          ],
        },
        {
          id: "a3",
          prompt: "Can the site say who you help and how — in one sentence?",
          options: [
            { id: "y", label: "Yes", score: 0, gapIds: [] },
            { id: "m", label: "Too long", score: 1, gapIds: ["offer"] },
            { id: "n", label: "Jargon / unclear", score: 2, gapIds: ["offer"] },
          ],
        },
        {
          id: "a4",
          prompt: "Are trust signals visible (who, where, proof)?",
          options: [
            { id: "y", label: "Enough", score: 0, gapIds: [] },
            { id: "m", label: "Thin", score: 1, gapIds: ["trust"] },
            { id: "n", label: "Almost none", score: 2, gapIds: ["trust"] },
          ],
        },
        {
          id: "a5",
          prompt: "Do you ask for a quote/call before giving any value?",
          options: [
            { id: "n", label: "Value first (guide / check)", score: 0, gapIds: [] },
            { id: "m", label: "A bit early", score: 1, gapIds: ["ask"] },
            { id: "y", label: "Quote / call only", score: 2, gapIds: ["ask"] },
          ],
        },
      ],
      gaps: [
        {
          id: "cta",
          title: "Next step is buried",
          body: "Visitors leave when they don’t know what to do.",
          fixFirst: "Put one clear action above the fold.",
        },
        {
          id: "mobile",
          title: "Weak mobile path",
          body: "Busy buyers won’t fight a desktop-only form.",
          fixFirst: "Ship a 30-second mobile contact / booking path.",
        },
        {
          id: "offer",
          title: "Offer isn’t one sentence",
          body: "Jargon hides who you help and why it matters.",
          fixFirst: "Rewrite: who / pain / outcome in one line.",
        },
        {
          id: "trust",
          title: "Missing trust signals",
          body: "Strangers won’t send details to a faceless page.",
          fixFirst: "Add company facts, faces, and one proof point.",
        },
        {
          id: "ask",
          title: "Asking before giving",
          body: "Cold traffic won’t book a call on first touch.",
          fixFirst: "Lead with a small diagnosis, then the plan.",
        },
      ],
    },
    b: {
      outcomeName: "5 Gaps Blocking On-Site See–Understand–Act",
      scoreLabel: "Closed-loop readiness",
      bands: { low: "Strong", medium: "Medium", high: "Weak" },
      bandHint: {
        low: "Foundation exists — close one cell into a full loop.",
        medium: "Parts exist but aren’t connected. Pick a priority cell.",
        high: "See / understand / act are siloed. Close one line first.",
      },
      questions: [
        {
          id: "b1",
          prompt: "How much do inspection / monitoring still depend on human eyes?",
          options: [
            { id: "low", label: "Cameras / automation already", score: 0, gapIds: [] },
            { id: "mid", label: "Partly human", score: 1, gapIds: ["cv"] },
            { id: "high", label: "Almost all human eyes", score: 2, gapIds: ["cv"] },
          ],
        },
        {
          id: "b2",
          prompt: "Do PLC / sensor signals feed decisions or alerts today?",
          options: [
            { id: "y", label: "Yes, in the loop", score: 0, gapIds: [] },
            { id: "m", label: "Available but unused", score: 1, gapIds: ["iiot"] },
            { id: "n", label: "Barely used", score: 2, gapIds: ["iiot"] },
          ],
        },
        {
          id: "b3",
          prompt: "Can operators retrieve procedures on-site without public cloud?",
          options: [
            { id: "y", label: "Yes", score: 0, gapIds: [] },
            { id: "m", label: "Mostly paper / veterans", score: 1, gapIds: ["llm"] },
            { id: "n", label: "Tribal knowledge", score: 2, gapIds: ["llm"] },
          ],
        },
        {
          id: "b4",
          prompt: "After an alert, does work continue automatically?",
          options: [
            { id: "y", label: "Checklist / ticket closes the loop", score: 0, gapIds: [] },
            { id: "m", label: "Notification only", score: 1, gapIds: ["agent"] },
            { id: "n", label: "Weak alerting", score: 2, gapIds: ["agent"] },
          ],
        },
        {
          id: "b5",
          prompt: "Have PoCs reached the line / closed network? Must data leave?",
          options: [
            { id: "y", label: "On-prem path is clear", score: 0, gapIds: [] },
            { id: "m", label: "PoC stuck / unclear policy", score: 1, gapIds: ["edge"] },
            { id: "n", label: "Blocked by cloud / data exit", score: 2, gapIds: ["edge"] },
          ],
        },
      ],
      gaps: [
        {
          id: "cv",
          title: "See: still eye-dependent",
          body: "Manual inspection keeps variance and fatigue in the line.",
          fixFirst: "Scope one camera cell with on-site inference.",
        },
        {
          id: "iiot",
          title: "Signals not in the decision loop",
          body: "Unused PLC data is cost without outcome.",
          fixFirst: "Wire one sensor/PLC feed into a decision or alert.",
        },
        {
          id: "llm",
          title: "Understand: know-how is tribal",
          body: "Paper and veterans don’t scale nights and new hires.",
          fixFirst: "Pilot on-prem retrieval for one procedure set.",
        },
        {
          id: "agent",
          title: "Act: alerts don’t close the loop",
          body: "Notifications without next steps return work to humans.",
          fixFirst: "One narrow flow: alert → checklist → ticket.",
        },
        {
          id: "edge",
          title: "Blocked at production / data boundary",
          body: "PoCs die when the line or data-sovereignty wall hits.",
          fixFirst: "Define on-prem cell + rollout rules before more demos.",
        },
      ],
    },
    c: {
      outcomeName: "Is Your MVP Investable / Production-Ready?",
      scoreLabel: "Partnership readiness",
      bands: { low: "Strong", medium: "Medium", high: "Weak" },
      bandHint: {
        low: "Worth a diligence conversation — align terms next.",
        medium: "Potential, but roles and stage need clarity.",
        high: "Engineering is the bottleneck — start with diligence.",
      },
      questions: [
        {
          id: "c1",
          prompt: "Can you focus on customers, fundraising, and sales?",
          options: [
            { id: "y", label: "Yes — that’s the plan", score: 0, gapIds: [] },
            { id: "m", label: "I still do half the tech", score: 1, gapIds: ["own"] },
            { id: "n", label: "I’m carrying all engineering", score: 2, gapIds: ["own"] },
          ],
        },
        {
          id: "c2",
          prompt: "What stage is the product?",
          options: [
            { id: "live", label: "Paying / active users", score: 0, gapIds: [] },
            { id: "mvp", label: "Demo → early MVP", score: 1, gapIds: ["stage"] },
            { id: "idea", label: "Mostly slides / idea", score: 2, gapIds: ["stage"] },
          ],
        },
        {
          id: "c3",
          prompt: "Where is the engineering gap?",
          options: [
            { id: "polish", label: "Works, not production-grade", score: 0, gapIds: ["eng"] },
            { id: "gap", label: "No CTO / build partner", score: 2, gapIds: ["eng"] },
            { id: "diy", label: "No-code / fragments only", score: 2, gapIds: ["eng"] },
          ],
        },
        {
          id: "c4",
          prompt: "Can you discuss cash + equity partnership terms in good faith?",
          options: [
            { id: "y", label: "Yes", score: 0, gapIds: [] },
            { id: "m", label: "Cash-only for now", score: 1, gapIds: ["align"] },
            { id: "n", label: "Want free CTO only", score: 2, gapIds: ["align"] },
          ],
        },
        {
          id: "c5",
          prompt: "Do you accept that we select carefully (not everyone)?",
          options: [
            { id: "y", label: "Yes", score: 0, gapIds: [] },
            { id: "m", label: "Mostly", score: 1, gapIds: ["select"] },
            { id: "n", label: "Want an instant yes", score: 2, gapIds: ["select"] },
          ],
        },
      ],
      gaps: [
        {
          id: "own",
          title: "Roles aren’t split yet",
          body: "Founder-as-only-engineer stalls GTM.",
          fixFirst: "Agree: you own market; we own product engineering.",
        },
        {
          id: "stage",
          title: "Stage vs expectation mismatch",
          body: "Slide-stage and production MVP need different partnerships.",
          fixFirst: "Write a 90-day definition of a working production slice.",
        },
        {
          id: "eng",
          title: "Engineering hole is the core risk",
          body: "No CTO / fragile stack won’t hold customers or investors.",
          fixFirst: "Embed CTO + team to one production-ready product line.",
        },
        {
          id: "align",
          title: "Terms assumptions don’t match",
          body: "Free-only CTO work doesn’t sustain a real team.",
          fixFirst: "Share cash/equity/time ranges before diligence ends.",
        },
        {
          id: "select",
          title: "Skipping selection",
          body: "We take few embeds. Rushing creates bad fits.",
          fixFirst: "Complete diligence on team, market, and integrity first.",
        },
      ],
    },
  },
};

export function getCheckContent(locale: Locale): CheckLocale {
  return locale === "ja" ? ja : en;
}

export function scoreToBand(
  path: CheckPath,
  total: number,
): "low" | "medium" | "high" {
  // Higher total = more risk / weaker readiness
  if (total <= 3) return "low";
  if (total <= 6) return "medium";
  return "high";
}

export function collectGaps(
  pack: PathPack,
  selectedGapIds: string[],
): CheckGap[] {
  const order = pack.gaps.map((g) => g.id);
  const unique = [...new Set(selectedGapIds)];
  const picked = order
    .filter((id) => unique.includes(id))
    .map((id) => pack.gaps.find((g) => g.id === id)!)
    .filter(Boolean);
  if (picked.length >= 3) return picked.slice(0, 5);
  // Pad with top gaps so they always see substance
  for (const g of pack.gaps) {
    if (picked.length >= 5) break;
    if (!picked.find((p) => p.id === g.id)) picked.push(g);
  }
  return picked.slice(0, 5);
}
