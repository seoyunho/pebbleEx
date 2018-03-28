import {actionTypes} from '../action/asset'
import update from 'react-addons-update'

const initialState = {
  assets: [],
  selected: 0,
  assetIdCount: 0
}
const defaultAsset={
  id: '',
  x: '20px',
  y: '20px',
  type: ''
}

const context = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_ASSET:
      let newAsset= {
        ...defaultAsset,
        id: state.assetIdCount + 1,
        type: action.assetType
      }
      
      return { ...state, 
        assetIdCount: state.assetIdCount + 1,
        assets: update(
          state.assets, {
            $push: [newAsset]
          })
      }
    case actionTypes.MOVE_ASSET:
      return { ...state, 
        assets: update( 
          state.assets,{
            [state.selected] : {
              $set: {
                id: state.assets[state.selected].id,
                type: state.assets[state.selected].type,
                x: action.x + 'px',
                y: action.y + 'px'
              }
            }
          }
      )} 
    case actionTypes.SELECT_ASSET:
      return { ...state, selected: action.id }
    default:
      return state
  }
}

export default context