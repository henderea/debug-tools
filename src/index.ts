import './index.scss';

import { Model, ko } from 'lib/model';

// @ts-ignore
import registerServiceWorker from '@henderea/static-site-builder/registerServiceWorker';

if(process.env.NODE_ENV === 'production') {
  registerServiceWorker();
}

window.addEventListener('load', () => {
  let model = new Model();
  ko.applyBindings(model);
  let updateSizingInfo = () => setTimeout(() => {
    model.windowWidth = window.innerWidth;
    model.windowHeight = window.innerHeight;
  }, 10);
  window.addEventListener('resize', updateSizingInfo);
  updateSizingInfo();
  model.windowWidth = window.innerWidth;
  model.windowHeight = window.innerHeight;
});