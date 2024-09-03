export const headers = [
  { title: "編輯", key: "edit" },
  { title: "公司名稱", key: "company" },
  { title: "面試職位", key: "position" },
  { title: "狀態", key: "status" },
  { title: "面試日期", key: "interviewDate" },
  { title: "更新日期", key: "updateDate" },
];

export const columnColors = {
  status: {
    已錄取: "#007EE2",
    等待結果: "#EC8500",
    未錄取: "#D82222",
  },
};

export const data = [
  {
    id: 1,
    company: "104資訊科技",
    position: "前端工程師",
    status: "已錄取",
    interviewDate: "2024/8/08",
    updateDate: "2024/8/28",
    isSelected: false,
  },
  {
    id: 2,
    company: "104資訊科技",
    position: "前端工程師",
    status: "未錄取",
    interviewDate: "2024/8/08",
    updateDate: "2024/8/28",
    isSelected: false,
  },
  {
    id: 3,
    company: "104資訊科技",
    position: "前端工程師",
    status: "已錄取",
    interviewDate: "2024/8/08",
    updateDate: "2024/8/28",
    isSelected: false,
  },
  {
    id: 4,
    company: "ABC科技",
    position: "後端工程師",
    status: "等待結果",
    interviewDate: "2024/8/15",
    updateDate: "2024/8/20",
    isSelected: false,
  },
  {
    id: 5,
    company: "XYZ公司",
    position: "UI設計師",
    status: "未錄取",
    interviewDate: "2024/8/10",
    updateDate: "2024/8/22",
    isSelected: false,
  },
];

// edit
export const statusGroup = [
  { id: "1", value: "none", label: "無" },
  { id: "2", value: "no_soundcard", label: "無聲卡" },
  { id: "3", value: "not_hired", label: "未錄取" },
  { id: "4", value: "hired", label: "已錄取" },
];

export const positions = ["前端工程師", "UIUX設計師", "全端設計師"];

//home filter
export const selectData = [
  { id: "1", value: "all", label: "全部" },
  { id: "2", value: "interviewed", label: "已安排面試" },
  { id: "3", value: "resulted", label: "已有結果" },
];
