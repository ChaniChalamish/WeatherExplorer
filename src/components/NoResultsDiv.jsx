const NoResultsDiv = () => {
  return (
    <div className="no-results">
      <img src="icons/no-result.svg" alt="אין תוצאות" className="icon" />
      <h3 className="title">משהו השתבש</h3>
      <p className="message">אנחנו לא מצליחים לגשת למידע,אנא נסה מאוחר יותר</p>
    </div>
  );
};
export default NoResultsDiv;