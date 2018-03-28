export const actionTypes = {
  MOVE_ASSET: 'MOVE_ASSET',
  CREATE_ASSET: 'CREATE_ASSET',
  SELECT_ASSET: 'SELECT_ASSET'
} 

export const moveAsset = (x, y) => {
  return {
    type: actionTypes.MOVE_ASSET,
    x: x,
    y: y
  }
}

export const createAsset = (assetType)=> {
  return {
    type: actionTypes.CREATE_ASSET,
    assetType: assetType
  }
}

export const selectAsset = (id) => {
  return {
    type: actionTypes.SELECT_ASSET,
    id: id
  } 
}