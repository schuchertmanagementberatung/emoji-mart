import prebuiltIndexData from '../../../data/prebuilt-index-all.json';
import NimbleEmojiIndex from './nimble-emoji-index'; // HOW TO GENERATE PREBUILT-INDEX:
// import indexData from '../../../data/all.json'
// const emojiIndex = new NimbleEmojiIndex(data);
// (emojiIndex as any).printIndex();

var emojiIndex = new NimbleEmojiIndex({}, undefined, prebuiltIndexData);
var emojis = emojiIndex.emojis,
    emoticons = emojiIndex.emoticons;

function search() {
  return emojiIndex.search.apply(emojiIndex, arguments);
}

export default {
  search: search,
  emojis: emojis,
  emoticons: emoticons
};