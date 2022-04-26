import { useState } from 'react';

export function useUtils() {
  const [openReportProblem, setOpenReportProblem] = useState(false);
  const [openExplanation, setOpenExplanation] = useState(false);
  const [openQuestionStatistics, setOpenQuestionStatistics] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
  });

  function handleOpenExplanation() {
    setOpenExplanation(true);
    setOpenQuestionStatistics(false);
    setOpenReportProblem(false);
  }
  function handleOpenQuestionStatistics() {
    setOpenExplanation(false);
    setOpenQuestionStatistics(true);
    setOpenReportProblem(false);
  }
  function handleOpenReportProblem() {
    setOpenExplanation(false);
    setOpenQuestionStatistics(false);
    setOpenReportProblem(true);
  }

  function handleCloseBox() {
    setOpenExplanation(false);
    setOpenQuestionStatistics(false);
    setOpenReportProblem(false);
  }

  return (
    {
      openReportProblem,
      setOpenReportProblem,
      openExplanation,
      setOpenExplanation,
      openQuestionStatistics,
      setOpenQuestionStatistics,
      alert,
      setAlert,
      handleOpenExplanation,
      handleOpenQuestionStatistics,
      handleOpenReportProblem,
      handleCloseBox,
    }
  );
}
