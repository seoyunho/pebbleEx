const MOVE_ASSET = 'MOVE_ASSET'
const CREATE_ASSET = 'CREATE_ASSET'

function moveAsset(x, y) {
  return {
    type: MOVE_ASSET,
    x: x,
    y: y
  }
}

function createAsset() {
  return {
    type: CREATE_ASSET
  }
}