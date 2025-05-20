const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default formatDate;
