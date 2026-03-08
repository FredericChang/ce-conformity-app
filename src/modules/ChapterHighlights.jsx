import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronRight, BookOpen } from 'lucide-react';
import ChapterMindMap from './ChapterMindMap';

// 重點整理自 public/Ch0–Ch6 教材 PDF（詳細版）
const highlights = {
  zh: {
    Ch0: {
      title: '第 0 章：簡介',
      points: [
        '機械安全專家 (CE) 為四天培訓，結業可取得 TÜV 個人證書；目標是在實務中完整落實機器的 CE 符合性流程。',
        '培訓涵蓋：法規要求、風險評估、標準應用、文件編制、法律面（責任與市場監督）。',
        '教材分 Tab：Tab 1 機械安全原則、Tab 2 CE 流程與文件、Tab 3 風險評估、Tab 4 風險降低與標準、Tab 5 工作設備指令、Tab 6 機械指令背景、Tab 7 白皮書與出版品。',
        '參與方式：互動簡報與數位教材、學員自習與分組、課後作業（實務案例）。考試地點另訂（如 Breda）；一般性問題聯絡 Kader Academy，實質內容問題聯絡講師。',
        '考試資格：至少 1 年機械安全相關工作經驗、培訓出席率至少 80%（以簽到為準）。須攜帶有效身分證明（護照或身分證）。',
        '考試形式：機械安全專家 (CE) 及 ATEX 為理論 120 分鐘；SIL & PL 專家為理論 90 分鐘 + 實作 90 分鐘 + 口試 15 分鐘。考場為外部場地、由 TÜV 考官監考，不得使用教材與手機。',
        '機械安全專家 (CE) 考題：45 題選擇（可多選）+ 5 題申論；至少 34 題正確始為通過。考題依 Tab 分配：Tab 1 約 11 題、Tab 2（CE 流程約 4、文件約 6）、Tab 3 約 4、Tab 4（風險降低約 4、歐洲標準約 13）、Tab 5 約 3、開放題約 5。',
        '考卷由考官帶回柏林閱卷，結果約需最多 6 週；結果到達後當日通知學員。未通過可於下次考試日期補考一次，補考費約 €325（機械安全專家）或 €375（SIL & PL）。',
        'TÜV 個人證書：以個人名義核發（非公司）、效期 3 年、具唯一註冊編號；可於簽名檔/名片標示。期滿前 3 個月至期滿後 3 個月內可申請換證，須提交 3 年內至少半日相關培訓證明及更新後英文 CV；逾 3 年 3 個月須重新考試。',
      ],
    },
    Ch1: {
      title: '第 1 章：立法與機械指令',
      points: [
        '產品指令（條約 Art. 114）要求 CE 標記，目的：產品最低要求、降低產品風險、消除貿易障礙。社會指令（Art. 153）著重工作場所健康與安全，對象為雇主。',
        '產品指令例：機械、EMC、低電壓、壓力設備、ATEX、燃氣器具、個人防護裝備。社會指令例：工作設備、手動搬運、安全標示、臨時與移動工地、顯示屏工作。機械指令納入荷蘭商品法；工作設備指令納入荷蘭工作條件法。',
        'CE = Conformité Européenne；EEA = EU 成員國 + 冰島、列支敦斯登、挪威。成員國不得禁止、限制或妨礙符合指令之機械在其境內投放市場或投入使用（指令 Art. 6）。',
        '法規協調透過：1 指令協調各國法律 2 歐洲標準正規化 3 符合性評估（自我宣告或公告機構）。出口 EEA 外仍可自願符合歐盟產品法規並加貼 CE；銷往他國須另行確認該國法規，可能需其他標記。',
        '機械生命週期：設計→製造→施加 CE→運輸→調試→生產→維護/檢驗/維修→報廢。製造商負責至「投放市場」；其後為雇主（員工健康與安全）。若機器在客戶現場才完成組裝，製造商仍須在風險評估中考慮全生命週期（含報廢）之潛在風險。',
        '機械指令 vs 工作設備指令：前者為產品指令、須 CE、對象製造商、納入商品法、適用 1995 年起投放市場之機械、附錄 I 為設計與製造之基本要求、須提供說明書與 EC 符合性聲明及技術檔案；後者為社會指令、無 CE、對象雇主、納入工作條件法、適用所有工作設備（不限製造年份）、附錄 1 為最低要求、須使用說明與維護/檢驗紀錄。',
        '製造商認定：自行製造或組裝 CE 產品供銷售或自用；改裝或擴充使產品「視同新產品」；以自有品牌銷售；自 EEA 外進口未貼 CE 產品；將多台新機組合成「組裝機械」。製造商不得將製造過程符合性與技術文件編制委託給授權代表、經銷商或分包商；委外時仍須整體掌控並取得履行責任所需資訊（Blue Guide）。',
        '授權代表：須設於歐盟；可代為保存符合性聲明與技術文件、提供給主管機關、配合矯正措施；可另委託加貼標記、編制聲明、通報疑似不合規、查核聲明與技術文件是否已編制。進口商：須確認製造商已做符合性評估、技術文件與標記與說明齊全，否則不得投放市場；須在機器/包裝/文件標示名稱與地址；保存聲明與技術文件。',
        '經銷商：須確認有符合性標記、EC 聲明與說明書、製造商/進口商與型號等標示；保存聲明；能識別上下游經濟營運者。履約服務提供者（倉儲、包裝、寄送等）：須確認標記與聲明/技術文件存在、保存之、配合市場監督與矯正。',
        '機械指令適用範圍（Art. 1(1)）：a 機械 b 可互換設備 c 安全組件 d 起重配件 e 鏈、繩、織帶 f 可拆式機械傳動裝置 g 部分完成機械。排除（摘要）：遊樂場/核能/武器/船舶與海上平台/軍警用/礦用捲揚/演出用機械；家用與辦公低壓電氣設備；農林拖拉機、汽車、競賽車輛、航空/水運/鐵路運輸工具（裝於其上之機械仍可能適用）。',
        '機械定義（Art. 2）：具驅動系統（非僅人力/畜力）之組裝體，由連動零件組成、至少一件運動、為特定用途而結合。亦含：僅缺現場接線/接能與接動力的組裝；僅需裝於運輸工具或建築即能運作之組裝；以人力為唯一動力之起重組裝。',
        '組裝機械：須同時滿足（依據機械指令應用指南）— 單元為達成共同功能而結合（如生產特定產品）；單元功能聯結致單一單元運作會影響整體，故需對整體做風險評估；具共同控制系統。僅相互連接但各自獨立運作的多台機器不視為組裝機械。',
        '可互換設備：改變機器功能、由操作者自行裝於機器或拖拉機、非單純工具。安全組件：單獨投放市場、具安全功能、其失效/故障會危害人身安全、非機器運作所必需；附錄 V 列舉示例。起重配件：用於吊升負載、不固定於起重機械、介於機械與負載或置於負載上、可單獨投放市場。部分完成機械：幾近機械但本身無法完成特定應用、僅供裝入或組裝用、不貼 CE（例：驅動系統）。',
        '附錄 IV 危險機械（例）：攜帶式鏈鋸、木工機械、行程>6mm 且速度>30mm/s 之壓機、射出/壓縮成型機、地下用機械、家用垃圾車、可拆式機械傳動裝置、車輛舉升機、墜落高度>3m 之人員升降裝置、人員偵測防護裝置、安全功能邏輯單元、ROPS/FOPS。符合性程序：若完全依調和 C 類標準且涵蓋基本要求，可僅由製造商評估（或選 EC 型式檢驗/全面品質保證）；否則通常需公告機構（EC 型式檢驗 Annex IX 或全面品質保證 Annex X）。',
        '產品責任：民法產品責任法（生產者對產品缺陷所致損害負責）；侵權行為。事故時製造商須能以技術文件證明傷害與產品不安全間無因果關係。Rapex/Safety Gate：歐盟危險非食品產品快速通報；荷蘭勞動檢查可自願通報。',
      ],
    },
    Ch2: {
      title: '第 2 章：CE 流程與文件',
      points: [
        '常見錯誤：機器完成後才讓 CE 人員做機械指令檢查→遇不可接受風險時本質安全已難再納入。風險評估僅在最後「機器專用化」→須考量現行標準是否更嚴、舊機界限是否仍適用。以為加裝護欄或光柵即可→護欄高度、光柵與危險區距離與停機能力須正確。將機械安全僅交給硬體/PL 計算→須先問能否以本質安全（如限制缸力）達成，再決定安全功能與 PLr。',
        '正確做法：將 CE 流程整合進「正常」設計與實現流程；在設計與實現的每一步都納入對應的 CE 步驟，而非平行或事後文件路線。',
        'A 預先研究：A.1 機器描述—定義功能與（客戶）規格、預期使用與使用條件、放置空間、被加工產品/材料前提、操作位置或零件製造要求、安全面最低要求；可輔以布局或示意圖。A.2 適用產品指令—每台機器須在流程前端確定適用指令，最終機器須符合所有適用歐盟產品指令（例：機器人單元通常適用 2006/42/EG、2014/30/EU EMC；壓力設備 2014/68/EU 多數因「良好工藝」不適用；非防爆用途則 ATEX 不適用）。A.3 適用標準—及早確定「必須」採用的標準；客戶要求常已含標準清單；採用（調和）標準通常是落實基本要求最有效方式；若不採用既有標準，至少須達「同等安全水準」。A.4 是否為附錄 IV 機械—決定符合性評估路徑。',
        'B 迭代流程：B.1 風險評估與風險降低、B.2 基本健康與安全要求、B.3 採用調和標準；與設計、製造、實作及測試交織。交付時：C.1 使用說明、C.2 EC 符合性聲明、C.3 機械標記。製造商留存：D.1 技術檔案（與專案文件一致）。',
        '使用說明書目的（指令 Annex I 1.7.4；EN ISO 12100 6.4）：依說明安全操作、警告殘餘風險、說明操作員/維護人員等所需訓練、描述安全面、描述檢查/維護/維修等活動。須由製造商或進口商提供；使用國語言；含原文或註明譯本。專業人員在製造商授權下可使用不同語言的維護說明。內容須涵蓋：預期與可合理預見的誤用、各使用階段（運輸、儲存、安裝/調試、機器描述、操作/設定、維護/檢查/更換、拆卸與處置、緊急情況）。EN ISO 12100 6.4 細分：一般資訊、資訊位置與性質、信號與警告裝置、標記/符號/象形圖/文字警告、說明手冊。NEN 5509 與機械指令一致，含標題頁、前言、目錄、簡介、描述與操作、安全、儲存與運輸等。',
        '部分完成機械之組裝說明（Annex VI）：須說明如何正確組裝之條件；可用製造商接受的共同體官方語言撰寫。',
        '技術檔案目的：記錄機器如何設計、如何達成安全；具法律與舉證功能。須為設計與安全相關文件之集合；可存放於他處（如供應商）但須能在數個工作天內取得；可為一種或多種共同體官方語言；僅政府（勞動主管機關）可要求提供；保留 10 年；在責任爭議中為舉證關鍵。',
        '技術檔案內容（指令要求）：1 機器一般描述（預期與可預見誤用、操作方式）2 總圖、控制迴路圖與說明 3 詳細圖、計算、試驗結果、圖表（含電路圖、運轉模式；若適用則補充計算、試驗、聲明）4 風險評估文件—適用之基本要求清單、所進行之風險評估、所用方法、預防措施與防護說明、機上警告與其他安全措施 5 所用標準 6 檢驗機構報告或證書 7 使用說明副本 8 供應商聲明等資訊 9 EC 符合性聲明。',
      ],
    },
    Ch3: {
      title: '第 3 章：風險評估',
      points: [
        '機械指令 Recital 23：製造商或其授權代表應確保對擬投放市場之機械進行風險評估；為此須確定哪些基本健康與安全要求適用於該機械，並據此採取措施。Annex I 一般原則：須進行風險評估以確定適用之健康與安全要求，機械之設計與製造須考慮風險評估結果；透過上述風險評估與風險降低之迭代過程達成；具體步驟見 EN ISO 12100 及 Tab 4 風險降低。',
        'EN ISO 12100 術語：傷害（對人身或健康的物理傷害）；危害（傷害的潛在來源）；危害情境（人員暴露於至少一種危害的情境，可能立即或隨時間導致傷害）；風險（傷害發生機率與嚴重度之組合）；殘餘風險（採取保護措施後仍存在之風險）。風險評估＝風險分析＋風險評價。風險分析＝機械界限之規定＋危害辨識＋風險估計。風險評價＝基於風險分析判斷是否已達風險降低目標。',
        '風險評估定義（教材）：「對傷害或健康損害的發生機率與嚴重度進行全面估計，以選擇適當的安全措施」。風險 = 機率 × 嚴重度。',
        'EN ISO 12100 流程：Step 1 確定機械界限 → Step 2 危害辨識 → Step 3 風險估計 → Step 4 風險評價；若未達「充分降低」則實施風險降低後回到前述步驟。界限包括：使用界限（預期與可合理預見誤用、操作模式、故障時如何介入、使用場所與方式、使用者、是否含行動能力受限者、所需訓練/經驗、除操作者外是否有人暴露）；空間界限（運動範圍、所需空間、人員工作空間、操作/維修位置、控制位置、能源供應、布局/示意圖）。',
        '風險估計方法（NPR-ISO/TR 14121-2 等）：可自行選擇適合的方法。風險圖（多種變體，源自 prEN1050）：常用於機械指令；參數含嚴重度 S、發生機率 P、暴露頻率 F、可避免性 A；14 點制常分為低風險 1–4、可能風險 5–7、高風險 8–10、極高風險 11–14。Kinney & Wiruth（線性）：常用於工作設備/RI&E；R = S × F × P；R < 20 低、20–69 可能、70–199 中等、200–399 高、≥400 極高；嚴重度與頻率/機率各有等級表。其他：風險矩陣、數值評分、混合工具。',
      ],
    },
    Ch4: {
      title: '第 4 章：風險降低與安全措施',
      points: [
        '機械指令 Annex I 1.1.2(b) 三步法（強制順序）：1 本質安全之機械設計與製造 2 防護和/或互補保護措施 3 使用資訊。',
        '第一步—本質安全（EN ISO 12100 6.2）：透過設計變更、消除危害、減少暴露。幾何：避免銳邊銳角；從控制位置最大化對工作區與危險區的直接可視性；避免擠壓—增大運動部件間最小間隙或減小（EN ISO 13854、13857）。物理：降低力、速度、質量、電功率；從源頭限制排放—噪音 ISO/TR 11688-1、振動（手持機械 CR 1030-1）、有害物質、輻射。一般設計：應力限制、材料選擇（腐蝕/硬度/脆性）、噪音/振動/有害物質/輻射之排放值。範例：堆垛機驅動置於高處有墜落風險時，可將驅動移至地面以徹底消除該危害。',
        '第二步—防護與互補措施（EN ISO 12100 6.3）：護罩（EN ISO 14120）—固定護罩（傳動等）、聯鎖可動護罩、可調護罩。固定通道（EN ISO 14122-1/2/3/4）。防護裝置：非接觸式電氣防護（EN 61496）、壓敏裝置（EN ISO 13856）、雙手控制（EN ISO 13851）。環境防護（熱/冷）、FOPS/ROPS/TOPS、防護失效下進入保護區工作之措施、安全距離（EN ISO 13855、13857）、穩定性與運動/加減速限制、緊急停止裝置（EN ISO 13850）。範例：若無法將驅動移下，可提供固定樓梯與平台到達維護位置，並考慮護欄與新風險。緊急停止屬於第二步，非第一步。',
        '第三步—使用資訊（EN ISO 12100 6.4）：標記、符號（象形圖）、文字警告；功能指示；說明手冊；培訓/指導。範例：高溫部位無法以設計降溫或防護時，可在該處設置高溫警告象形圖，並在說明書中說明危險與安全操作方式。',
        '充分風險降低（EN ISO 12100 6.2.4）：所有操作條件已考慮、危害已消除或風險已降至實務最低、所引入之新危害已評估並必要時降低、殘餘風險已明確描述且使用者已被告知、工作條件與可維修性得以維持；若機器在非工業環境（如家庭）使用須特別考量。',
        '調和標準之應用：指令 1.3.7 規定運動部件須設計成防止接觸風險，若風險仍存在須裝設護罩或防護裝置；1.4.1 規定護罩與防護裝置須堅固、牢靠、不產生額外危害、與危險區保持足夠距離等。標準在歐盟為「建議」但具推定符合性；法律要求較抽象，標準提供具體方案；對工作設備指令之「技術水準」也有參考價值（框架指令 Art. 6）。Recital 18 稱標準為非強制性，Recital 11 稱採用可產生符合性推定。',
        '標準分類：A 類—基本安全原則（如 EN ISO 12100）；B 類—技術安全面（如 EN IEC 60204-1 電氣）；C 類—特定機器（如 EN 619 輸送機）。應用時通常 A＋B＋C 或 A＋B。',
      ],
    },
    Ch5: {
      title: '第 5 章：工作設備指令',
      points: [
        '工作設備指令 2009/104/EG 前身：2001/45/EG、95/63/EG、89/655/EEG（自 1997-1-1 強制）。納入荷蘭工作條件法（工作條件法令第 7 章）。',
        '定義（第 2 條）：工作場所使用之所有機械、設備、工具與裝置。',
        '基本原則：工作設備之安全水準須在其全生命週期得到保證—運輸、安裝與調整、使用與設定、操作與清潔、程式與維護、除役與拆除、處置。',
        '指令結構：前言（考量）、條文、附件 1 最低要求、附件 2 額外要求。',
        '實施步驟（摘要）：風險清查與評估 → 1 工作設備清查 2 最低要求評估 3 風險評估（危害、風險分析、風險評價）4 風險降低（對照標準）5 制定並實施行動計劃。週期性：6 檢查與試驗 7 維護計劃 8 組織義務（程序、指示、資訊、培訓、監督）。',
        '附件 1 一般最低要求（與機械指令 Annex I 主題對應）：服務、啟動/停止、強度/穩定性、移動部件、照明、溫度、警報、維護/安裝/（拆）組裝、警告、火災/爆炸、電氣。',
        '附件 2 額外要求：移動式工作設備（工作條件法令 7.7 第 4 章 §2）—乘坐、能量傳輸、穩定性、碰撞、運行、制動/停止、視線、照明、教育、工作區內行人、內燃機。起重與吊裝（§2a）—強度與穩定性、額定負載指示、起重配件、墜落/碰撞負載、吊升人員、通訊、疏散、操作與監督、執行工作、協調/程序、電源故障、天氣。高處臨時作業（§2b）—合適資源、梯子有限使用、梯子定位、墜落保護裝置、天氣、腳手架、工作繩/安全繩（獨立）。',
        '框架指令 89/391/EEC：目的為改善勞工安全與健康；雇主有義務確保員工安全與健康；雇主始終負責（即使委託第三方）。納入工作條件法及各類法令。雇主義務（摘要）：進行風險清查與評估、制定行動計劃、工作適應（人因）、考慮技術發展、以較低危險取代高危險、預防措施規劃、組織/政策/諮詢/程序/指示、公司緊急計劃、指定預防官員、資訊與培訓、參與、監控工作場所風險、定期健康檢查機會。',
      ],
    },
    Ch6: {
      title: '第 6 章：機械指令 2006/42/EC',
      points: [
        'Recital 2：機械業為工程業重要一環、共同體經濟支柱；因機械使用所致大量事故的社會成本，可透過本質安全設計與製造及正確安裝與維護降低。',
        'Recital 3：成員國負責境內人員（尤其勞工與消費者）健康與安全，及適當情況下之家畜與財物，特別是與機械使用相關之風險。',
        'Art. 6：成員國不得禁止、限制或妨礙符合本指令之機械在其境內投放市場和/或投入使用。',
        '指令目的（摘要）：範圍與適用概念盡可能精確定義以確保法律確定性；建築工地用載人/載人與貨物之升降機不排除，以消除貿易障礙與各國符合性評估差異；武器等排除與過渡規定；不適用於非為載人設計之機械載人，但不影響成員國依 89/655/EEC 等採取國家措施。',
        '附錄（選列）：附錄 I 基本健康與安全要求；附錄 II 符合性聲明（II.1.A 機械、II.1.B 部分完成機械）；附錄 III CE 標記；附錄 IV 機械；附錄 V 安全組件示例清單；附錄 VI 部分完成機械組裝說明；附錄 VII 技術檔案/技術文件。',
      ],
    },
  },
  en: {
    Ch0: {
      title: 'Chapter 0: Introduction',
      points: [
        'Machine Safety Specialist (CE) is a 4-day training leading to a TÜV personal certificate; the aim is to implement the CE conformity process for machinery in practice.',
        'Training covers: legal requirements, risk assessment, application of standards, documentation, and legal aspects (liability and market surveillance).',
        'Material is organised by Tab: Tab 1 Principles of machine safety, Tab 2 CE process & documentation, Tab 3 Risk assessment, Tab 4 Risk reduction & standards, Tab 5 Work Equipment Directive, Tab 6 Machinery Directive background, Tab 7 Whitepapers and publications.',
        'Format: interactive presentations and digital materials; self-study and group work; homework on practical cases. Exam at an external venue (e.g. Breda); general queries to Kader Academy, substantive questions to the trainers.',
        'Exam conditions: at least 1 year of relevant work experience in machine safety; at least 80% attendance (recorded). Valid ID (passport or identity card) required.',
        'Exam format: Machine Safety Specialist (CE) and ATEX Professional = 120 min theory; SIL & PL Specialist = 90 min theory + 90 min practice + 15 min defence. Exam at external location under TÜV examiner; no training materials or phones.',
        'Machine Safety Specialist (CE) exam: 45 multiple-choice (multiple answers may be correct) + 5 open questions; at least 34 correct to pass. Question spread by Tab: Tab 1 ~11, Tab 2 (CE process ~4, documentation ~6), Tab 3 ~4, Tab 4 (risk reduction ~4, European standards ~13), Tab 5 ~3, open ~5.',
        'Papers are sent to Berlin for marking; results can take up to 6 weeks; candidates are informed the same day results arrive. One resit possible at next exam date; fee approx. €325 (Machine Safety Specialist) or €375 (SIL & PL).',
        'TÜV personal certificate: issued in personal name (not company), valid 3 years, unique registration code; may be used in email signature/business card. Recertification: apply within 3 months before to 3 months after expiry; submit proof of at least ½ day relevant training within 3 years and updated CV (English); after 3 years 3 months must retake exam.',
      ],
    },
    Ch1: {
      title: 'Chapter 1: Legislation & Machinery Directive',
      points: [
        'Product directives (Treaty Art. 114) require CE marking; objectives: minimum product requirements, reduce product risks, remove trade barriers. Social directives (Art. 153) focus on workplace health and safety; addressee is the employer.',
        'Product examples: Machinery, EMC, Low Voltage, Pressure equipment, ATEX, Gas appliances, PPE. Social examples: Work equipment, Manual handling, Safety signage, Temporary/mobile construction sites, Display screen. Machinery Directive in Dutch Commodities Act; Work Equipment in Working Conditions Act.',
        'CE = Conformité Européenne; EEA = EU states + Iceland, Liechtenstein, Norway. Member States shall not prohibit, restrict or impede compliant machinery being placed on the market or put into service (Directive Art. 6).',
        'Harmonisation via: 1 Directives (laws), 2 European Standards (normalisation), 3 Conformity assessment (self-declaration or Notified Body). Outside EEA: machines may still comply with EU product law and carry CE; destination-country rules apply and may require other marks.',
        'Machine lifecycle: Design → Construction → Applying CE → Transport → Commissioning → Production → Maintenance/Inspection/Repairs → Dismantling. Manufacturer responsible until “placing on the market”; thereafter employer (health and safety of workers). If machinery is completed on customer site, manufacturer must consider risks in all lifecycle phases (including dismantling) in the risk assessment.',
        'Machinery Directive vs Work Equipment Directive: former = product directive, CE required, manufacturer, Commodities Act, applies to machinery placed on market since 1995, Annex I = design/construction EHSR, instructions + EC declaration + technical file; latter = social directive, no CE, employer, Working Conditions Act, all work equipment regardless of year, Annex 1 = minimum requirements, instructions for use + maintenance/inspection history.',
        'Manufacturer: you are one if you manufacture or assemble a CE product for sale or own use; modify/expand so product is “as new”; sell under own brand; import non-CE product from outside EEA; combine new machines into an assembly. Manufacturer cannot delegate conformity of manufacturing process or preparation of technical documentation to authorised representative, distributor or subcontractor; must retain overall control and receive information needed to fulfil duties (Blue Guide).',
        'Authorised representative: must be established in the EU; may keep declaration and technical documentation, provide to authorities, cooperate in corrective measures; may be entrusted with applying marking, preparing declaration, notifying suspected non-compliance, verifying declaration and technical documentation. Importer: must verify manufacturer has done conformity assessment and that documentation, marking and instructions are present; must not place on market if in doubt; name and address on machine/packaging/docs; keep declaration and technical documentation.',
        'Distributor: must verify presence of conformity marking, EC declaration and instructions, manufacturer/importer and type identification; keep declaration; identify economic operators in the chain. Fulfilment service providers (storage, packaging, dispatch): must verify marking and declaration/technical documentation, keep them, cooperate with market surveillance and corrective measures.',
        'Scope of Machinery Directive (Art. 1(1)): a machinery b interchangeable equipment c safety components d lifting accessories e chains, ropes, webbing f removable mechanical transmission devices g partly completed machinery. Exclusions (summary): fairground/nuclear/weapons/vessels and offshore/military/mining/performance machinery; household and office low-voltage equipment; agricultural tractors, motor vehicles, competition vehicles, air/water/rail transport (machinery mounted on them may still apply).',
        'Definition of machinery (Art. 2): assembly with drive system (other than direct human/animal effort), linked parts, at least one moving, for a specific application. Also: assembly missing only on-site connection to energy/motion; assembly to be mounted on means of transport or in building; lifting assembly with human effort as only power.',
        'Assembly of machinery (per Application Guide): all three—units joined for common function (e.g. production); functionally linked so operation of one affects whole (risk assessment for whole); common control system. Machines connected but working independently are not an assembly.',
        'Interchangeable equipment: changes machine function; placed on market for assembly by operator with machine/tractor; not a tool. Safety component: safety function, placed on market separately, failure/malfunction endangers safety, not necessary for operation; Annex V lists examples. Lifting accessory: for lifting load, not attached to lifting machinery, between machinery and load or on load, placed on market independently. Partly completed machinery: almost machinery, cannot by itself perform specific application, only for incorporation/assembly, no CE (e.g. drive system).',
        'Annex IV dangerous machinery (examples): portable chainsaws, woodworking machinery, presses stroke >6 mm and speed >30 mm/s, injection/compression moulding, underground machinery, refuse trucks, removable mechanical transmission devices, vehicle lifts, devices for lifting persons with fall >3 m, presence-detection protective devices, logic units for safety functions, ROPS/FOPS. Conformity: if fully to harmonised type-C standard covering EHSR, manufacturer may self-assess (or choose EC type-examination/full QA); otherwise usually Notified Body (EC type-examination Annex IX or full QA Annex X).',
        'Product liability: civil product liability (producer liable for damage from defect); tort. In an accident, manufacturer must be able to demonstrate with technical documentation that there is no causal link between injury and product unsafety. Rapex/Safety Gate: EU rapid alert for dangerous non-food products; Dutch labour inspection voluntary notification.',
      ],
    },
    Ch2: {
      title: 'Chapter 2: CE Process & Documentation',
      points: [
        'Common mistakes: “Machine ready, let CE person do MD round” → when unacceptable risks appear, inherent measures are no longer feasible. Risk assessment only “machine-specific” at the end → must consider whether current standards are stricter and whether past machine limits still apply. “A fence will make it OK” → guard height, light curtain distance and stopping capacity must be correct. Leaving machine safety to hardware/PL only → ask first whether inherent measure (e.g. limit cylinder force) could solve it, then decide safety functions and PLr.',
        'Correct approach: integrate the CE process into the “normal” design and realisation process; at every step of design and realisation, the corresponding CE steps must be included—not a parallel or after-the-fact documentation route.',
        'A Research in advance: A.1 Description—define operation and (customer) specification, intended use and conditions, space, product/material, operating positions, minimum safety aspects; layout/sketch helps. A.2 Applicable product directives—determine at the front of the process for each machine; final machine must comply with all applicable EU product directives (e.g. robot cell typically 2006/42/EC, 2014/30/EU EMC; pressure equipment 2014/68/EU often not due to “good craftmanship”; no explosive atmosphere → no ATEX). A.3 Applicable standards—establish which standards “must” be applied early; customer often specifies; applying (harmonised) standards is usually the most effective way to meet EHSR; if standards exist but are not applied, “same level of safety” must be ensured. A.4 Annex IV—determines conformity route.',
        'B Iterative: B.1 Risk assessment and risk reduction, B.2 Essential health and safety requirements, B.3 Harmonised standards; interwoven with design, construction, realisation and testing. Delivery: C.1 Instructions, C.2 EC declaration of conformity, C.3 Marking. Retained by manufacturer: D.1 Technical file (aligned with project documentation).',
        'Instruction manual purpose (Annex I 1.7.4; EN ISO 12100 6.4): safe operation in accordance with instructions, residual risk warnings, training level for operators/maintainers, safety aspects, checks/maintenance/repairs. Must be provided by manufacturer or importer; language of country of use; original or state if translation. Maintenance instructions in another language allowed for specialised personnel under manufacturer’s authority. Content: intended and reasonably foreseeable misuse, all phases (transport, storage, installation/commissioning, description, operation/setting, maintenance/inspection/replacement, dismantling/disposal, emergencies). EN ISO 12100 6.4: general information, location and nature, signals and warnings, markings/pictograms/written warnings, handbook. NEN 5509 aligns with Directive (title, foreword, contents, introduction, description/operation, safety, storage/transport, etc.).',
        'Assembly instructions for partly completed machinery (Annex VI): describe conditions for correct assembly; in an official Community language acceptable to the manufacturer of the machinery into which it will be incorporated.',
        'Technical file purpose: record how the machine was designed and how safety was achieved; legal and burden-of-proof function. Must be a collection of design and safety documents; may be held elsewhere (e.g. supplier) but retrievable within a few working days; one or more official Community languages; only authorities (labour inspectorate) may request; retain 10 years; key in liability disputes.',
        'Technical file contents (Directive): 1 General description (intended and foreseeable misuse, operation) 2 Overall plans, control circuit drawings, descriptions 3 Detailed drawings, calculations, test results, diagrams (electrical, operating patterns; add calculations/tests/declarations if applicable) 4 Risk assessment documentation—list of applicable EHSR, risk assessment carried out, methodology, preventive measures and safeguards, warnings on machine and other measures 5 Standards used 6 Inspection body reports/certificates 7 Copy of instructions 8 Supplier declarations etc. 9 EC declaration of conformity.',
      ],
    },
    Ch3: {
      title: 'Chapter 3: Risk Assessment',
      points: [
        'Machinery Directive Recital 23: the manufacturer or authorised representative should ensure a risk assessment is carried out for the machinery to be placed on the market; determine which essential health and safety requirements apply and take measures. Annex I General principles: risk assessment must be carried out to determine applicable health and safety requirements; machinery designed and constructed taking results into account; by the iterative process of risk assessment and risk reduction; see EN ISO 12100 and Tab 4.',
        'EN ISO 12100 terms: harm (physical injury or damage to health); hazard (potential source of harm); hazardous situation (person exposed to at least one hazard, may result in harm immediately or over time); risk (combination of probability and severity of harm); residual risk (remaining after protective measures). Risk assessment = risk analysis + risk evaluation. Risk analysis = specification of limits + hazard identification + risk estimation. Risk evaluation = judgment whether risk reduction objectives achieved.',
        'Definition (training): “comprehensive estimate of the probability of injury or damage to health and the severity of that injury or damage to health in order to select the appropriate safety measures”. Risk = probability × severity.',
        'EN ISO 12100 process: Step 1 Determine limits → Step 2 Hazard identification → Step 3 Risk estimation → Step 4 Risk evaluation; if not adequately reduced, apply risk reduction and repeat. Limits include: use limits (intended and foreseeable misuse, modes of operation, intervention in malfunction, where and how used, who uses, limited physical abilities, training/experience, others exposed); space limits (range of movement, space for machine and persons, operator/technician positions, control location, energy supply, layout/sketch).',
        'Risk estimation methods (NPR-ISO/TR 14121-2 etc.): methodology is for the user to choose. Risk graph (variants, origin prEN1050): often used for Machinery Directive; parameters S (severity), P (probability), F (frequency/exposure), A (avoidability); 14-point scale often 1–4 low, 5–7 possible, 8–10 high, 11–14 very high. Kinney & Wiruth (linear): often for Work Equipment/RI&E; R = S × F × P; R <20 low, 20–69 possible, 70–199 considerable, 200–399 high, ≥400 very high; severity and frequency/probability scales. Others: risk matrix, numerical scoring, hybrid.',
      ],
    },
    Ch4: {
      title: 'Chapter 4: Risk Reduction & Safety Measures',
      points: [
        'Three-step method (Annex I 1.1.2(b)), mandatory order: 1 Inherently safe machinery design and construction 2 Safeguarding and/or complementary protective measures 3 Information for use.',
        'Step 1—Inherent (EN ISO 12100 6.2): change design, eliminate hazards, reduce exposure. Geometry: avoid sharp edges/corners; maximise direct visibility of working and hazard zones from control position; avoid crushing—increase minimum gap between moving parts or decrease (EN ISO 13854, 13857). Physical: decrease force, velocity, mass, electric power; limit emissions at source—noise ISO/TR 11688-1, vibration (hand-held CR 1030-1), hazardous substances, radiation. General: stress limitation, material selection (corrosion, hardness, brittleness), emission values. Example: pallet stacker drive at height → falling risk; inherent measure = move drive to floor to eliminate that hazard.',
        'Step 2—Safeguarding (EN ISO 12100 6.3): Guards (EN ISO 14120)—fixed (transmissions etc.), interlocking movable, adjustable. Fixed access (EN ISO 14122-1/2/3/4). Protective devices: non-contact (EN 61496), pressure-sensitive (EN ISO 13856), two-hand (EN ISO 13851). Environmental (heat/cold), FOPS/ROPS/TOPS, working with guards disabled, safety distances (EN ISO 13855, 13857), stability, motion/acceleration limits, emergency stop (EN ISO 13850). Example: if drive cannot be moved down, provide fixed staircase and landing; consider guardrails and new hazards. Emergency stop is step 2, not step 1.',
        'Step 3—Information (EN ISO 12100 6.4): Markings, signs, pictograms, written warnings; function indication; instruction handbook; training/instruction. Example: hot parts that cannot be designed cooler or guarded → pictogram near hot parts and warning plus safe use instructions in handbook.',
        'Adequate risk reduction (EN ISO 12100 6.2.4): all operating conditions considered; hazards eliminated or risks reduced to lowest practical level; introduced hazards assessed and reduced if necessary; residual risks clearly described and users informed; working conditions and serviceability maintained; sufficient account for use in non-industrial (e.g. home) environment.',
        'Applying harmonised standards: Directive 1.3.7—moving parts designed to prevent contact risk or fitted with guards/protective devices; 1.4.1—guards and protective devices sturdy, secure, no additional hazards, sufficient distance from danger zone, etc. Standards are “advice” in EU but give presumption of conformity; law is vague, standards give concrete solutions; also state of the art for Work Equipment Directive (Framework Art. 6). Recital 18: standards non-binding; Recital 11: application gives presumption of conformity.',
        'Standard types: Type A—basic safety principles (e.g. EN ISO 12100); Type B—technical safety (e.g. EN IEC 60204-1 electrical); Type C—specific machine (e.g. EN 619 conveyors). Application typically A+B+C or A+B.',
      ],
    },
    Ch5: {
      title: 'Chapter 5: Work Equipment Directive',
      points: [
        'Work Equipment Directive 2009/104/EC; predecessors 2001/45/EC, 95/63/EC, 89/655/EEC (mandatory 1 Jan 1997). Implemented in Dutch Working Conditions Act (Working Conditions Decree Chapter 7).',
        'Definition (Art. 2): all machinery, equipment, tools and installations used at the workplace.',
        'Basic idea: safety level of work equipment must be guaranteed during all phases of its lifespan—transport, installation and adjustment, use/setup, operation/cleaning, programming/maintenance, decommissioning/demolition/disposal.',
        'Structure: Considerations, Articles, Annex 1 Minimum requirements, Annex 2 Additional requirements.',
        'Step plan (summary): Risk inventory and evaluation → 1 Inventory of work equipment 2 Assessment of minimum requirements 3 Risk assessment (hazards, analysis, evaluation) 4 Risk reduction (test against standards) 5 Draw up and implement action plan. Periodic: 6 Inspections and tests 7 Maintenance plan 8 Organizational obligations (procedures, instructions, information, training, supervision).',
        'Annex 1 general minimum requirements (parallel to Machinery Directive Annex I topics): service, start/stop, strength/stability, moving parts, lighting, temperature, alarm, maintenance/installation/(dis)assembly, warnings, fire/explosion, electricity.',
        'Annex 2 additional: Mobile work equipment (Decree Ch 7, Div 4 §2): ride along, energy transmission, stability, collision, running, braking/stopping, sight, lighting, education, people on foot in work zone, combustion engine. Lifting/hoisting (§2a): strength and stability, nominal load indication, accessories, falling/colliding loads, lifting persons, communication, evacuation, operation and supervision, performing work, coordination/procedures, power supply failure, weather. Temporary work at height (§2b): suitable resources, ladder limited use, positioning ladder, fall protection, weather, scaffolding, working line/safety line (independent).',
        'Framework Directive 89/391/EEC: purpose to improve safety and health of workers; employer obliged to ensure employees’ safety and health; employer always responsible (even if third parties used). In Working Conditions Act and decrees. Employer obligations (summary): risk inventory and evaluation, action plan, adaptation of work (ergonomics), technical developments, replace hazardous with less dangerous situations, prevention planning, organization/policy/consultation/procedures/instructions, company emergency plan, appoint prevention officer, information and training, participation, monitor workplace risks, opportunity for periodic health checks.',
      ],
    },
    Ch6: {
      title: 'Chapter 6: Machinery Directive 2006/42/EC',
      points: [
        'Recital 2: Machinery sector is important part of engineering industry and mainstay of Community economy; social cost of accidents caused by use of machinery can be reduced by inherently safe design and construction and by proper installation and maintenance.',
        'Recital 3: Member States are responsible for ensuring health and safety on their territory of persons, in particular workers and consumers, and where appropriate domestic animals and goods, notably in relation to risks arising from the use of machinery.',
        'Art. 6: Member States shall not prohibit, restrict or impede the placing on the market and/or putting into service in their territory of machinery which complies with this Directive.',
        'Objectives (summary): scope and concepts defined as precisely as possible for legal certainty; construction site hoists for persons/persons and goods not excluded to remove trade barriers and divergent conformity systems; exclusions and transitional arrangements for weapons etc.; Directive does not apply to lifting persons by machinery not designed for that, without prejudice to Member State measures under 89/655/EEC.',
        'Annexes (selected): Annex I Essential health and safety requirements; Annex II Declaration (II.1.A machinery, II.1.B partly completed machinery); Annex III CE marking; Annex IV Machinery; Annex V List of safety components; Annex VI Assembly instructions partly completed machinery; Annex VII Technical file/documentation.',
      ],
    },
  },
};

const chapterOrder = ['Ch0', 'Ch1', 'Ch2', 'Ch3', 'Ch4', 'Ch5', 'Ch6'];

const ChapterHighlights = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language && i18n.language.startsWith('zh') ? 'zh' : 'en';
  const [expanded, setExpanded] = useState({ Ch0: true, Ch1: true });

  const toggle = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const content = highlights[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* 標題區塊 */}
        <div className="relative mb-10 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 px-6 py-8 sm:px-8 sm:py-10 shadow-xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-60" />
          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur shadow-lg">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {lang === 'zh' ? '章節重點' : 'Chapter Highlights'}
                </h1>
                <p className="mt-1 text-indigo-100 text-sm sm:text-base max-w-xl">
                  {lang === 'zh'
                    ? '各章節核心重點整理，便於快速複習與對照。'
                    : 'Key points for each chapter for quick review and reference.'}
                </p>
              </div>
            </div>
            <div className="hidden sm:block text-white/40 text-xs font-medium uppercase tracking-wider">
              {chapterOrder.length} {lang === 'zh' ? '章' : 'Chapters'}
            </div>
          </div>
        </div>

        {/* 章節卡片 */}
        <div className="space-y-4">
          {chapterOrder.map((id) => {
            const chapter = content[id];
            if (!chapter) return null;
            const isOpen = expanded[id] !== false;
            return (
              <div
                key={id}
                className="overflow-hidden rounded-2xl bg-white/90 backdrop-blur shadow-lg shadow-gray-200/50 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-indigo-100"
              >
                <button
                  type="button"
                  onClick={() => toggle(id)}
                  className="group w-full px-5 py-4 sm:px-6 sm:py-4 flex items-center justify-between gap-4 hover:bg-gray-50/80 transition-colors text-left"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 text-white shadow-md">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <span className="font-semibold text-gray-800 text-base sm:text-lg truncate">
                      {chapter.title}
                    </span>
                  </div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-transform duration-200 group-hover:bg-indigo-100 group-hover:text-indigo-600">
                    {isOpen ? (
                      <ChevronDown className="h-5 w-5" />
                    ) : (
                      <ChevronRight className="h-5 w-5" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-gray-100 bg-gradient-to-b from-gray-50/80 to-white px-5 py-5 sm:px-6 sm:py-6">
                    <ChapterMindMap title={chapter.title} points={chapter.points} lang={lang} />
                    <ul className="space-y-3 mt-6">
                      {chapter.points.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 pl-1 border-l-2 border-indigo-200/80 py-1 pr-2 hover:border-indigo-400/80 hover:bg-indigo-50/30 rounded-r-lg transition-colors"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-xs font-semibold mt-0.5">
                            {index + 1}
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
      </div>
    </div>
  );
};

export default ChapterHighlights;
