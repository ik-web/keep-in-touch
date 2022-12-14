export const handleDataPage = (data, page, length) => {
  const reversedData = [ ...data ].reverse();
  const pageLength = length;
  const dataPages = [];
  let dataPage = [];
  let dataCounter = 0;

  for (let i = 0; i < reversedData.length; i++) {
    const item = reversedData[i];

    if (dataCounter < pageLength) {
      dataPage.push(item);
      dataCounter++;
    }
    
    if (dataCounter === pageLength) {
      dataPages.push(dataPage);
      dataPage = [];
      dataCounter = 0;
    }

    if (i === data.length - 1 && dataPage.length) {
      dataPages.push(dataPage);
    }
  }

  return page <= dataPages.length 
    ? {
        items: dataPages[page - 1],
        totalCount: data.length
      }
    : {
        items: [],
        totalCount: data.length
      };
};


