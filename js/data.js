import {getRandomPositiveInteger, getRandomArrayElement} from './util';

const PHOTO_COUNT = 25;

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const names = [
  'Артем',
  'Алена',
  'Андрей',
  'Антон',
  'Алина',
  'Маша',
  'Владик',
  'Паша',
  'Гена'
];


//Функция для валидации уникальности индентификаторов
const getUniqueRandomPositiveInteger = (a, b) => {
  const arr = [];
  let flag = true;
  let randomInteger;
  while (flag) {
    randomInteger = getRandomPositiveInteger (a, b);
    if (!arr.includes(randomInteger)) {
      arr.push(randomInteger);
      flag = false;
    }
  }
  return randomInteger;
};

//Функция для получения объекта с комментарием
const getPhotoMessages = () => {
  return {
    id: getUniqueRandomPositiveInteger(1, 200),
    avatar:'img/avatar-' + getUniqueRandomPositiveInteger(1, 6) + '.svg',
    message: getRandomArrayElement(messages),
    name: getRandomArrayElement(names)
  };
};

//Функция для получения массива с комментариями
const getComments = () => {
  const comments = [];
  for (let i = 0; i < PHOTO_COUNT; i++) {
    comments.push(getPhotoMessages());
  }
  return comments;
};

//Функция для генерации описания к фото
const getPhotoDescription = () => {
  return {
    id: getUniqueRandomPositiveInteger(1, PHOTO_COUNT),
    url: 'photos/' + getUniqueRandomPositiveInteger(1, PHOTO_COUNT) + '.jpg',
    description: 'best photo',
    likes: getRandomPositiveInteger(15, 200),
    comments: getComments(getRandomPositiveInteger(0, 30))
  };

};

//Функция для возвращения массива объектов фото с описанием
const getPhotos = () =>{
  const photos = [];
  for (let i = 0; i < PHOTO_COUNT; i++) {
    photos.push(getPhotoDescription());
  }
  return photos;
};

export {getPhotos};
