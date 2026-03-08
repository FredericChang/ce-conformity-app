import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, ChevronDown, ChevronRight } from 'lucide-react';

const content = {
  zh: {
    title: '機械法規 (EU) 2023/1230',
    subtitle: '關於機械並廢除指令 2006/42/EC 及 73/361/EEC',
    intro: '2023年6月14日歐洲議會與理事會通過，取代機械指令 2006/42/EC，以「條例」(Regulation) 形式直接適用於各成員國，確保全聯盟一致實施。',
    sections: [
      {
        title: '法規性質與目的',
        points: [
          '以「條例」取代「指令」：規則在聯盟內統一適用，不給成員國各自轉化留下差異空間。',
          '目的：協調機械之健康與安全要求、消除貿易障礙；改善並簡化 2006/42/EC 的產品涵蓋與符合性評估程序。',
          '保護對象：人員（尤其勞工與消費者）、適當情況下之家畜與財物、及適用時之環境。',
          '與 2019/1020（市場監督）、765/2008（CE 標記與認證）、1025/2012（調和標準）、768/2008（共同架構）等法規銜接。',
        ],
      },
      {
        title: '適用範圍',
        points: [
          '適用：機械、相關產品（可互換設備、安全組件、起重配件、鏈／繩／織帶、可拆式機械傳動裝置）、部分完成機械。',
          '涵蓋所有供應形式（含遠端銷售）；新投放聯盟市場之產品（含自第三國進口之新舊產品）。',
          '消費者使用或可合理預見由非專業使用者使用時，製造商須在設計與製造中考慮其知識與經驗不足。',
          '納入新興數位技術帶來之安全風險（AI、物聯網、機器人、自主性、連線、惡意第三方等）；軟體若具安全功能且單獨投放市場，可視為安全組件。',
        ],
      },
      {
        title: '排除項目',
        points: [
          '僅供替換用之同型安全組件（由原製造商供應）、遊樂場／核能／武器／軍警用／礦用捲揚／演出用機械。',
          '空運／水運／鐵路運輸工具（但裝於其上之機械仍適用）；航空產品在 2018/1139 涵蓋範圍內者；汽車及其零配件（2018/858）、二/三輪及四輪車（168/2013）、農林拖拉機（167/2013）—但裝於其上之機械仍適用。',
          '競賽用車輛、海船與海上平台及船上機械、家用電器／視聽／IT／辦公設備／低壓開關與電機等（2014/35/EU 或 2014/53/EU 涵蓋者）。',
          '若產品風險已由更具體之聯盟法規涵蓋，本規則在該範圍內不適用。',
        ],
      },
      {
        title: '重要定義',
        points: [
          '機械：具驅動之組裝、至少一部件運動、為特定應用而結合；亦含僅缺現場接線/接能者、僅缺上傳特定應用軟體者、人力起重組裝、為達同一目的而排列與控制之機械或部分完成機械之組裝。',
          '安全組件：實體或數位組件（含軟體），單獨投放市場、具安全功能、其失效會危害人身、非產品運作所必需；軟體單獨投放市場且執行安全功能者亦為安全組件。',
          '實質修改：投放市場或投入使用後，以實體或數位方式修改且非製造商預見或計劃，影響安全（新危害或風險增加）、需新增護罩/防護或額外保護措施者；進行實質修改者須重新符合性評估後始可再投放或投入使用。維修與維護若不影響符合性則不視為實質修改。',
          '使用說明可採數位可列印格式，但經使用者要求須於購買時免費提供紙本（一個月內）；非專業使用者或可合理預見被非專業使用者使用之機械，須提供紙本安全資訊。',
        ],
      },
      {
        title: '經濟營運者義務',
        points: [
          '製造商：設計與製造符合 Annex III 基本健康與安全要求；進行風險評估（含軟體更新與自主行為演進之風險）；編制技術文件（Annex IV）、執行符合性評估、編制 EU 符合性聲明、加貼 CE 標記；保留技術文件與聲明至少 10 年；提供網站／電郵或數位聯絡方式；確保說明與資訊易懂、可取得（數位須可列印與下載、線上至少 10 年）。',
          '自用製造之機械或相關產品亦視為製造商，須符合本規則後始可投入使用。',
          '授權代表：須設於聯盟內；不得委託其代為編制技術文件或履行設計/製造符合性；須代為保存技術文件與聲明、應主管機關要求提供、配合消除風險。',
          '進口商：僅投放合規產品；確認已進行符合性評估、有技術文件與 CE 標記與說明；標示名稱與聯絡方式（含網站或數位聯絡）；保存技術文件與聲明。',
          '經銷商：盡合理注意確保處理不影響合規；任何以自己名義投放或修改致可能影響合規者視為製造商。',
        ],
      },
      {
        title: '符合性評估與 Annex I',
        points: [
          '符合性評估仍為製造商義務；高風險類別（Annex I 所列）須採較嚴格程序並由公告機構參與。',
          'Annex I 分 Part A 與 Part B，依風險評估標準（發生機率與嚴重度、過去傷害、市場監督資訊、事故資料等）決定類別；具自演進行為之安全功能系統等因數據依賴、不透明、自主與連線可能顯著增加風險，須由第三方評估。',
          '僅具完全或部分自演進行為（如機器學習）之安全功能軟體始適用第三方符合性評估；單純執行既定自動功能、無法學習或演進之軟體不適用。',
          '調和標準與委員會制定之共通規格均為自願；符合則推定符合基本要求；亦可採其他技術方案並在技術文件中證明。',
        ],
      },
      {
        title: '其他重點',
        points: [
          'CE 標記為唯一表示符合本規則之標記；成員國須處理可能誤導之其他標記。',
          '展覽會等可展示不合規產品，但須明顯標示不合規且不得在符合前投放市場；演示時須採取適當保護措施。',
          '市場監督：成員國須確保僅合規且正確安裝、維護與使用（或可合理預見使用）下不危及健康安全之機械與相關產品可投放或投入使用。',
          '罰則須有效、相稱且具嚇阻性。廢除 2006/42/EC 與 73/361/EEC；適用日期依條例過渡規定延後，以利經濟營運者與成員國準備。',
        ],
      },
    ],
  },
  en: {
    title: 'Regulation (EU) 2023/1230 on machinery',
    subtitle: 'Repealing Directive 2006/42/EC and Council Directive 73/361/EEC',
    intro: 'Adopted 14 June 2023 by the European Parliament and the Council. It replaces the Machinery Directive 2006/42/EC with a Regulation for uniform application across the Union.',
    sections: [
      {
        title: 'Nature and objectives',
        points: [
          'Regulation (not Directive): uniform application, no room for divergent transposition by Member States.',
          'Objectives: harmonise health and safety requirements for machinery, remove obstacles to trade; improve and simplify product coverage and conformity assessment under 2006/42/EC.',
          'Protection: persons (especially workers and consumers), domestic animals and property where appropriate, environment where applicable.',
          'Aligns with Regulation 2019/1020 (market surveillance), 765/2008 (CE marking, accreditation), 1025/2012 (harmonised standards), Decision 768/2008 (common framework).',
        ],
      },
      {
        title: 'Scope',
        points: [
          'Applies to: machinery, related products (interchangeable equipment, safety components, lifting accessories, chains/ropes/webbing, removable mechanical transmission devices), partly completed machinery.',
          'All forms of supply including distance selling; products new to the Union market (including second-hand imported from third countries).',
          'Where machinery may be used by consumers, manufacturers must take into account their lack of the same knowledge and experience in design and construction.',
          'Covers safety risks from new digital technologies (AI, IoT, robotics, autonomy, connectivity, malicious third parties); software performing a safety function placed independently on the market = safety component.',
        ],
      },
      {
        title: 'Exclusions',
        points: [
          'Safety components as spare parts (identical, from original manufacturer), fairground/amusement, nuclear, weapons, military/police, mining, performance machinery.',
          'Means of transport by air/water/rail (machinery mounted on them still in scope); aviation under 2018/1139; motor vehicles (2018/858), two/three-wheel (168/2013), tractors (167/2013)—machinery on them still in scope.',
          'Competition vehicles; seagoing vessels and offshore units and machinery on board; household/audio-video/IT/office/low-voltage/motors under 2014/35 or 2014/53.',
          'Where risks are covered by more specific Union legislation, this Regulation does not apply to that extent.',
        ],
      },
      {
        title: 'Key definitions',
        points: [
          'Machinery: assembly with drive, at least one moving part, for specific application; also assemblies missing only on-site connection or only software upload for the specific application; human-effort lifting assemblies; assemblies of machinery or partly completed machinery arranged and controlled as an integral whole.',
          'Safety component: physical or digital component (including software), independently placed on market, safety function, failure endangers persons, not necessary for product to function; software placed independently performing a safety function = safety component.',
          'Substantial modification: modification after placing on market/putting into service, by physical or digital means, not foreseen by manufacturer, affecting safety (new hazard or increased risk) requiring new guards/protective devices or additional protective measures; person carrying it out must perform new conformity assessment. Repair/maintenance not affecting compliance ≠ substantial modification.',
          'Instructions may be in digital printable format; manufacturer must provide paper instructions free of charge within one month at user request at purchase. For non-professional users or machinery foreseeably used by them, essential safety information in paper form.',
        ],
      },
      {
        title: 'Economic operators',
        points: [
          'Manufacturers: design and construct per Annex III EHSR; carry out risk assessment (including software updates and intended evolution of behaviour/autonomy); draw up technical documentation (Annex IV), conformity assessment, EU declaration of conformity, affix CE marking; keep documentation and declaration 10 years; provide website/email or digital contact; instructions accessible (digital: printable, downloadable, online for at least 10 years).',
          'Manufacturer who manufactures for own use = manufacturer; product must comply before putting into service.',
          'Authorised representative: established in Union; mandate must not include drawing up technical documentation or design/construction compliance; must keep documentation and declaration, provide to authorities, cooperate on risk elimination.',
          'Importers: place only compliant products; verify conformity assessment, technical documentation, CE marking, instructions; indicate name and contact (including website/digital); keep documentation and declaration.',
          'Distributors: act with due care; anyone placing product on market under own name or modifying so that compliance may be affected = manufacturer.',
        ],
      },
      {
        title: 'Conformity assessment and Annex I',
        points: [
          'Conformity assessment remains manufacturer obligation; higher-risk categories (Annex I) subject to stricter procedure with notified body involvement.',
          'Annex I Part A and Part B; criteria for listing include probability and severity of harm, past harm, market surveillance data, accident data; systems with self-evolving behaviour ensuring safety functions (data dependency, opacity, autonomy, connectivity) subject to third-party assessment.',
          'Third-party assessment for software ensuring safety functions applies only to systems with fully or partially self-evolving behaviour (e.g. machine learning); not to software incapable of learning, programmed only to execute certain automated functions.',
          'Harmonised standards and Commission common specifications voluntary; compliance gives presumption of conformity; alternative technical solutions acceptable if demonstrated in technical documentation.',
        ],
      },
      {
        title: 'Other points',
        points: [
          'CE marking is the only marking guaranteeing compliance with this Regulation; Member States to act on misleading other markings.',
          'Trade fairs: non-compliant products may be displayed if visibly signalled as non-compliant and not for sale until conforming; adequate protection during demonstrations.',
          'Market surveillance: Member States ensure only compliant machinery and related products that do not endanger health and safety when properly installed, maintained and used (or reasonably foreseeable use) may be placed on market or put into service.',
          'Penalties effective, proportionate, dissuasive. Directive 2006/42/EC and 73/361/EEC repealed; application deferred for transition.',
        ],
      },
    ],
  },
};

const MachineryRegulation2023 = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language && i18n.language.startsWith('zh') ? 'zh' : 'en';
  const [expanded, setExpanded] = useState({ 0: true, 1: true });

  const data = content[lang];
  const toggle = (i) => setExpanded((p) => ({ ...p, [i]: !p[i] }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="relative mb-10 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 px-6 py-8 sm:px-8 sm:py-10 shadow-xl">
          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur shadow-lg">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {data.title}
                </h1>
                <p className="mt-1 text-indigo-100 text-sm sm:text-base">
                  {data.subtitle}
                </p>
              </div>
            </div>
          </div>
          <p className="relative mt-4 text-white/90 text-sm leading-relaxed max-w-3xl">
            {data.intro}
          </p>
        </div>

        <div className="space-y-4">
          {data.sections.map((section, i) => {
            const isOpen = expanded[i] !== false;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl bg-white/90 backdrop-blur shadow-lg shadow-gray-200/50 border border-gray-100"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="group w-full px-5 py-4 sm:px-6 flex items-center justify-between gap-4 hover:bg-gray-50/80 text-left"
                >
                  <span className="font-semibold text-gray-800">{section.title}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                    {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-gray-100 bg-gradient-to-b from-gray-50/80 to-white px-5 py-5 sm:px-6 sm:py-6">
                    <ul className="space-y-3">
                      {section.points.map((point, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 pl-1 border-l-2 border-indigo-200/80 py-1 pr-2 hover:border-indigo-400/80 hover:bg-indigo-50/30 rounded-r-lg"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-xs font-semibold mt-0.5">
                            {j + 1}
                          </span>
                          <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-xl bg-gray-100/80 px-4 py-3 text-center text-sm text-gray-600">
          {lang === 'zh'
            ? '全文見：Official Journal L 165, 29.6.2023；PDF 已置於 public/Regulation (UE) 2023 1230 EN.pdf'
            : 'Full text: OJ L 165, 29.6.2023; PDF in public/Regulation (UE) 2023 1230 EN.pdf'}
        </div>
      </div>
    </div>
  );
};

export default MachineryRegulation2023;
