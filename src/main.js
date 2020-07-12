import $ from "jQuery";

/*
1. merge item into child by className merge
2. unset height: 100%
3. use flex-basis: auto instead of setting concrete number px
*/

function mergeFlexCell(item) {
  const className = $(item).attr("class");
  // console.log(`merge cell ${className}`);
  console.assert($(item).children().length === 1);
  const child = $(item).children()[0];
  $(child)
    .unwrap()    
    .addClass(className)
    .css('width', 'unset')
    .css('height', 'unset') // unset height from 100%
    .css('flex-basis', 'auto');
}

function showDivCount() {
  const n = $('div').length;
  console.log(`Total ${n} <div> tags`);
}

function main() {
  showDivCount();
  const items = $('div[class^="item"]');
  items.each(function() {
    mergeFlexCell($(this));
  });
  showDivCount();
}

main();
