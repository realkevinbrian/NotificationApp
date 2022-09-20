// Algorithm

/**
 * 1-receive date stamp in params as our input
 * 2-convert date to an object time using (new Date(Stamp));
 * 3-declare our current date
 * 4- if current date(seconds)  is equal or less than to params date
 *  4.1-print seconds ago
 * 5-or current date (seconds) greet
 *
 * We are testing minutes, months, day, week
 *
 * */

export default function FeedStamp(date) {
  const createdAt = new Date(date);
  const currentDate = new Date();
  const diffYear = createdAt.getFullYear() - currentDate.getFullYear();
  // const diffYear = 3;
  const diffMonth = currentDate.getMonth() - createdAt.getMonth();
  const diffDays = currentDate.getDay() - createdAt.getDay();
  const diffHours = currentDate.getHours() - createdAt.getHours();
  const diffMinutes = currentDate.getMinutes() - createdAt.getMinutes();
  const diffSeconds = currentDate.getSeconds() - createdAt.getSeconds();

  if (diffYear > 1 && diffYear !== 0) {
    //return difference years
    return <small>{`${diffYear} year ago`}</small>;
  } else {
    if (diffMonth > 1 && diffMonth !== 0) {
      //return months
      return <small>{`${diffMonth} months ago`}</small>;
    } else {
      if (diffDays > 1 && diffDays !== 0) {
        //return days
        return <small>{`${diffDays} days ago`}</small>;
      } else {
        //return hours
        if (diffHours > 1 && diffHours !== 0) {
          return <small>{`${diffHours} hours ago`}</small>;
        } else {
          // return minutes
          if (diffMinutes > 1 && diffMinutes !== 0) {
            return <small>{`${diffMinutes} minutes ago`}</small>;
          } else {
            //return seconds
            if (diffSeconds > 1 && diffSeconds !== 0) {
              return <small>{`${diffSeconds} Seconds ago`}</small>;
            } else {
              return <small>{`${diffSeconds} Seconds ago`}</small>;
            }
          }
        }
      }
    }
  }
}
