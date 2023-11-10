'use strict';

const ads = document.querySelector('.ads');
const items = document.querySelector('.items');
const itemOne = items.querySelector('.item_one');
const itemTwo = items.querySelector('.item_two');
const itemThree = items.querySelector('.item_three');
const itemFive = items.querySelector('.item_five');
const itemSix = items.querySelector('.item_six');
const itemTwoTitle = itemTwo.querySelectorAll('.item__title');
const itemThreeTitle = itemThree.querySelector('.item__title');
const itemFiveTitle = itemFive.querySelector('.item__title');
const itemSixTitle = itemSix.querySelectorAll('.item__title');
const itemTwoList = itemTwo.querySelector('.props__list');
const itemThreeList = itemThree.querySelectorAll('.props__list');
const itemFiveList = itemFive.querySelector('.props__list');
const propsItemsFour = items.querySelectorAll('.props__item_four');
const propsItemFourRemoved = itemTwo.querySelector('.props__item_four');
const propsItemsTwoRemoved = itemSix.querySelectorAll('.props__item_two');

ads.remove();
items.prepend(itemThree);
items.prepend(itemTwo);
items.prepend(itemOne);

propsItemsFour[2].append(propsItemFourRemoved);
itemTwoList.append(propsItemsTwoRemoved[0]);
itemTwoList.append(propsItemsTwoRemoved[1]);

itemThreeList[0].before(itemFiveList);
itemFiveTitle.after(itemThreeList[0]);
itemTwoTitle[0].after(itemFiveTitle);
itemSixTitle[0].after(itemTwoTitle[0]);
itemThreeList[0].before(itemSixTitle[0]);
itemThreeTitle.textContent = 'This и прототипы объектов';
