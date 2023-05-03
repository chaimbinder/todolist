


function getLevelPriority(index) {
  return index == 1 ? 'low' : index == 2 ? 'medium' : index == 3 ? 'high' : ''
}

function getColorPriority(index) {
  return index == 1 ? 'green' : index == 2 ? 'blue' : index == 3 ? 'red' : ''
}






export { getLevelPriority, getColorPriority }
