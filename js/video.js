const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response) => response.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories");
  categories.forEach((item) => {
    // creating button
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;

    // adding button
    categoriesContainer.append(button);
  });
};
loadCategories();

// videos section

const cardDemo = {
    "category_id": "1003",
    "video_id": "aaaj",
    "thumbnail": "https://i.ibb.co/xgWL3vQ/kid-gorgeous.jpg",
    "title": "Kid Gorgeous",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/xsfkwN2/john.jpg",
            "profile_name": "John Mulaney",
            "verified": true
        }
    ],
    "others": {
        "views": "241K",
        "posted_date": ""
    },
    "description": "John Mulaney's 'Kid Gorgeous' has captured the hearts of many with 241K views. As a verified comedian, John delivers a masterclass in stand-up with clever anecdotes, quick wit, and relatable humor. This performance is a laugh-filled adventure through his unique take on life, politics, and pop culture."
}




const loadvideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
};

const displayVideos = (videos) => {
  const videosContainer = document.getElementById("videos");
  videos.forEach((video) => {
    console.log(video);

    // creating card
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
      <figure class ='h-[200px] relative'>
    <img
      src= ${video.thumbnail}
      class ='h-full w-full object-cover cursor-pointer'
      alt="Shoes" />
      ${video.others.posted_date?.length == 0 ? "" : `      <span class = 'absolute right-2 bottom-2 bg-black text-white p-1'>
      ${video.others.posted_date}
      </span>`}

  </figure>
  <div class="px-0 py-2 flex gap-2 cursor-pointer">
  <div>
  <img class ='h-10 w-10 rounded-full object-cover cursor-pointer' src=${video.authors[0].profile_picture} alt="">
  </div>
  <div>
  <h2 class='font-bold'>${video.title}</h2>
  <div class='flex justify-start items-center gap-1'>
  <p class ='text-gray-500 '>${video.authors[0].profile_name}</p>
  ${video.authors[0].verified == true ?  `<img class='w-5 h-5' src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt=""></img>` : ''}
  </div>
  <p></p>
  </div>

  </div>




    `;
    videosContainer.append(card);
  });
};

loadvideos();
