import {createApp} from 'vue';
import BugHunter from './components/bug-hunter.vue';

document.addEventListener('DOMContentLoaded', () => {
  const bugHunterEl = document.querySelector('bug-hunter');
  if (bugHunterEl) {
    createApp(BugHunter).mount(bugHunterEl)
  } else {
    console.log('bug-hunter not found');
  }
});
