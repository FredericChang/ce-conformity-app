import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronRight, FileText, BookOpen } from 'lucide-react';

// 各章作業內容（中英雙語），整理自 public/Ch1–Ch5 Assignments PDF
const assignmentsData = {
  zh: {
    pageTitle: '各章作業',
    pageSubtitle: '教材各章作業題目與詳解，中英雙語呈現。',
    chapters: [
      {
        title: '第 1 章：機械安全原則',
        items: [
          { q: '題目 1-1：情境中，這台機器正式「投放市場」的日期為何？（訂單 2023/4/1，中國製造，2023/6/1 出貨給歐盟終端用戶，6/20 抵達海關，遠端銷售）', a: '答案：2023 年 6 月 1 日。該日歐盟終端用戶向歐盟外製造商購買，產品已製造完成並準備出貨（見 Blue Guide 2.12 例 5）。' },
          { q: '題目 1-2：歐盟外製造商能否不透過授權代表／進口商／經銷商，直接將機器賣給歐盟境內終端用戶？', a: '答案：可以。法規並未強制要求製造商僅能透過歐洲進口商或經銷商在歐盟市場供貨。' },
          { q: '題目 1-3：若終端用戶（生產公司）向第三方購買多台新機械，並由自家技術部門組裝成「組裝機械」，該終端用戶是否須自行施加 CE 標記並履行適用產品指令之全部義務？', a: '答案：是。須對整個組裝提供符合機械指令的 CE 標記。見教材「12 Machinery Directive」。' },
          { q: '題目 1-4：下列何者屬於「機械」？生產線（具總體控制）、車床、折彎機（手動／自動）、千斤頂（車用）。', a: '答案：生產線（具總體控制）是、車床是、手動折彎機否／自動折彎機是、千斤頂是。' },
          { q: '題目 1-5：橫梁、千斤頂、四腿吊索、手動鏈條吊車是否屬於起重配件？哪些須加貼 CE？', a: '答案：皆屬起重配件定義範圍。橫梁與四腿吊索為起重配件，千斤頂與手動鏈條吊車為機械；全部均須 CE 標記。' },
          { q: '題目 1-6：輸送帶（新投放市場）是否須依機械指令加貼 CE？', a: '答案：是。輸送帶符合機械之基本定義。' },
          { q: '部分完成機械範例 1–6：輸送帶未裝軟體／驅動、檢修門聯鎖由客戶實作、護欄靠牆、護欄由客戶自裝、大機在客戶現場完工、工業機器人無圍欄與應用等情境，是否得以「部分完成機械」供應？', a: '答案：詳見教材範例。摘要：僅缺軟體且由整合商／客戶依說明安裝者可為機械；檢修門聯鎖屬機械範圍則須以機械 CE；護欄依說明靠牆安裝且已納入風險評估者為機械；大機在客戶處完工者完工後才完成符合性評估與 CE；無圍欄與特定應用之工業機器人可為部分完成機械。' },
          { q: '作業（模組 1）：1) 選定作為案例的機器之簡要描述。2) 預期使用與可合理預見誤用。3) 判定適用之指令。下次上課繳交。', a: '—' },
        ],
      },
      {
        title: '第 2 章：CE 流程與文件',
        items: [
          { q: '定理 1：經公告機構檢驗我生產的機器後，我的產品責任即告終止。對／錯？', a: '答案：錯。製造商對其投放市場的產品始終負有產品責任。公告機構僅確認程序是否正確履行及產品是否安全、可否施加 CE 標記。' },
          { q: '題目 2：技術檔案是否為內容固定的文件？', a: '答案：否。技術檔案用於證明投放市場產品之安全，適用單台與量產。量產或對先前設計之（小）修改會使技術檔案隨之更新；客戶回饋導致設計修改時，技術檔案也須更新。' },
          { q: '定理 2：符合性聲明是製造商藉以「證明」已遵守適用法規的正式文件。對／錯？', a: '答案：錯。聲明並不能「證明」；證明在技術檔案中。聲明僅旨在聲明製造商已履行全部義務。' },
          { q: '題目 2：如何決定哪些資訊應標示在機器上、以及應標示什麼？', a: '答案：基本要求提供指引（如 Annex I 1.2.2 控制裝置、1.7 一般、3.6.2 移動式機械、4.3 起重機械與工具、6.5 載人升降機械），但風險評估（殘餘風險）也須決定是否須在機器上提供資訊。' },
          { q: '題目 3：型號牌應放在機器何處？', a: '答案：法規對型號牌位置無具體要求，由製造商自行決定。限制：須可見、可讀、不易磨滅。' },
          { q: '作業（模組 2）：1) 判定適用之基本要求及尚須關注者。2) 須進行之試驗。3) 是否須動用公告機構並說明理由。4) 適用之符合性模組。5) 使用說明、技術檔案與 EC 符合性聲明之架構。6) 設計型號牌（列出將標示之資料）。下次上課繳交（Word 寄送）。', a: '—' },
        ],
      },
      {
        title: '第 3 章：風險評估',
        items: [
          { q: '練習 2：針對所選案例機器，描述三項相關的機械界限。', a: '全體討論。' },
          { q: '練習 3：針對所選案例機器，依 EN ISO 12100 附錄 B 示例列出三項相關危害。', a: '全體討論。' },
          { q: '練習 4：依 EN ISO 12100 對（其中一台）台式鑽床進行風險評估。', a: '全體討論。' },
          { q: '練習 5：使用風險圖法對（其中一台）台式鑽床進行風險評估；使用 Tab 3 後附之記錄表。', a: '全體討論。' },
          { q: '練習 6：將練習 4 之危害抄至記錄表，以 Kinney & Wiruth 法進行風險評估。', a: '全體討論。' },
          { q: '作業（模組 3）：1) 對所選案例機器進行風險評估（含機械界限與風險評價）。2) 說明所採用的風險評估方法及理由。下次上課繳交。', a: '—' },
        ],
      },
      {
        title: '第 4 章：風險降低與標準',
        items: [
          { q: '題目 4-1：緊急停止裝置屬於強制順序的哪一步？', a: '答案：互補保護措施，即第 2 步。機械指令：緊急停止須為其他防護之備援而非替代。EN IEC 60204-1：緊急停止與緊急斷電為互補保護措施，非主要風險降低手段。' },
          { q: '練習 4-2：鑽床之下列措施各屬強制順序哪一步？聯鎖護罩（V 帶）、護罩之安全控制、「須戴安全眼鏡」象形圖、緊急停止裝置、隨機操作說明。', a: '答案：聯鎖護罩與其安全控制屬第 2 步；象形圖與操作說明屬第 3 步（使用資訊）；緊急停止屬第 2 步。' },
          { q: '題目 4-3：EN 13854、EN 614-1、EN 1010-5、EN IEC 62061、EN IEC 10218-1 各屬何類標準？', a: '答案：EN 13854（擠壓距離）B 類；EN 614-1（人因設計原則）B 類；EN 1010-5（瓦楞紙機）C 類；EN IEC 62061（SIL）B 類；EN IEC 10218-1（工業機器人）C 類。' },
          { q: '題目 4-4：有哪些工具可判斷風險評估與風險降低適用哪些標準？', a: '答案：1) 調和標準清單。2) NEN 網站、Google 或 NEN Connect 搜尋。3) NEN-EN-ISO 12100 中對其他標準之大量引用。' },
          { q: '練習 4-5（EN ISO 13857）：伸手穿過護欄至風扇之距離是否足夠？若否，如何符合？', a: '答案：依標準至少應為 80 mm。可透過增大開口形狀（圓／方）或將距離增至 80 mm 等方式符合。' },
          { q: '練習 4-6／4-7：停機時間 0.3 s，求最小安全距離（公式 S = K×T + C 或伸手／步行速度）。', a: '答案：4-6 例 S = 1.6×0.3 + 0.85 = 1.33 m。4-7 依解析度與伸手／步行速度擇 S ≥ 0.5 m 等。' },
          { q: '題目 4-8：下列何者為可用 PL/SIL 標準開發之安全功能？危險運動啟動之聲音信號、護欄、偵測有人於危險區則禁止啟動、緊急停止。', a: '答案：聲音信號屬第 3 步（警告），非安全功能。護欄為第 2 步但非控制系統。偵測有人則禁止啟動為安全功能（第 2 步、由控制系統執行）。緊急停止為安全功能。' },
          { q: '作業（模組 4）：1) 案例是否有 C 類標準。2) 依模組 3 風險評估，依強制順序決定應採之風險降低措施。3) 列出所採用之標準並舉 3–5 例說明危害與措施之應用。下次上課繳交。', a: '—' },
        ],
      },
      {
        title: '第 5 章：工作設備指令',
        items: [
          { q: '題目 5-1：機械指令附錄 I 所規定之主題，與工作設備指令之要求有何異同？（服務、啟動/停止、強度/穩定性、移動部件、照明、溫度、警報、維護安裝拆裝、警告、火災爆炸、電氣）', a: '相同點：皆屬基本健康與安全要求、風險為本、須載於技術檔案與符合性評估、多結合設計與使用資訊。相異點：啟動/停止有專門小節與緊急停止要求；移動部件與防護及安全距離緊密連結；電氣常與低電壓指令重疊；其餘見章節重點或實務指南。' },
          { q: '練習 5-2：依工作設備指令 2.8 條（移動部件須有護屏或防護裝置），兩條輸送帶皆可觸及、出料區可忽略時，是否合規？', a: '答案：否。鏈條/鏈輪與皮帶/滾筒等危險運動可觸及且未裝設護屏或防護裝置。' },
          { q: '練習 5-3：折彎機控制盤上之綠色按鈕符合緊急停止要求時，是否符合 2.4 條（緊急停止裝置）？', a: '答案：是。但工作設備指令第 2.1 節未獲遵守。' },
          { q: '練習 5-4：1) 何謂工作設備？2) 工作設備指令涵蓋哪些主題？3) 在荷蘭法何處？4) 上位指令為何？', a: '答案：1) 工作場所使用之所有機械、設備、工具與裝置（指令第 2 條）。2) 附件 1 最低要求及移動式、起重、高處作業等額外要求。3) 工作條件法、工作條件法令第 7 章。4) 框架指令 89/391/EEC。' },
        ],
      },
    ],
  },
  en: {
    pageTitle: 'Chapter Assignments',
    pageSubtitle: 'Assignment questions and elaborations by chapter, in Chinese and English.',
    chapters: [
      {
        title: 'Chapter 1: Principles of machine safety',
        items: [
          { q: 'Question 1-1: In the scenario (order 1 Apr 2023, made in China, shipped 1 Jun 2023 to EU end user, arrives customs 20 Jun, distance selling), on what date is the machine formally placed on the market?', a: 'Answer: 1 June 2023. That is when the EU end user purchased from the manufacturer outside the EU; the product is already manufactured and ready to be shipped (Blue Guide 2.12 example 5).' },
          { q: 'Question 1-2: Can the manufacturer from outside the EU sell this machine directly to the end user in the EU without an authorised representative/importer or distributor?', a: 'Answer: Yes. There is no obligation that a manufacturer outside the EU may only offer the product on the EU market through a European importer or distributor.' },
          { q: 'Question 1-3: If an end user (production company) purchases various new machinery from third parties and has them assembled by their own technical service into an assembly of machinery, must the end user apply CE marking and comply with all obligations of the applicable product directives?', a: 'Answer: Yes. The complete assembly must be provided with CE marking in accordance with the Machinery Directive. See sheets "12 Machinery Directive".' },
          { q: 'Question 1-4: Which of the following is machinery? Production line with overarching control, Lathe, Press brake (manual/automatic), Jack (car).', a: 'Answer: Production line yes, Lathe yes, Press brake manual no / automatic yes, Jack yes.' },
          { q: 'Question 1-5: Do spreader beam, jack, four-leg sling, manual chain hoist fall under lifting accessories? Which must have CE?', a: 'Answer: All fall within the definition. Spreader beam and four-leg sling as lifting accessories; jack and manual chain hoist as machinery; all require CE marking.' },
          { q: 'Question 1-6: Is CE marking necessary for a conveyor belt (newly placed on the market) under the Machinery Directive?', a: 'Answer: Yes. A conveyor belt meets the definition of machinery.' },
          { q: 'Partly completed machinery examples 1–6: Conveyor without software/drive, interlocking hatch by customer, guard against wall, guard by customer, large machine completed at customer, industrial robot without cell/guards—may they be supplied as partly completed machinery?', a: 'See course examples. Summary: Only missing software with clear assembly by integrator/customer = machinery; interlocking hatch in scope = machinery with CE; guard per instructions against wall in risk assessment = machinery; completed at customer = conformity assessment and CE after completion; robot without guards and specific application = partly completed machinery.' },
          { q: 'Homework module 1: 1) Clear description of chosen machine (case study). 2) Intended use and foreseeable misuse. 3) Which directives apply. Submit by next lesson.', a: '—' },
        ],
      },
      {
        title: 'Chapter 2: CE process and documentation',
        items: [
          { q: 'Theorem 1: After inspection by a Notified Body of a machine I produced, my liability ceases. True/False?', a: 'Answer: False. The manufacturer is always product liable. The Notified Body only indicates whether the procedure was correctly followed and whether the product is safe and CE marking can be applied.' },
          { q: 'Question 2: Is the Technical File a document with fixed content?', a: 'Answer: No. The TF demonstrates the safety of a product placed on the market (single units and series). For series or (small) design changes, the TF is updated; customer feedback may require design changes and thus TF updates.' },
          { q: 'Theorem 2: A declaration of conformity is a formal document by which the manufacturer demonstrates that applicable legislation has been followed. True/False?', a: 'Answer: False. A declaration does not demonstrate; the substantiation is in the Technical File. The declaration only states that the manufacturer has complied with all obligations.' },
          { q: 'Question 2: How do I determine what information should be on the machine and what it should be?', a: 'Answer: Essential requirements give guidance (e.g. Annex I 1.2.2, 1.7, 3.6.2, 4.3, 6.5); the risk assessment (residual risks) must also determine whether information must be provided on the machine.' },
          { q: 'Question 3: Where should the type plate be placed?', a: 'Answer: No specific requirements for location. The manufacturer decides. Restrictions: visible, legible, indelible.' },
          { q: 'Homework module 2: 1) Which essential requirements apply and which need attention. 2) Which tests must be carried out. 3) Whether a Notified Body must be involved and why. 4) Which conformity modules apply. 5) Set-up for instructions, TF and EC declaration. 6) Design a type plate (data to be on it). Submit next lesson (Word by email).', a: '—' },
        ],
      },
      {
        title: 'Chapter 3: Risk assessment',
        items: [
          { q: 'Exercise 2: Describe three relevant machinery limits for your chosen example machine.', a: 'Plenary discussion.' },
          { q: 'Exercise 3: Describe three relevant hazards using the example list from Annex B of EN ISO 12100.', a: 'Plenary discussion.' },
          { q: 'Exercise 4: Carry out a risk assessment for (one of) the pedestal drilling machines in accordance with EN ISO 12100.', a: 'Plenary discussion.' },
          { q: 'Exercise 5: Carry out a risk assessment using the risk graph method; use the entry sheets at the back of Tab 3.', a: 'Plenary discussion.' },
          { q: 'Exercise 6: Copy the hazards of exercise 4 onto the entry sheet. Carry out the risk assessment using the Kinney & Wiruth method.', a: 'Plenary discussion.' },
          { q: 'Homework module 3: 1) Carry out a risk assessment for your chosen example machine (including machinery limits and risk evaluation). 2) Describe which risk assessment method you used and why. Submit next lesson.', a: '—' },
        ],
      },
      {
        title: 'Chapter 4: Risk reduction and standards',
        items: [
          { q: 'Question 4-1: To which step does the E-STOP device belong?', a: 'Answer: Complementary protective measures, step 2. Machinery Directive: emergency stop must be back-up to other safeguarding, not a substitute. EN IEC 60204-1: emergency stop and emergency switching off are complementary protective measures.' },
          { q: 'Exercise 4-2: For the drill press, to which steps do the following belong? Function-blocking shield (v-belt), safety control of the guard, "safety glasses mandatory" pictogram, emergency stop, operating instructions.', a: 'Answer: Shield and its safety control step 2; pictogram and instructions step 3 (information for use); emergency stop step 2.' },
          { q: 'Question 4-3: What type of standards are EN 13854, EN 614-1, EN 1010-5, EN IEC 62061, EN IEC 10218-1?', a: 'Answer: EN 13854 (entrapment distances) Type B; EN 614-1 (ergonomic design) Type B; EN 1010-5 (corrugated board machines) Type C; EN IEC 62061 (SIL) Type B; EN IEC 10218-1 (industrial robots) Type C.' },
          { q: 'Question 4-4: What tools are there to determine which standards apply to risk assessment and reduction?', a: 'Answer: 1) List of harmonised standards. 2) Search on NEN website, Google and/or NEN Connect. 3) References in NEN-EN-ISO 12100 to other standards.' },
          { q: 'Exercise 4-5 (EN ISO 13857): Is the distance to the fan sufficient when reaching through the guard? If not, how to comply?', a: 'Answer: According to the standard at least 80 mm. Options: increase opening dimensions or distance to 80 mm.' },
          { q: 'Exercise 4-6/4-7: Stopping time 0.3 s; determine minimum safety distance (formula S = K×T + C or reaching/walking speed).', a: 'Answer: 4-6 e.g. S = 1.6×0.3 + 0.85 = 1.33 m. 4-7 depending on resolution and speed; S ≥ 0.5 m etc.' },
          { q: 'Question 4-8: Which of the following are safety functions (SF) that can be developed with PL/SIL? Audible signal for start of dangerous movement, guard around dangerous part, prevent movement while person in danger zone, emergency stop.', a: 'Answer: Audible signal is step 3 (warning), not SF. Guard is step 2 but not control system. Prevent movement when person detected = SF (step 2, control system). Emergency stop = SF.' },
          { q: 'Homework module 4: 1) Is a type C standard available for the case? 2) Following the risk assessment (module 3), determine risk mitigation measures taking into account the imperative sequence. 3) List standards applied and give 3–5 examples of hazards and measures. Submit next lesson.', a: '—' },
        ],
      },
      {
        title: 'Chapter 5: Work Equipment Directive',
        items: [
          { q: 'Question 5-1: What are the differences and similarities with the subjects on which the Machinery Directive sets requirements in Annex I? (service, start/stop, strength/stability, moving parts, lighting, temperature, alarm, maintenance/installation/disassembly, warnings, fire/explosion, electricity)', a: 'Similarities: all are essential health and safety requirements; risk-based; must be documented in technical file and conformity assessment; most combine design and information for use. Differences: start/stop has own subsections and emergency stop; moving parts linked to guards and safety distances; electricity overlaps with LVD; etc. See Practical Guide or Chapter Highlights.' },
          { q: 'Exercise 5-2: Under WED par. 2.8 (moving parts—screens or protective devices), both conveyor belts accessible, discharge area disregarded. Does the work equipment comply?', a: 'Answer: No. Various dangerous movements (chain/sprocket, belt/roller) are accessible and not equipped with screens or protective devices.' },
          { q: 'Exercise 5-3: The green button on the press brake control panel meets emergency stop requirements. Does the equipment comply with par. 2.4 (emergency stop device)?', a: 'Answer: Yes. The work equipment is equipped with an emergency stop device. PS. WED section 2.1 is not complied with.' },
          { q: 'Exercise 5-4: 1) What is meant by work equipment? 2) What topics are covered in the Work Equipment Directive? 3) Where in Dutch law? 4) What is the overarching Directive?', a: 'Answer: 1) All machinery, equipment, tools and installations used at the workplace (Art. 2). 2) Annex 1 minimum requirements and additional for mobile, lifting, work at height. 3) Working Conditions Act, Decree Chapter 7. 4) Framework Directive 89/391/EEC.' },
        ],
      },
    ],
  },
};

const ChapterAssignments = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language && i18n.language.startsWith('zh') ? 'zh' : 'en';
  const [expanded, setExpanded] = useState({ 0: true, 1: true });

  const data = assignmentsData[lang];
  const toggle = (i) => setExpanded((p) => ({ ...p, [i]: !p[i] }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="relative mb-10 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 px-6 py-8 sm:px-8 sm:py-10 shadow-xl">
          <div className="relative flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur shadow-lg">
                <FileText className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {data.pageTitle}
                </h1>
                <p className="mt-1 text-emerald-100 text-sm sm:text-base">
                  {data.pageSubtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {data.chapters.map((chapter, i) => {
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
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-md">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <span className="font-semibold text-gray-800 text-base sm:text-lg truncate">
                      {chapter.title}
                    </span>
                  </div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                    {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-gray-100 bg-gradient-to-b from-gray-50/80 to-white px-5 py-5 sm:px-6 sm:py-6">
                    <ul className="space-y-6">
                      {chapter.items.map((item, j) => (
                        <li key={j} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                          <p className="text-sm font-semibold text-emerald-800 mb-2">
                            {lang === 'zh' ? '題目' : 'Q'} {j + 1}
                          </p>
                          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">{item.q}</p>
                          {item.a !== '—' && (
                            <>
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                                {lang === 'zh' ? '參考答案／詳解' : 'Answer / Elaboration'}
                              </p>
                              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.a}</p>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChapterAssignments;
