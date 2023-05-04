
function getLevelPriority(index) {
  return index === 1 ? 'high' : index === 2 ? 'medium' : index === 3 ? 'low' : ''
}

function getColorPriority(index) {
  return index === 1 ? 'red' : index === 2 ? 'blue' : index === 3 ? 'green' : ''
}

export { getLevelPriority, getColorPriority }
