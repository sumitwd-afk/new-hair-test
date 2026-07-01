export default function QuestionProgress({
  questionLabel,
  progress,
  className = "",
}) {
  return (
    <div className={`question-progress ${className}`.trim()}>
      <div className="question-progress__head">
        <p>{questionLabel}</p>
        <span>{progress}%</span>
      </div>

      <div
        className="question-progress__track"
        aria-label={`${progress}% complete`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
        role="progressbar"
      >
        <span
          className="question-progress__fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
