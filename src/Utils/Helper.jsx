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
      const hoursDifference = Math.floor(timeDifferenceMs / (1000 * 60 * 60)).toString().replace("-","");
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

var nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
  ];
  export function generateRandomName() {
    
    return nameList[Math.floor(Math.random() * nameList.length)];

    };

    export function makeid() {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < 13) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }
    