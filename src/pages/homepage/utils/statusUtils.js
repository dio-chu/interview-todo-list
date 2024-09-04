export function setPendingInterviewStatus(status, interviewDate) {
  const today = new Date();
  const interview = new Date(interviewDate);
  // 如果狀態為 none，根據面試日期進行狀態判斷
  if (status === "none") {
    if (interview < today) {
      return "等待結果"; // 面試日期早於今天
    } else {
      return "等待面試"; // 面試日期在未來
    }
  }
  // 狀態不是 none（無）
  return status;
}
