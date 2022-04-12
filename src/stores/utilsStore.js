import { useState } from 'react';

export function useUtils() {
  const [openReportProblem, setOpenReportProblem] = useState(false);
  const [openExplanation, setOpenExplanation] = useState(false);
  const [openQuestionStatistics, setOpenQuestionStatistics] = useState(false);
  const [alert, setAlert] = useState({});

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
    }
  );
}
