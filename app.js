const content = [
  {
    'image': 'dave-hoefler-okUIdo6NxGo-unsplash.jpg',
    'caption': 'Photo by Dave Hoefler on Unsplash'
  },
  {
    'image': 'sherman-yang-VBBGigIuaDY-unsplash.jpg',
    'caption': 'Photo by Sherman Yang n Unsplash'
  },
  {
    'image': 'jakob-owens-EwRM05V0VSI-unsplash.jpg',
    'caption': 'Photo by Jakob Owens on Unsplash'
  },
  {
    'image': 'finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg',
    'caption': 'Photo by Dan Grinwis on Unsplash'
  },
  {
    'image': 'vincentiu-solomon-ln5drpv_ImI-unsplash.jpg',
    'caption': 'Photo by Vincentiu Solomon on Unsplash'
  },
  {
    'image': 'silas-baisch-Wn4ulyzVoD4-unsplash.jpg',
    'caption': 'Photo by Silas Baisch on Unsplash'
  },
  {
    'image': 'eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg',
    'caption': 'Photo by Eugene Golovesov on Unsplash'
  },
  {
    'image': 'jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg',
    'caption': 'Photo by Jennifer reynolds on Unsplash'
  },
  {
    'image': 'kellen-riggin-SIBOiXKg0Ds-unsplash.jpg',
    'caption': 'Photo by Kellen Riggin on Unsplash'
  },
  {
    'image': 'rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg',
    'caption': 'Photo by Rafael Hoyos on Unsplash'
  },
  {
    'image': 'sonya-romanovska-wzdXhyi3AiM-unsplash.jpg',
    'caption': 'Photo by Sonya Romanovska on Unsplash'
  },
]

const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const thumbnailsList = document.querySelectorAll('li');
const featureImg = document.querySelector('.feature').querySelector('img');
const caption = document.querySelector('.caption');

const classRemover = (elementsList, className) => {
  for (let elementsItem of elementsList) {
    elementsItem.classList.remove(className);
  };
};

const contentSelector = (contentArray, selector) => {
  for (let j = 0; j < contentArray.length; j++) {
    if (selector.includes(contentArray[j].image)) {
      caption.textContent = contentArray[j].caption;
    };
  };
};

const imageChanger = (iterator) => {
  thumbnailsList[iterator].classList.add('selected');
  featureImg.src = thumbnailsList[iterator].querySelector('a').querySelector('img').src;
  contentSelector(content, thumbnailsList[iterator].querySelector('a').querySelector('img').src);
};

for (let i = 0; i < thumbnailsList.length; i++) {
  thumbnailsList[i].addEventListener('click', () => {
    classRemover(thumbnailsList, 'selected');
    imageChanger(i);
  });
};

leftButton.addEventListener('click', () => {
  for (let i = 0; i < thumbnailsList.length; i++) {
    if (!thumbnailsList[0].classList.contains('selected')) {
      if (thumbnailsList[i].classList.contains('selected')) {
        thumbnailsList[i].classList.remove('selected');
        imageChanger(i-1);
      };
    };
  };
});

rightButton.addEventListener('click', () => {
  for (let i = (thumbnailsList.length - 1); i >= 0; i--) {
    if (!thumbnailsList[thumbnailsList.length - 1].classList.contains('selected')) {
      if (thumbnailsList[i].classList.contains('selected')) {
        thumbnailsList[i].classList.remove('selected');
        imageChanger(i+1);
      };
    };
  };
});
