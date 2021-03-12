"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prebuiltIndexAll = _interopRequireDefault(require("../../../data/prebuilt-index-all.json"));

var _nimbleEmojiIndex = _interopRequireDefault(require("./nimble-emoji-index"));

// HOW TO GENERATE PREBUILT-INDEX:
// import indexData from '../../../data/all.json'
// const emojiIndex = new NimbleEmojiIndex(data);
// (emojiIndex as any).printIndex();
var emojiIndex = new _nimbleEmojiIndex["default"]({}, undefined, _prebuiltIndexAll["default"]);
var emojis = emojiIndex.emojis,
    emoticons = emojiIndex.emoticons;

function search() {
  return emojiIndex.search.apply(emojiIndex, arguments);
}

var _default = {
  search: search,
  emojis: emojis,
  emoticons: emoticons
};
exports["default"] = _default;