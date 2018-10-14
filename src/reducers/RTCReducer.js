import { fromJS } from 'immutable';
const initialState = {
    rtcConnectionState: false
}
export default (state = fromJS(initialState), action) => {
    switch (action.type) {
    case 'TOGGLE_RTC':
        return state.set('rtcConnectionState', !state.get('rtcConnectionState'));
        default:
            return state
        }
}