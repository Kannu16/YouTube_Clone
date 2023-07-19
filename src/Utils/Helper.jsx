export const formatDateDifference = (dateString) =>  {
  const inputDate = new Date(dateString);
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifferenceMs = currentDate - inputDate;

  // Convert milliseconds to days
  const daysDifference = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24));

  if (daysDifference >= 365) {
      // Calculate years difference
      const yearsDifference = Math.floor(daysDifference / 365);
      return `${yearsDifference} ${yearsDifference === 1 ? 'year' : 'years'} ago`;
  } else if (daysDifference >= 1) {
      return `${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago`;
  } else {
      // Calculate hours difference
      const hoursDifference = Math.floor(timeDifferenceMs / (1000 * 60 * 60));
      return `${hoursDifference} ${hoursDifference === 1 ? 'hour' : 'hours'} ago`;
  }
}


export const formatViews =(views) =>{
  if (views >= 1000000) {
    // Convert to millions (m)
    return (views / 1000000).toFixed(1) + 'm';
  } else if (views >= 1000) {
    // Convert to thousands (k)
    return (views / 1000).toFixed(1) + 'k';
  } else {
    // Less than 1000 views, just return the number as is
    return views.toString();
  }

}

export const fetchData = async (setVideo) =>{
  const fetchApi = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyCLNeQqcb1Wqx41aRRsxWtNjSW-lxQ4tWE")
  const myData =  await fetchApi.json();
  setVideo(myData.items);
}