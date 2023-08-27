import { getRandomPositiveInteger, repeatStr } from './utils.js';
const MIN_ID=1;
const MAX_ID= 25;
const ID_STEP=1;
const MIN_PHOTO_URL_NUMBER = 1;
// const MAX_PHOTO_URL_NUMBER = 25;
const MIN_LIKES=15;
const MAX_LIKES= 250;
const MIN_COMMENTS=1;
const MAX_COMMENTS=10;
const MIN_MESSAGE_QTY = 1;
const MAX_MESSAGE_QTY = 2;
const SIMILAR_DESCRIPTIONS_COUNT = 10;
const ANY_ARRAY_MIN_LENGTH = 0;
const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const NAMES = ['John', 'Alice', 'Ivan', 'Katya', 'Masha', 'Kolya', 'Tanya'];
const LOREM = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsum odit corrupti dolores fuga. Earum repellendus ducimus quaerat doloribus ut reiciendis placeat quos, saepe enim ipsa quis, recusandae officiis nihil.';
const MIN_LOREMS = 1;
const MAX_LOREMS= 5;
let serialId = MIN_ID;
let commentId = MIN_ID;
let serialIdIndex = MIN_PHOTO_URL_NUMBER;
let serialAvatarPicIndex = 1;

const createId = () => {
  if (serialId <= MAX_ID) {
    const fullId = serialId;
    serialId += ID_STEP;
    return fullId;
  }
};

const createCommentId = () => {
  if (commentId <= MAX_COMMENTS) {
    commentId += ID_STEP;
  }
  const fullId = commentId;
  commentId++;
  return fullId;
};

const createUrlFullPath = () => {
  const urlFolderPath = 'photos/';
  const urlFullPath = `${urlFolderPath}${serialIdIndex}.png`;
  serialIdIndex++;
  return urlFullPath;
};


const createAvatarFullPath = () => {
  const avatarPicPath = 'img/avatar-';
  const avatarFullPath = `${avatarPicPath}${serialAvatarPicIndex}.svg`;
  serialAvatarPicIndex++;
  return avatarFullPath;
};


const createComment = () => {
  const id = createCommentId();
  const avatarUrl = createAvatarFullPath();
  const messageQty = getRandomPositiveInteger(MIN_MESSAGE_QTY, MAX_MESSAGE_QTY);
  const randomMessageNumber = getRandomPositiveInteger(ANY_ARRAY_MIN_LENGTH, MESSAGES.length-1);
  const message = MESSAGES.slice(randomMessageNumber, randomMessageNumber+messageQty);
  const name = NAMES[getRandomPositiveInteger(ANY_ARRAY_MIN_LENGTH, NAMES.length-1)];
  return {
    id: id,
    avatar: avatarUrl,
    message: message,
    name: name,
  };
};

const createPhotoDescription = () =>{
  const id = createId();
  const url = createUrlFullPath();
  const description = repeatStr(LOREM, getRandomPositiveInteger(MIN_LOREMS, MAX_LOREMS));
  const likes = getRandomPositiveInteger(MIN_LIKES, MAX_LIKES);
  const comments = Array.from({length: getRandomPositiveInteger(MIN_COMMENTS, MAX_COMMENTS)},createComment);
  return {
    id: id,
    url: url,
    description: description,
    likes: likes,
    comments: comments,
  };
};


const createPhotoDescriptions = () => Array.from({length: SIMILAR_DESCRIPTIONS_COUNT}, createPhotoDescription);

export {createPhotoDescriptions};
