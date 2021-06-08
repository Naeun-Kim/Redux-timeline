import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers } from 'redux';
import timelineReducer, {
  addTimeline,
  removeTimeline,
  editTimeline,
  increseNextPage
} from './timeline/state';
import friendReducer, {
  addFriend,
  removeFriend,
  editFriend
} from './friend/state';
import TimelineMain from './timeline/container/TimelineMain';
import FriendMain from './friend/container/FriendMain';

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer
});

const store = createStore(reducer);
//디버깅을 위해 액션 처리가 끝날 때마다 상탯값을 콘솔에 출력
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch(addTimeline({ id: 1, desc: '뢀라뢀라~'}));
store.dispatch(addTimeline({ id: 2, desc: '흐흐흐흐흐'}));
store.dispatch(increseNextPage());
store.dispatch(editTimeline({ id: 2, desc: '음?'}));
store.dispatch(removeTimeline({ id: 1, desc: '뢀라뢀라~'}));

store.dispatch(addFriend({ id: 1, desc: '백현'}));
store.dispatch(addFriend({ id: 2, desc: '수호'}));
store.dispatch(editFriend({ id: 2, desc: '카이'}));
store.dispatch(removeFriend({ id: 1, desc: '백현'}));


ReactDOM.render(
  <div>
    <FriendMain />
    <TimelineMain />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
