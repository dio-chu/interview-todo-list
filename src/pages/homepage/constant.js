// 編輯變更面試紀錄狀態時的select
export const STATUS_GROUP = [
  { id: "1", value: "none", label: "無" },
  { id: "2", value: "no_soundcard", label: "無聲卡" },
  { id: "3", value: "not_hired", label: "未錄取" },
  { id: "4", value: "hired", label: "已錄取" },
];

//homepage對於的 filter select
export const SELECT_DATA = [
  { id: "1", value: "all", label: "全部" },
  { id: "2", value: "interviewed", label: "已安排面試" },
  { id: "3", value: "resulted", label: "已有結果" },
];

//positions 面試紀錄的職位選擇
export const POSITIONS = [
  { label: "前端工程師", value: "frontend-engineer" },
  { label: "UIUX設計師", value: "uiux-designer" },
  { label: "全端工程師", value: "fullstack-engineer" },
  { label: "網頁設計師", value: "web-designer" },
  { label: "資深前端工程師", value: "senior-frontend-engineer" },
];
