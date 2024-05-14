import {floor} from "lodash";

export function firstInFirstOut(referenceString, frameNumber) {
  let pageINMem = [];
  let pageFaults = [];
  let pageInMemArray = [];
  let pageNotInMemArray = [];
  let referenceMapArray = [];

  for (let i = 0; i < referenceString.length; i++) {
    if (pageInMem.includes(referenceString[i])) {
      pageFaults.push('');
    } else {
      pageFaults.push('F');
    }
    if (pageInMem.length < frameNumber) {
      pageInMem.unshift(referenceString[i]);
    } else {
      if (pageNotInMem.length >= frameNumber) {
        pageNotInMem.pop();
      }
      pageNotInMem.unshift(pageNotInMem.pop());
      pageInMem.unshift(referenceString[i]);
    }
    pageInMemArray.push([...pageInMem]);
    pageNotInMemArray.push([...pageNotInMem]);
  }
  return {pageInMemArray, pageFaults, pageNotInMemArray, referenceMapArray};
}