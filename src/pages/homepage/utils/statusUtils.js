export function setPendingInterviewStatus(status, interviewDate) {
  const today = new Date();
  const interview = new Date(interviewDate);
  if (status === "無") {
    if (interview < today) {
      return "等待結果"; // 面試日期早於今天
    } else {
      return "等待面試"; // 面試日期在未來
    }
  }
  // 狀態不是 （無）
  return status;
}
