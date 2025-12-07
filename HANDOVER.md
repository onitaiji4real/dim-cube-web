# Dimension Cube Website 交接文件

**最後更新日期**: 2025-12-08
**版本**: v1.0.0

---

## 1. 商業模型與方案內容 (Business Logic)

本網站提供三種數位轉型方案，針對不同成長階段的企業設計。這部分供業務與管理層參考。

### 方案 A：基礎數位基建 (SEO Focused)
*   **目標客群**: 剛起步在地店家 (Local Business)
*   **價格區間**: $15,000 - $25,000 / 月
*   **核心價值**: 打好地基，讓您的網站在搜尋結果中被看見。
*   **包含內容**:
    *   Technical SEO 優化
    *   Core Web Vitals 效能調校
    *   關鍵字佈局策略
    *   月度成效報告

### 方案 B：AI 權威佈局 (GEO Focused) [推薦方案]
*   **目標客群**: 專業服務業、B2B 企業 (Professional Services)
*   **價格區間**: $30,000 - $50,000 / 月
*   **核心價值**: 不僅是 Google，更要讓 ChatGPT 推薦您的品牌。
*   **包含內容**:
    *   **包含方案 A 所有內容**
    *   JSON-LD 結構化數據 (Schema.org)
    *   Knowledge Graph 知識圖譜建立
    *   Direct Answer 優化
    *   AI 搜尋聲量監測

### 方案 C：全域流量統治 (Full Stack)
*   **目標客群**: 轉型期企業 (Enterprise)
*   **價格區間**: $60,000+ / 月
*   **核心價值**: 全方位數位轉型，建立完整的數位護城河。
*   **包含內容**:
    *   **包含方案 A + B 所有內容**
    *   Line Bot 自動化行銷
    *   客戶專屬 Portal 開發
    *   CRO 轉換率優化
    *   專屬顧問諮詢

---

## 2. 常見問答集 (FAQ)

目前 FAQ 區塊包含以下 6 組標準問答，用於回答客戶對於 SEO 與網站建置的常見疑慮。

1.  **Q: 為什麼要網站？IG/FB 不好嗎？**
    *   A: 社群平台就像租房子，房東(演算法)隨時能漲價或趕人。擁有自己的網站是「買房子」，您擁有絕對的控制權，並且隨著時間推移，資產價值會複利成長。

2.  **Q: 靜態網站沒互動，幹嘛要？**
    *   A: 現代網站不是靜態的。我們使用 Next.js 技術，讓網站像 App 一樣快速且流暢。速度就是金錢，每一毫秒的延遲都在流失客戶。

3.  **Q: SEO 是什麼？**
    *   A: SEO 是將您的商業語言翻譯成機器語言。我們讓 Google 讀懂您的服務價值，確保當客戶有需求時，第一個找到的是您。

4.  **Q: GEO 是什麼？**
    *   A: GEO (Generative Engine Optimization) 是針對 AI (如 ChatGPT, Gemini) 的優化技術。未來的搜尋不再是給十個連結，而是給一個「標準答案」。我們確保您的品牌成為那個答案。

5.  **Q: 我自己用 ChatGPT 寫文章不行嗎？**
    *   A: AI 可以寫字，但不懂「策略」與「結構化數據」。我們做的是讓 Google 和 AI 讀得懂的底層架構，而不只是文字堆砌。

6.  **Q: 剛做完網站就會有流量嗎？**
    *   A: SEO 是種樹，PPC 廣告是買花。種樹需要時間扎根（約 3-6 個月），但長大後你可以乘涼一輩子；買花很美但三天就謝了。

---

## 3. 網站架構與頁面內容 (Sitemap & Content)

網站主要由 **全站導航 (Dock Nav)**、**首頁 (Landing Page)** 與 **部落格頁 (Blog)** 組成。

### 3.1 全站導航 (Dock Navigation)
*   **位置**: 螢幕下方固定懸浮。
*   **功能**:
    *   頁面跳轉 (方案、方法論、洞察報告、聯絡我們)。
    *   **深色模式切換 (Dark Mode Toggle)**。
    *   **中英文切換 (Language Toggle)**。

### 3.2 首頁 (Landing Page) - `src/app/[locale]/page.tsx`
頁面採用單頁式設計 (Single Page Application 體驗)，包含以下區塊：

1.  **Hero Section (首屏)**:
    *   標題與副標題 (強調 SEO + GEO)。
    *   CTA 按鈕：免費網站健檢 (導向 Contact)、查看方案 (導向 Pricing)。
2.  **Social Proof (信任標記)**:
    *   跑馬燈展示適配平台 (Google, ChatGPT, Bing, Claude 等)。
3.  **Why Section (價值主張)**:
    *   比較「舊思維 (租流量)」與「新策略 (自有資產)」的差異。
    *   互動式切換開關。
4.  **Pricing Section (價格方案)**:
    *   展示 A, B, C 三種方案卡片。
    *   **特效**: 捲動視差滑入 (Fade Up)。
    *   **B 方案**為亮點推薦 (Recommended)。
5.  **FAQ Section (常見問題)**:
    *   左側問題列表，右側顯示答案。
    *   點擊切換，無刷新流暢體驗。
6.  **Blog Section (洞察報告預覽)**:
    *   顯示最新的 3 篇精選文章。
    *   "查看更多" 按鈕導向 `/blog` 頁面。
7.  **Contact Section (聯絡表單)**:
    *   欄位：姓名、Email、產業、現有網站、行銷痛點。
    *   **功能**: 前端驗證 (Zod)，提交後顯示成功 Toast (目前未串接後端)。

### 3.3 部落格頁 (Blog Page) - `src/app/[locale]/blog/page.tsx`
*   目前復用首頁的 Blog Section 元件，作為獨立入口。
*   未來可擴充為完整的文章列表與內頁系統。

### 3.4 服務詳情頁 (Service Details) - `src/app/[locale]/services/page.tsx`
*   **功能**: 展示詳細的服務內容與商業價值。
*   **設計**: 採用互動式卡片 (Flip Card)，正面強調 Business Value，背面揭露 Technical Strategy。
*   **內容**: 包含 SEO Dominance, High-Performance Architecture, AI Integration 等 6 大核心服務。


### 3.5 頁尾 (Footer) - `src/components/layout/footer.tsx`
*   **現狀**: 包含版權宣告、隱私權政策 (Privacy Policy)、服務條款 (Terms of Service) 連結。
*   **待辦事項**: `Privacy Policy` 與 `Terms of Service` 目前連結為空 (`#`)，需要法務提供內容後建立對應頁面。

---

## 4. 技術規格 (Technical Specs)

*   **框架**: Next.js 15 (App Router)
*   **語言**: TypeScript
*   **樣式**: Tailwind CSS
*   **動畫**: Framer Motion (用於 Dock、FAQ 切換、Pricing 進場特效)
*   **國際化 (i18n)**: `next-intl` (支援 zh-TW, en)
*   **表單驗證**: React Hook Form + Zod
*   **通知**: Sonner (Toast Notifications)
*   **字型**: Geist Sans / Geist Mono

## 5. 聯絡表單後續串接建議
目前表單僅為前端展示，若要實際收信，建議採取以下任一方案：
1.  **EmailJS / Formspree**: 純前端串接，無需後端。
2.  **Resend / SendGrid**: 在 Next.js API Route (Server Action) 中串接，適合開發者。

---
*Created by Antigravity Agent*
